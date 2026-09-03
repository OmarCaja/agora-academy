# Ágora Academy - Mathematics Academy

Modern web application built with **Astro 7** for Ágora Academy in Cuenca, Spain. This project focuses on high performance, excellent math rendering, and a premium user experience with smooth animations.

## 🚀 Project Structure

```
/
├── public/
│   ├── favicon/          # Favicon files and static assets
│   └── ejercicios/       # PDF repository for exercise worksheets by level
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── GlobalNav.astro   # Main navigation (logo and theme toggle)
│   │   ├── Menu.astro        # Full-screen animated overlay menu
│   │   ├── PropertyBox.astro # Styled container for math formulas and examples
│   │   ├── TableOfContents.astro # Dynamic TOC for topic pages
│   │   └── ...
│   ├── content/
│   │   └── topics/           # JSON data for theory topics
│   ├── content.config.ts     # Content collections schema (Astro 7)
│   ├── data/
│   │   └── exercises.ts      # Exercise PDF title/order overrides
│   ├── layouts/
│   │   └── BaseLayout.astro  # Main layout with View Transitions and KaTeX setup
│   ├── pages/
│   │   ├── theory/
│   │   │   └── [slug].astro  # Dynamic theory page generator
│   │   ├── exercises/
│   │   │   └── [level].astro  # Dynamic exercise list generator
│   │   └── index.astro       # Home page
│   ├── scripts/
│   │   ├── animations.js     # Scroll and interaction animations
│   │   └── ...
│   └── styles/
│       └── global.css        # Design system and CSS variables
└── package.json
```

## 🧩 Key Components

### Design & Navigation
- **GlobalNav.astro**: Persistent header containing the logo and high-level navigation.
- **Menu.astro**: Animated full-screen menu. Builds its own nav tree at render time from the `topics` content collection and `discoverExercises()` — there is no separate menu config file.
- **ReadingProgressBar.astro**: Visual scroll progress indicator.

### Mathematical Content
- **PropertyBox.astro**: The core building block for math content. Handles rendering of titles, formulas (KaTeX), descriptions, and examples in consistent, glassmorphic cards.
- **LevelTags.astro**: Visual indicators for educational levels (ESO/Bachillerato).

## 🎨 Key Features

### 📄 Data-Driven Content (JSON Collections)
Theory content is managed through **JSON** files, enabling:
- **Type Safety**: Powered by Zod schemas in `src/content.config.ts`.
- **Math Ready**: Native **LaTeX** support via KaTeX across all content fields (titles, descriptions, examples).
- **Scalability**: Pages are automatically generated when adding new files to `src/content/topics/`.

### 📚 Exercise Management
Dynamic listing system for PDF exercises:
- PDFs are organized by level in `public/ejercicios/`.
- Relationship mapping is defined in `src/data/exercises.ts`.
- Exercise pages are dynamically generated based on the school level.

### 🎭 Premium UX
- **View Transitions**: Seamless navigation without full page reloads.
- **Dark/Light Mode**: Full support with system preference detection and persistence.
- **Micro-Animations**: Smooth fade-ins and transformations using CSS and Vanilla JS.

## 🛠️ Commands

| Command | Action |
|---------|--------|
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview production build locally |

## 📝 Content Management

### Adding a New Theory Topic
1. Create a JSON file in `src/content/topics/`, setting `menuGroup`/`menuOrder` to control its place in the menu.
2. That's it — the topic page and menu entry are generated automatically at build time.

### Adding New Exercises
1. Upload the PDF to the corresponding folder in `public/ejercicios/<level>/<topic>/`; it's auto-discovered at build time.
2. Only edit `src/data/exercises.ts` if you need to override an auto-derived name/title.

## 📦 Tech Stack

- **Astro 7.x** (Island architecture and static generation)
- **KaTeX** (High-performance math rendering)
- **Vanilla CSS** (Modern variables, nesting, and styling)
- **GitHub Actions** (Automated deployment to GitHub Pages)

## 📄 License

© 2026 Ágora - Academia de Matemáticas
