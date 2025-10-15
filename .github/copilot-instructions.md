# Copilot Instructions - IRC Controller Documentation Site

## Project Overview
Modern documentation site for a Lit component library built with **Astro 5.12**. Inspired by HeroUI/NextUI design with customizable theming and client-side component rendering.

## 🚫 CRITICAL RULES - NEVER BREAK THESE

### 1. Languages
- Always talk to me in spanish
- All content, code, comments, file names, git commits MUST be in English
- No Spanish text anywhere in the codebase  

### Layout System
- `BaseLayout.astro`: Core HTML structure, theme setup
- `DocsLayout.astro`: Documentation pages with sidebar
- `LandingLayout.astro`: Marketing/home page

### File Structure
```
src/
├── components/
│   ├── layout/    # Header, Sidebar, Footer
│   ├── ui/        # Button, Card, Badge
│   ├── docs/      # CodeBlock, ComponentPreview
│   └── icons/     # SVG components
├── layouts/       # Page layouts
├── pages/docs/    # Documentation content
└── styles/        # CSS with @apply only
```

## Development Commands
```bash
npm run dev        # localhost:4321
npm run build      # Production build
npx astro check    # Type checking
```

## Commit Message Pattern -> ⚠️ CRITICAL - NEVER BREAK THIS

All commit messages must match this regular expression to comply with the enforced linting rules: `^(build|docs|feat|fix|perf|refactor|revert|style|test)\((MJOLIT-[0-9]*)\)!?:\s(add|fix|update|test|change|remove|panic|close)\s(.*)$`.

## Key Integrations
- **Dark mode**: CSS `class` strategy on `<html>`
- **Context7 MCP**: Use for up-to-date library documentation

## Documentation Resources

### Context7 MCP Server Usage
When working with external libraries or needing current documentation:
```typescript
// Always use Context7 MCP for latest docs
mcp_context7_resolve-library-id -> mcp_context7_get-library-docs
// Examples: astro, tailwindcss, lit, prismjs
```

### Project Documentation
- Technical specs: `.technical-docs/especificaciones-tecnicas.md`
- Action plan: `.technical-docs/plan-de-accion.md`
- Progress tracking: `.technical-docs/seguimiento.md`
