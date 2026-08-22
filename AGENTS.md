# AGENTS.md

Instrucciones y guía para agentes de IA que asisten en el desarrollo y mantenimiento de este repositorio (**DataHub**).

## Visión General del Proyecto

- **Propósito**: Web personal y portal centralizado para gestión de conocimiento, notas, guías y documentación.
- **Stack**: Astro, TypeScript, React, Tailwind CSS, Biome, pnpm.
- **Despliegue**: GitHub Pages automatizado mediante GitHub Actions (`.github/workflows/ci.yml`).

## Estructura Principal

| Ruta | Descripción |
|---|---|
| `content/docs/` | Archivos Markdown (`.md`) y MDX (`.mdx`) de notas y documentación. |
| `data/config.ts` | Configuración global: título, metadatos, navegación del encabezado y árbol del menú lateral. |
| `src/content.config.ts` | Definición de colecciones y esquemas Zod para el contenido. |
| `src/pages/` | Páginas del sitio (`index.astro`, `[collection]/...`, etc.). |
| `src/components/` | Componentes de Astro y React (CommandPalette, Sidebar, Layouts). |
| `src/styles/` | Estilos globales con Tailwind CSS. |
| `.github/workflows/ci.yml` | Pipeline de CI/CD para compilar y desplegar a GitHub Pages. |

## Reglas y Buenas Prácticas

1. **Gestión de Contenido**:
   - Cada nota en `content/docs/` debe incluir el frontmatter mínimo obligatorio:
     ```yaml
     ---
     title: "Título de la Nota"
     description: "Descripción breve para SEO y buscador"
     ---
     ```
   - Al agregar nuevas categorías o secciones de primer nivel, actualizar el mapa `SIDEBAR_NAVIGATION` en `data/config.ts`.

2. **Código y Estilos**:
   - TypeScript estricto.
   - Preferir componentes Astro estáticos; usar React solo cuando se requiera interactividad en el cliente (ej. `CommandPalette`).
   - Mantener accesibilidad y compatibilidad con tema oscuro/claro.

3. **Comandos de Validación**:
   - `pnpm dev`: Inicia el servidor de desarrollo local.
   - `pnpm build`: Genera el sitio estático para producción.
   - `pnpm check`: Revisa linting y formateo con Biome.
   - `pnpm typecheck`: Valida tipos de Astro y TypeScript.
   - `pnpm validate`: Ejecuta `check` y `typecheck`.
