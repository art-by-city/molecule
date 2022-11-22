import express from "express";
import cors from "cors";
import assert from "node:assert";

import { checkSubdomain } from "./utils/resolving.js";
import { getArTxObject } from "./molecules/ar/atoms/tx-gql.js";
import { isSigner } from "./molecules/evm/atoms/verifySigner.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/tx-gql/:txid", async (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");

    assert.equal(checkSubdomain(req, "ar"), true);
    const response = await getArTxObject(req.params.txid);
    res.send(response);
    return;
  } catch (error) {
    console.log(error);
    res.send({});
    return;
  }
});

app.get("/signer/:address/:message/:signature", async (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");

    assert.equal(checkSubdomain(req, "evm"), true);
    const { address, message, signature } = req.params;
    const response = await isSigner(address, message, signature);
    res.send({ result: response });
    return;
  } catch (error) {
    res.send({ result: false });
    return;
  }
});

app.listen(port, async () => {
  console.log(`listening at PORT:${port}`);
});
