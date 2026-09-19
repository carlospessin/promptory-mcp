# Promptory para Codex

O plugin usa o endpoint MCP remoto do Promptory com OAuth. Na primeira
consulta, conclua a autorização no navegador quando o Codex solicitar; não é
necessário configurar variáveis de ambiente nem copiar tokens.

O plugin é somente leitura e oferece:

- `$promptory:search`
- `$promptory:folders`
- `$promptory:tags`

A leitura de um prompt selecionado acontece internamente por `get_prompt`; não
há um comando público separado para leitura.
