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

## Plugins

### warp-emerald

A theme for the Claude desktop app, based on the Warp Future Emerald V3 design system: deep emerald surfaces (`#061a0c`), neon terminal green (`#00ff41`) and white text. Behind the chat it draws an 18px grid with a slow green scanline, a small status HUD in the top-right corner, and a pixel crab (from [mextexco/kani](https://github.com/mextexco/kani)) walking back and forth above the prompt box. Dark mode only. Terminals and editors don't draw themes.

Install at the prompt of a terminal session:

```text
/plugin install warp-emerald --marketplace mextexco/claude-mods
```

Or from a shell:

```bash
claude plugin install warp-emerald --marketplace mextexco/claude-mods
```

In the desktop app, where `/plugin` does not run: click + next to the prompt box, then Plugins, Add marketplace with `mextexco/claude-mods`, then Add plugin.

Answer `y` to add the marketplace, then pick the user scope. The theme shows in sessions started after that. If another theme plugin (such as theme-examples) has a theme applied, clear it first with `/custom-theme off`.

## Publish a plugin

Add a plugin directory to this repository (for example, `plugins/my-plugin/`) with its own `.claude-plugin/plugin.json` manifest, then add an entry to `.claude-plugin/marketplace.json`:

```json
{
  "name": "my-plugin",
  "source": "./plugins/my-plugin"
}
```
