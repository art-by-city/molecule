<p align="center">
  <a href="https://molecule.sh">
    <img src="./img/molecule.svg" height="180">
  </a>
  <h3 align="center"><code>@decentdotland/molecule</code></h3>
  <p align="center">reusable code blocks for EXM contracts</p>
</p>


## Synopsis
Molecule is a developer tooling API for EXM developers that's built on top of the `deterministicFetch` EXM feature. `molecule.sh` is composed of multiple reusable EXM components/codes to facilitate writing EXM functions.

## Build & run

```console
git pull https://github.com/decentldotland/molecule.git

touch .env 

npm install && npm run molecules
```

Note: copy the parameters from the `.env.example` and fill the values with your API tokens

```
CHAT_API_TOKEN=...
OPENAI_API_KEY=...
OPENAI_ORGANIZATION=...
``` 

## molecule.sh structure
### Tree

```
molecules/
├── ar/
│   └── tx-gql ~> atom
└── evm/
├── └── signer
└── sol/ ~> molecule
├── └── auth
└── zil/
├── └── zil-auth
├── stx/
│   └── stx-auth
└── substrate/
├── └── substrate-auth
└── trx/
    └── trx-auth
└── ark/
├── ├── resolve
├── └── state
│   └── soark/domain
└── ai/
└── └── chatgpt
└── └── gpt3
```
### Endpoints
| molecule  | endpoint | atoms | stability |
| :-------------: |:-------------:| :-------------:| :-------------:|
| Arweave (`ar`)   | `ar.molecule.sh`    | `tx-gql` `ota` | 🟩 |
| EVM (`evm`)      | `evm.molecule.sh`     | `signer` | 🟩 |
| Solana (`sol`) | `sol.molecule.sh` | `auth` | 🟩 |
| Zilliqa (`zil`) | `zil.molecule.sh` | `zil-auth` | 🟩 |
| Stacks (`stx`) | `stx.molecule.sh` | `stx-auth` | 🟩 | 
| Substrate.io (`substrate`) | `substrate.molecule.sh` | `substrate-auth` | 🟩 |
| TRON (`trx`) | `trx.molecule.sh` | `trx-auth` | 🟩 |
| Ark Protocol (`ark`) | `ark.molecule.sh` | `state` `resolve` `soark/domain` | 🟩/🟨 
| Randomization (`rand`) | `rand.molecule.sh` | `generate` | 🟩/🟨 |
| AI (`ai`) | `ai.molecule.sh` | `gpt3` `chatgpt` | 🟩/🟨 |



### API path structure

`{molecule-name}.molecule.sh/{atom-name}/{argument1}/{argument2}`

## Examples
The following EXM contracts integrate [molecule.sh](http://molecule.sh) atoms to achieve certain functionalities:

- EXM with EVM : allows EXM contracts to be fully compatible with `action.caller` as EVM EOA. [example](./examples/evm-signing/wtf.md)

-  Fetch Arweave TX metadata: fetch L1 or bundled Arweave TX object. [example](./examples/l2-tx-content-type/wtf.md)

- Convert an Arweave public key to Arweave address. [example](./examples/ownerToAddress/wtf.md)

- Lucky draw by randomization powered by random.org - [example](./examples/luckyDraw/wtf.md)

- Solana authentication: Simple name registry contract. [example](./examples/sol-signing/wtf.md)

- Zilliqa authentication: Simple name registry contract. [example](./examples/zil-signing/wtf.md)

- Stacks authentication: Simple name registry contract. [example](./examples/stx-signing/wtf.md)

- Substrate.io authentication: Simple name registry contract. [example](./examples/substrate-signing/wtf.md)

- TRON authentication: Simple name registry contract. [example](./examples/trx-signing/wtf.md)

- Getting [Ark Protocol](https://ark.decent.land) identity object. [example](./examples/ark-resolving/wtf.md)

- Interacting with ChatGPT from EXM smart contracts. [example](./examples/chat-gpt/wtf.md)

- GPT3 integration in a smart contract. [example](./examples/gpt3/wtf.md) 

## License
This project is licensed under the [MIT License](./LICENSE)

