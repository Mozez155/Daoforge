# DaoForge — Backend

Python event streaming backend. Listens to on-chain contract events via Soroban RPC, indexes them into PostgreSQL, and exposes a REST API for the frontend.

## Stack
- FastAPI (REST API)
- SQLAlchemy + asyncpg (async ORM)
- Alembic (database migrations)
- Stellar SDK (Soroban RPC client)
- Pydantic (settings + validation)

## Structure
```
src/daoforge/events/
├── app.py              # FastAPI app factory
├── main.py             # Entry point
├── settings.py         # Environment config
├── ingest.py           # Soroban RPC event fetching
├── consume.py          # Event listener / DB writer
├── api_models.py       # Pydantic request/response models
├── log.py              # Logger setup
├── database/
│   ├── db_models.py    # SQLAlchemy ORM models
│   └── session_factory.py  # Async DB session
└── routers/
    ├── events.py       # POST /events endpoint
    └── system.py       # GET /health endpoint
alembic/                # DB migration scripts
```

## Getting Started
```bash
pip install -e ".[dev]"
alembic upgrade head
uvicorn src.daoforge.events.main:app --reload --port 8080
```

## Environment Variables
| Variable | Default | Description |
|---|---|---|
| POSTGRES_HOST | localhost | DB host |
| POSTGRES_PORT | 5432 | DB port |
| POSTGRES_DATABASE | daoforge_test | DB name |
| POSTGRES_USER | daoforge_test | DB user |
| POSTGRES_PASSWORD | daoforge_test | DB password |
