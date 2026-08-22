# DataHub 📚

Tu web personal para la gestión de conocimiento, notas de aprendizaje, documentación de proyectos y guías, construida sobre **Astro** y lista para desplegar en **GitHub Pages**.

---

## ✨ Características

- ⚡ **Ultra Rápido**: Generador de sitios estáticos con Astro y Tailwind CSS.
- 🔍 **Búsqueda Global**: Buscador instantáneo integrado (`Ctrl/Cmd + K`) indexando páginas y encabezados.
- 📝 **Markdown & MDX**: Escribe con texto plano o utiliza componentes interactivos.
- 🗂️ **Navegación Jerárquica**: Menú lateral organizado por pestañas y grupos con tabla de contenidos automática.
- 🌙 **Tema Claro / Oscuro**: Adaptable a las preferencias del sistema.
- 🚀 **Despliegue Automático**: Configurado para GitHub Pages con GitHub Actions.

---

## 🛠️ Inicio Rápido

### Requisitos
- [Node.js](https://nodejs.org/) (v22 o superior)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

### Instalación y Desarrollo Local

```bash
# 1. Instalar dependencias
pnpm install

# 2. Iniciar servidor local
pnpm dev

# 3. Compilar para producción
pnpm build
```

---

## ✍️ Cómo Organizar y Escribir Contenido

### 1. Añadir una nueva nota o guía
Crea un archivo `.md` o `.mdx` dentro de `content/docs/` (puedes crear subcarpetas como `content/docs/proyectos/mi-proyecto.md`):

```markdown
---
title: "Título de la Nota"
description: "Resumen breve para el buscador y SEO"
navLabel: "Etiqueta en el menú (opcional)"
navIcon: "📌 (opcional)"
---

# Título Principal

Tu contenido aquí en Markdown...
```

### 2. Configurar la barra lateral
En `data/config.ts`, edita `SIDEBAR_NAVIGATION` para organizar cómo aparecen tus notas y grupos en el menú lateral.

---

## 🚀 Despliegue en GitHub Pages

1. Sube este repositorio a tu cuenta de GitHub.
2. En GitHub, ve a **Settings** > **Pages**.
3. En la sección **Build and deployment** > **Source**, selecciona **GitHub Actions**.
4. Cada `git push` a la rama `main` compilará y publicará tu sitio automáticamente.
