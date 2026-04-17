# DaoForge — Smart Contracts

Soroban smart contracts written in Rust, deployed on Stellar blockchain. These are the source of truth for all governance, versioning, and membership logic.

## Stack
- Rust (no_std)
- Soroban SDK
- BLS12-381 cryptography (anonymous voting)

## Contracts

### `daoforge/` — Core contract
Handles four responsibilities:
- **Versioning**: project registration, on-chain commit hash tracking, maintainer management
- **DAO**: proposal creation, public/anonymous voting, proposal execution, outcome contracts
- **Membership**: member registration, badge assignment, voting weight calculation
- **Admin**: pause/unpause, contract upgrades, domain/collateral contract management

### `scf-membership/` — SCF Membership contract
NFT-style membership contract for Stellar Community Fund governance.

## Deployed Addresses
| Network | Address |
|---|---|
| Mainnet | `CDXINK2T3P46M4LWK35FVIXXHJ2XHAS4FOVCGVPJ63YV5OVTM24IY5BI` |
| Testnet | `CBXKUSLQPVF35FYURR5C42BPYA5UOVDXX2ELKIM2CAJMCI6HXG2BHGZA` |

## Getting Started
```bash
# Build
cargo build

# Run tests
cargo test

# Build optimized WASM
cargo build --release --target wasm32-unknown-unknown
```
