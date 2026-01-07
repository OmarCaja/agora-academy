# Ágora Academy - Academia de Matemáticas

Modern web application built with **Astro 5** for a mathematics academy in Cuenca, Spain. This project focuses on high performance, excellent math rendering, and a premium user experience with smooth animations.

## 🚀 Project Structure

```
/
├── public/
│   └── favicon/          # Favicon files and static assets
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── GlobalNav.astro   # Main navigation with logo and theme toggle
│   │   ├── Menu.astro        # Full-screen animated overlay menu
│   │   ├── PropertyBox.astro # Styled container for math formulas and examples
│   │   ├── TableOfContents.astro # Dynamic TOC for topic pages
│   │   ├── ReadingProgressBar.astro # Top progress bar
│   │   └── ...
│   ├── content/
│   │   └── topics/           # JSON data for math topics
│   │       └── potencias.json # Data for /potencias
│   ├── layouts/
│   │   └── BaseLayout.astro  # Main layout with View Transitions and KaTeX setup
│   ├── pages/
│   │   ├── [slug].astro      # Dynamic page generator for topics
│   │   └── index.astro       # Home page
│   ├── scripts/
│   │   ├── animations.js     # Scroll and interactive animations
│   │   ├── menu.js           # Menu interaction logic
│   │   └── theme.js          # Theme switching logic
│   ├── styles/
│   │   └── global.css        # Global CSS and design system tokens
│   └── content.config.ts     # Content collections schema (Astro 5)
└── package.json
```

## 🧩 Components

The project uses a modular component architecture:

### Layout & Navigation
- **GlobalNav.astro**: Persistent header containing the logo and high-level navigation.
- **Menu.astro**: Animated full-screen navigation overlay invoked from the navigation bar.
- **ReadingProgressBar.astro**: Visual indicator of scroll progress on long content pages.
- **TableOfContents.astro**: Automatically generates an interactive list of sections for topic pages.

### Content Elements
- **PropertyBox.astro**: The core building block for math content. Handles rendering of titles, formulas, descriptions, and examples in a consistent, glassmorphic card.
- **Header.astro**: standard section header.
- **LevelTags.astro**: Visual indicators for educational levels (ESO/Bachillerato).

## 🎨 Key Features

### 📄 Data-Driven Content (JSON Collections)
Instead of flat Markdown, content is structured in **JSON** files.
- **Type Safety**: Powered by Zod schemas in `src/content.config.ts`.
- **Structured Rendering**: Automatically generates sections and subsections from data.
- **Math Ready**: Native support for **LaTeX** via KaTeX across all content fields.

### 🎭 Premium UX
- **View Transitions**: Seamless navigation between pages using Astro's `ClientRouter`.
- **Dark/Light Mode**: Full theme support with system preference detection and persistent storage.
- **Custom Animations**: Smooth fade-ins and interaction effects using vanilla JS and CSS.

### ⚡ Performance
- **Statically Generated**: Maximum speed and SEO benefit.
- **Optimized Scripts**: Minimal vanilla JS for interactivity.
- **SEO Optimized**: Includes OpenGraph, Twitter cards, and Schema.org structured data (LocalBusiness & LearningResource).

## 🛠️ Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## 📝 Managing Content

### Adding a New Topic (e.g., "Logaritmos")

1. Create `src/content/topics/logaritmos.json`.
2. Follow the established schema:
   ```json
   {
     "title": "Logaritmos",
     "description": "Explora las propiedades de los logaritmos...",
     "sections": [
       {
         "title": "Propiedad del Producto",
         "items": [
           {
             "title": "Logaritmo de un producto",
             "formula": "$\\log_a(x \\cdot y) = \\log_a(x) + \\log_a(y)$",
             "description": "El logaritmo de un producto es la suma de los logaritmos.",
             "example": "$\\log_2(8 \\cdot 4) = \\log_2(8) + \\log_2(4) = 3 + 2 = 5$"
           }
         ]
       }
     ]
   }
   ```
3. The page is automatically generated at `/logaritmos`.
4. Link it in `src/components/Menu.astro` to make it accessible.

## 📦 Tech Stack

- **Astro 5.x**
- **KaTeX** (Fast math rendering)
- **Vanilla CSS** (Next-gen CSS with variables and nesting)
- **Zod** (Content validation)

## 📄 License

© 2026 Ágora - Academia de Matemáticas
