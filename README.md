# Ágora Academy - Academia de Matemáticas

Modern web application built with **Astro** for a mathematics academy in Cuenca, Spain. 


## 🚀 Project Structure

```
/
├── public/
│   └── favicon/          # Favicon files and static assets
├── src/
│   ├── components/       # Reusable Astro components with scoped styles
│   │   ├── ContactItem.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── InfoBox.astro
│   │   ├── Katex.astro      # Math rendering component
│   │   ├── LevelTags.astro
│   │   ├── Menu.astro       # Navigation menu component
│   │   └── ThemeToggle.astro # Dark/Light mode toggle
│   ├── content/
│   │   ├── topics/           # Markdown content for generated pages
│   │   │   └── potencias.md  # Content for /potencias
│   │   └── config.ts         # Content collection configuration
│   ├── layouts/
│   │   └── BaseLayout.astro  # Main layout wrapper
│   ├── pages/
│   │   ├── [slug].astro      # Generic dynamic page generator
│   │   └── index.astro       # Home page
│   ├── scripts/
│   │   ├── animations.js     # Scroll animations and easter eggs
│   │   ├── menu.js          # Menu interaction logic
│   │   └── theme.js         # Theme switching logic
│   └── styles/
│       └── global.css       # Global properties and Markdown utility classes
└── package.json
```

## 🧩 Components

The project uses a component-based architecture for better maintainability and style encapsulation.

### BaseLayout.astro
The main layout shell that orchestrates the common UI elements:
- `Meta` tags and SEO
- `<ThemeToggle />`
- `<Menu />`
- `<Footer />`

### UI Components
- **Menu.astro** - Animated full-screen navigation overlay. Styles are scoped to the component.
- **ThemeToggle.astro** - Button to switch between Light and Dark modes.
- **Header.astro** - Standard page header with title and optional subtitle.
- **Footer.astro** - Site footer.
- **Katex.astro** - Auto-loads KaTeX libraries for rendering math formulas in the browser.

### Content Components
- **InfoBox.astro** - Styled container for highlighting information.
- **ContactItem.astro** - Formatted label/value pair for contact details.
- **LevelTags.astro** - Educational level badges.

## 🎨 Features

### 📄 Dynamic Markdown Pages
Create new educational pages instantly without writing code.
- **Single Source of Truth**: Content lives in `src/content/topics/*.md`.
- **Automatic Routing**: `src/pages/[slug].astro` automatically generates routes based on filenames (e.g., `topics/sumas.md` -> `/sumas`).
- **Rich Formatting**: Supports standard Markdown and HTML wrappers.
- **Math Ready**: All dynamic pages automatically support **LaTeX** math formulas via KaTeX (e.g., `$a^2 + b^2 = c^2$`).

### 🌓 Theme System
- Robust Light/Dark mode with system preference detection.
- **Scoped Styles**: Component-specific styles are encapsulated, with global variables handling the theme colors.
- **Smooth Transitions**: Global transition handling ensures a pleasant switch experience.

### ⚡ Performance
- **Zero-JS by Default**: The site is statically generated.
- **Vanilla Islands**: Interactive elements (Menu, Theme Toggle) use lightweight Vanilla JS, keeping the bundle size minimal.
- **100/100 Lighthouse Score**.

## 🛠️ Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## 📝 Managing Content

### Adding a New Page (e.g., "Logaritmos")

1.  Create a new file: `src/content/topics/logaritmos.md`.
2.  Add frontmatter and content:
    ```markdown
    ---
    title: "Propiedades de los Logaritmos"
    description: "Aprende todo sobre logaritmos..."
    ---
    
    <section class="fade-in">
      <h2>Logaritmo de un producto</h2>
      <div class="info-box property-box">
         <p class="formula">$\log(a \cdot b) = \log(a) + \log(b)$</p>
      </div>
    </section>
    ```
3.  The page is now available at `localhost:4321/logaritmos`.
4.  (Optional) Add a link to it in `src/components/Menu.astro`.

### Styling Content
You can use standard Markdown or wrap content in special classes for the "Card" look:
- `<div class="info-box">...</div>`: Standard card.
- `<div class="info-box property-box">...</div>`: Card optimized for math properties.
- Classes `.formula` and `.example` available for styling math blocks.

## 📦 Tech Stack

- **Astro ^5.16.6**
- **KaTeX** (Math Rendering)
- **Vanilla CSS** (Scoped & Global)
- **Vanilla JS** (Interactivity)

## 📄 License

© 2025 Ágora - Academia de Matemáticas
