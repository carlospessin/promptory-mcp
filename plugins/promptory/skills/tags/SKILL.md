---
name: tags
description: Use when the user wants to browse Promptory tags or prompts organized by tag.
---

Use the remote `promptory` MCP server and call `list_tags`.

Show only a numbered list containing tag names. Resolve a following number or
name against the latest list, then call `list_prompts_by_tag`. Show the returned
prompts as a numbered list with each title and its description when one exists;
do not show the full content. If the user selects a prompt, call `get_prompt` and
execute the retrieved instruction immediately in the conversation. Before
destructive or external actions, request explicit confirmation. Never expose
tokens or request `user_id`.
