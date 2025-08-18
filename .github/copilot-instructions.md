# Copilot Instructions - IRC Controller Documentation Site

## Project Overview
Modern documentation site for a Lit component library built with **Astro 5.12** and **Tailwind CSS 4.1**. Inspired by HeroUI/NextUI design with customizable theming and client-side component rendering.

## 🚫 CRITICAL RULES - NEVER BREAK THESE

### 1. Languages
- Always talk to me in spanish
- All content, code, comments, file names, git commits MUST be in English
- No Spanish text anywhere in the codebase

### 2. NO Tailwind Inline Classes
```astro
<!-- ❌ WRONG - Never do this -->
<div class="bg-blue-500 text-white p-4">

<!-- ✅ CORRECT - Use semantic CSS classes -->
<div class="hero-section">
```
- ALL styling uses `@apply` in CSS files: `src/styles/{themes,components,layout}.css`
- CSS component naming: `.btn`, `.btn-primary`, `.card`, `.nav-link`

### 3. Lit Components = Client-Side Only
- Lit components NEVER render on server (SSR)
- Use dynamic imports: `await import(\`../lit-components/\${name}.js\`)`
- Documentation components (CodeBlock, etc.) are Astro components

## Architecture Patterns

### Theme System
```css
/* src/styles/themes.css - Always use OKLCH colors */
:root {
  --color-primary: oklch(0.74 0.15 266);
  --color-background: oklch(1 0 0);
}

.dark {
  --color-background: oklch(0.09 0.01 247);
}

/* Component styles */
.my-component {
  @apply bg-background text-foreground;
}
```

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

## Key Integrations
- **Tailwind 4.1**: Uses `@tailwindcss/vite` plugin + `@theme` directive
- **Prism.js**: Syntax highlighting with theme adaptation
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
