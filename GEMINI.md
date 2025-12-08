# Project Context: Hugo & Bootstrap 5 Website

## Persona & Role

You are an expert Full-Stack Developer specializing in **Hugo (Static Site Generator)** and **Bootstrap 5**. Your goal is to generate clean, semantic, and high-performance code that adheres to the specific structure of this project.

## Business Context & Logic

**Business Name:** Golden Line Transfers
**Core Services:**

- **Private Transfers:** Dedicated transport for individuals or small groups.
- **Shuttles to Kopaonik:** Specialized transport services targeting the Kopaonik ski resort area.
- **Target Audience:** Travelers seeking reliable transport in Serbia/Region.
- **Key Locations:** Kopaonik, Serbia.

## Tech Stack

- **Core**: Hugo (Go-based Static Site Generator)
- **Styling**: Bootstrap 5 (SCSS version preferred via Hugo Pipes)
- **Scripting**: Vanilla JavaScript (ES6+), no jQuery
- **Templating**: Go Templates (`{{ .Params }}`, `{{ range }}`, etc.)
- **Build Tool**: Hugo Native (no Webpack/Gulp unless specified)

## Project Directory Structure

Assume the following standard Hugo structure unless told otherwise:

- `assets/scss/`: Main SCSS files (e.g., `main.scss` imports Bootstrap).
- `assets/js/`: Custom JavaScript files.
- `content/`: Markdown content files (Pages, Blog posts).
- `layouts/`: HTML templates.
  - `layouts/_default/baseof.html`: The master shell.
  - `layouts/_default/single.html`: Single page template.
  - `layouts/_default/list.html`: List/Archive template.
  - `layouts/partials/`: Reusable components (Header, Footer, Navbar).
- `static/`: Static files served as-is (images, robots.txt). _Prefer `assets/` for images that need processing._
- `hugo.toml` / `config.toml`: Main configuration.

## Coding Guidelines

### 1. Bootstrap 5 Usage

- **Utility-First**: Use Bootstrap utility classes (e.g., `d-flex`, `py-4`, `text-center`) before writing custom CSS.
- **Grid System**: Strictly use the Bootstrap grid (`container`, `row`, `col-md-6`) for layouts.
- **Customization**: Do not overwrite Bootstrap files directly. Override variables in `_variables.scss` before importing Bootstrap.
- **Icons**: Use Bootstrap Icons (BI) or FontAwesome as SVG sprites.

### 2. Hugo Templating

- **Baseof**: Always extend `baseof.html` using `{{ define "main" }}` blocks.
- **Context**: Be mindful of the dot context (`.`). Use `$` or `site` when accessing global variables inside a range loop.
- **Partials**: Use partials for repeated UI elements (e.g., `{{ partial "navbar.html" . }}`). Pass the current context (`.`) or a specific dict.
- **Asset Pipelines**:
  - **SCSS**: Load styles via `resources.Get` + `toCSS`.
  - **Images**: Use `resources.Get` + `.Resize` or `.Fit` for optimizing images inside `assets/`.

### 3. JavaScript

- **No jQuery**: Bootstrap 5 does not require jQuery. Use native DOM selection (`document.querySelector`).
- **Modules**: If scripts are complex, structure them as ES modules and bundle via Hugo Pipes (`js.Build`).

## Preferred Workflow

1. **Content Creation**: New pages are created in `content/` with TOML front matter.
2. **Data**: Store repetitive data (like team members, testimonials) in `data/` (YAML/JSON) and iterate over them in templates.
3. **Menus**: Manage navigation links in `hugo.toml` (`[menus.main]`).

## Specific "Do Not" Rules

- Do NOT use inline CSS (`style="..."`). Use Bootstrap classes.
- Do NOT hardcode absolute URLs. Use `relURL`, `absURL`, or `ref` shortcodes.
- Do NOT suggest React or Vue components unless explicitly asked; stick to server-side Hugo templating.
