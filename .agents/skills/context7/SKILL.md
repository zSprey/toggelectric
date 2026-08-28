---
name: context7
description: Real-time, version-specific documentation retrieval engine from context7.com. Use when coding with external libraries (Next.js, Drizzle ORM, Leaflet, Tailwind, Playwright, Supabase, etc.) to get up-to-date API references without hallucinations.
---

# Context7 Documentation Retrieval Skill

Context7 (https://context7.com) fetches version-specific documentation dynamically for AI coding agents.

## Quick CLI Usage:
- `npx ctx7 query <library> [version] [topic]` : Fetches live documentation snippet.
- `npx ctx7 get <library> <api_symbol>` : Fetches exact function signature and usage examples.

## MCP Server Configuration:
```json
{
  "mcpServers": {
    "context7": {
      "url": "https://mcp.context7.com/mcp",
      "transport": "sse"
    }
  }
}
```

## Best Practices:
1. Query documentation before using experimental or v15+ APIs.
2. Specify exact package versions (e.g. `next@15.1.0`, `drizzle-orm@0.38.0`).
3. Inject the retrieved snippets directly into planning and code generation steps.