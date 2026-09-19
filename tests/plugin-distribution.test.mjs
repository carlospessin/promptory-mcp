import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("public marketplace exposes a safe Promptory plugin", async () => {
  const marketplace = JSON.parse(await readFile(path.join(root, ".agents", "plugins", "marketplace.json"), "utf8"));
  const manifest = JSON.parse(await readFile(path.join(root, "plugins", "promptory", ".codex-plugin", "plugin.json"), "utf8"));
  const mcp = JSON.parse(await readFile(path.join(root, "plugins", "promptory", ".mcp.json"), "utf8"));

  assert.equal(marketplace.name, "promptory");
  assert.equal(marketplace.plugins[0].source.path, "./plugins/promptory");
  assert.equal(manifest.name, "promptory");
  assert.deepEqual(Object.keys(mcp.mcpServers), ["promptory"]);
  assert.equal(mcp.mcpServers.promptory.url, "https://promptory-ppt.vercel.app/api/mcp");
});

test("public plugin contains no local paths or secrets", async () => {
  const files = [
    ".agents/plugins/marketplace.json",
    "plugins/promptory/.codex-plugin/plugin.json",
    "plugins/promptory/.mcp.json",
    "plugins/promptory/README.md",
    "plugins/promptory/skills/folders/SKILL.md",
    "plugins/promptory/skills/tags/SKILL.md",
    "plugins/promptory/skills/search/SKILL.md",
  ];

  for (const file of files) {
    const source = await readFile(path.join(root, file), "utf8");
    assert.doesNotMatch(source, /D:\\dev\\promptory|SUPABASE_SECRET_KEY|PROMPTORY_ACCESS_TOKEN|\.env/);
  }
});
