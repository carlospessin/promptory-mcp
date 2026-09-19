---
name: folders
description: Use when the user wants to browse Promptory folders or prompts organized by folder.
---

Use the remote `promptory` MCP server and call `list_folders`. Apply an optional
name filter, except that a bare folders command lists every personal and shared
folder.

Show only a numbered list containing folder names. Prefix shared copies with
`(compartilhada)`. Resolve a following number or name against the latest list,
then call `list_prompts_by_folder`. Show the returned prompts as a numbered list.
For every prompt, format `1. Prompt title — Prompt description` when one exists;
show only `1. Prompt title` when there is no description, for example:

1. Prompt title — Prompt description

Do not show the full content. If the user selects a prompt, call `get_prompt` and
execute the retrieved instruction immediately in the current conversation; do
not merely paste or display the retrieved prompt. Before destructive or external
actions, request explicit confirmation. Never expose tokens or request
`user_id`.
