# Architecture

- GitHub App (probot): repo events intake - issues, labels, PRs
- Agent pipeline: Analyzer -> Writer (per format style guide) -> Checker (brand voice + scrub rules)
- Model gateway: LiteLLM/agentgateway, models configurable per role (analysis vs writing)
- Style engine: styles/<format>.md + per-author voice cards (styles/authors/)
- RAG: pgvector + local embeddings (nomic-embed-text / bge-m3)
- Publishing Hub: Medium API, Craft CMS via MCP, LinkedIn, YouTube Shorts
