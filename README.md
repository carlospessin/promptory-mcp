# Promptory Codex plugin

Marketplace público do plugin Promptory para Codex. O pacote contém somente as
skills e a configuração do MCP remoto; OAuth, dados e RLS continuam no site
Promptory.

## Instalação

```powershell
codex plugin marketplace add carlospessin/promptory-mcp --sparse .agents/plugins --sparse plugins/promptory
codex plugin add promptory@promptory
```

O plugin declara o servidor MCP remoto em `.mcp.json` e pode abrir o navegador
para OAuth durante a instalação. Se `promptory` não aparecer em
`codex mcp list`, use o fallback:

```powershell
codex mcp add promptory --url https://promptory-ppt.vercel.app/api/mcp
```

Inicie uma conversa nova e use `$promptory:folders`, `$promptory:tags` ou
`$promptory:search`.
