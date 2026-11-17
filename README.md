# claude-mods

Claude Code plugin marketplace maintained by [mextexco](https://github.com/mextexco).

## Add this marketplace

In Claude Code, run:

```text
/plugin marketplace add mextexco/claude-mods
```

Then list available plugins with:

```text
/plugin
```

## Publish a plugin

Add a plugin directory to this repository (for example, `plugins/my-plugin/`) with its own `.claude-plugin/plugin.json` manifest, then add an entry to `.claude-plugin/marketplace.json`:

```json
{
  "name": "my-plugin",
  "source": "./plugins/my-plugin"
}
```

The repository currently has no plugin packages, so the marketplace is set up but has nothing installable until a plugin is added to the `plugins` list.
