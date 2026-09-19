---
name: search
description: Use when the user wants to search the Promptory prompt library by text.
---

Use the remote `promptory` MCP server and call `search_prompts` for the user's
text.

Show search results as a concise numbered list. If the user selects a result,
call `get_prompt` and execute the retrieved instruction immediately in the
conversation. Before destructive or external actions, show what will happen and
request explicit confirmation. Never expose tokens or request `user_id`.
