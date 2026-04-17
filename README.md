# DaoForge

**Decentralized governance and cryptographic code integrity for open-source projects — built on Stellar.**

DaoForge is a public good. It exists to make open-source software more trustworthy, more governable, and more sustainable. By anchoring Git commit hashes on-chain and giving every project its own DAO, DaoForge brings transparency and accountability to the parts of software development that have historically been invisible and centralized.

Live on Stellar Mainnet: [`CDXINK2T3P46M4LWK35FVIXXHJ2XHAS4FOVCGVPJ63YV5OVTM24IY5BI`](https://stellar.expert/explorer/public/contract/CDXINK2T3P46M4LWK35FVIXXHJ2XHAS4FOVCGVPJ63YV5OVTM24IY5BI)

---

## The Problem

Open-source software powers the internet, yet the infrastructure around it is deeply centralized and fragile.

- A single platform (GitHub) controls the history, releases, and identity of millions of projects
- Maintainers can be compromised, go rogue, or have their accounts taken over — silently
- There is no trustless way to verify that the code you depend on today is the same code that was reviewed and approved
- Governance decisions — who becomes a maintainer, what gets merged, how funds are spent — happen in opaque, informal ways with no on-chain record

These are not theoretical risks. Supply chain attacks have caused billions in damages. The open-source ecosystem needs a trust layer it doesn't yet have.

---

## What DaoForge Does

DaoForge is a governance and versioning layer that sits alongside your existing workflow. It does not replace GitHub. It makes GitHub's output verifiable and its governance trustless.

**On-chain commit verification**
Every time a maintainer pushes code, a Git hook records the commit hash on Stellar's blockchain. Anyone — a developer, an auditor, a dependent project — can verify at any time that the code they are running matches the on-chain record. Tampering becomes detectable.

**Per-project DAOs**
Every registered project gets its own DAO. Maintainers and contributors submit proposals, vote on decisions, and execute outcomes entirely on-chain. Voting weight is tied to earned badges, reflecting real contribution history rather than token holdings.

**Privacy-preserving voting**
Governance votes can be cast anonymously using BLS12-381 cryptographic commitment schemes. Voters get a verifiable proof that their vote was counted correctly without revealing how they voted. This protects contributors from social pressure and retaliation.

**Badge-based membership**
Roles and voting power are managed through on-chain badges assigned by maintainers. Badges represent real contributions — not wealth. This makes governance resistant to plutocracy and Sybil attacks.

**Decentralized storage**
Proposal content and project metadata are stored on IPFS via Storacha, ensuring that governance records are permanent and not dependent on any single server or company.

**Domain integration**
Project names are protected through Soroban Domains, preventing name squatting and ensuring that the project you are funding or depending on is the one you think it is.

---

## Why This Is a Public Good

DaoForge does not extract value from the projects it serves. There are no fees, no token requirements, no platform lock-in. The smart contracts are open source, deployed on a public blockchain, and governed by the community that uses them.

The projects that register on DaoForge are themselves open-source public goods — libraries, tools, protocols, and infrastructure that the broader software ecosystem depends on. By giving these projects a trustless governance layer and a verifiable commit history, DaoForge strengthens the entire dependency graph of open-source software.

This is precisely the problem Drips was built to address: the sustainability and integrity of the FOSS ecosystem. DaoForge is infrastructure for that ecosystem.

---

## Current State

DaoForge is live on Stellar Mainnet and Testnet. The core contracts are deployed and auditable. The dapp is functional and accessible at [daoforge.dev](https://daoforge.dev).

What exists today:
- Soroban smart contracts for versioning, governance, and membership
- A web dapp for project registration, proposal creation, and voting
- Anonymous voting with cryptographic proof verification
- IPFS-backed proposal storage
- Python event streaming backend for real-time on-chain activity
- Git hooks for seamless commit hash submission

What is being built next (open issues for contributors):
- Contribution metrics and GitHub activity analytics
- Full E2E and contract test coverage
- SDK packages for external integrations
- Documentation website
- CI/CD pipeline and automated contract deployment
- Enhanced proposal UI (templates, outcome modes, result visualization)

The full list of open issues is in [`ISSUES.md`](./ISSUES.md). These are real, well-scoped tasks ready for contributors to pick up.

---

## Architecture

```
daoforge/
├── smartcontract/      # Rust/Soroban smart contracts
│   ├── daoforge/       # Core governance + versioning contract
│   └── scf-membership/ # Badge-based membership contract
├── frontend/           # Astro + React dapp
│   └── src/            # Components, services, utilities
├── backend/            # Python event streaming backend
│   └── src/            # FastAPI app, DB models, event ingestion
└── daoforge.toml       # Project configuration
```

Each directory is independently deployable. The smart contracts are the source of truth — the frontend and backend are interfaces to them, replaceable and forkable.

---

## Dependencies

DaoForge is built on and directly benefits from the following open-source projects:

- [Stellar / Soroban](https://github.com/stellar/rs-soroban-sdk) — smart contract platform
- [Astro](https://github.com/withastro/astro) — frontend framework
- [React](https://github.com/facebook/react) — UI library
- [FastAPI](https://github.com/tiangolo/fastapi) — Python backend framework
- [SQLAlchemy](https://github.com/sqlalchemy/sqlalchemy) — database ORM
- [Alembic](https://github.com/sqlalchemy/alembic) — database migrations
- [Stellar Wallets Kit](https://github.com/Creit-Tech/Stellar-Wallets-Kit) — wallet integration
- [Storacha / web3.storage](https://github.com/storacha/w3up) — IPFS storage

Funding DaoForge means funding a project that actively depends on and promotes these foundational tools.

---

## Contributing

DaoForge is actively seeking contributors. The [`ISSUES.md`](./ISSUES.md) file contains 58 well-defined issues across frontend components, backend services, tests, CI/CD, and documentation — each with a clear description and acceptance criteria.

If you are a developer who wants to contribute to open-source infrastructure that directly improves the security and governance of the FOSS ecosystem, this is a good place to start.

To get started locally:

```bash
# Install dependencies
cd dapp && bun install

# Run the dapp
bun run dev

# Run contract tests
cargo test

# Run the Python backend
cd daoforge && python -m uvicorn src.daoforge.events.main:app --reload
```

---

## Funding

DaoForge is seeking sustainable funding to support ongoing development, contributor rewards, and infrastructure costs.

If you fund open-source software or care about the integrity of the software supply chain, we would welcome your support. Funds received will be split between active maintainers and forwarded to the open-source dependencies this project relies on — consistent with the Drips dependency funding model.

**Stellar Mainnet contract:** `CDXINK2T3P46M4LWK35FVIXXHJ2XHAS4FOVCGVPJ63YV5OVTM24IY5BI`
**GitHub:** [github.com/Consulting-Manao/daoforge](https://github.com/Consulting-Manao/daoforge)
**Web:** [daoforge.dev](https://daoforge.dev)

---

## License

MIT — free to use, fork, and build on.
