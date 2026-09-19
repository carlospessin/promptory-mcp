# Promptory Codex plugin

Marketplace público do plugin Promptory para Codex. O pacote contém somente as
skills e a configuração do MCP remoto; OAuth, dados e RLS continuam no site
Promptory.

## Instalação

```powershell
codex plugin marketplace add carlospessin/promptory-mcp --sparse .agents/plugins --sparse plugins/promptory
codex plugin add promptory@promptory
codex mcp add promptory --url https://promptory-ppt.vercel.app/api/mcp
```

O `codex mcp add` pode abrir automaticamente o navegador para OAuth. Se o
servidor já estiver cadastrado, execute `codex mcp login promptory`.

Inicie uma conversa nova e use `$promptory:folders`, `$promptory:tags` ou
`$promptory:search`.

O plugin e o MCP são somente leitura. Nunca copie tokens ou segredos para este
repositório.
