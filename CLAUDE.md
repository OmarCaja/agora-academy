# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern web application for Ágora Academy in Cuenca, Spain, built with Astro 5. The site focuses on mathematics education with high performance, excellent math rendering, and a premium user experience with smooth animations.

## Tech Stack

- **Astro 5.x** (Island architecture and static generation)
- **KaTeX** (High-performance math rendering)
- **Vanilla CSS** (Modern variables, nesting, and styling)
- **GitHub Actions** (Automated deployment to GitHub Pages)

## Project Structure

```
/
├── public/
│   ├── favicon/          # Favicon files and static assets
│   └── exercises/       # PDF repository for exercise worksheets by level
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── GlobalNav.astro   # Main navigation (logo and theme toggle)
│   │   ├── Menu.astro        # Full-screen animated overlay menu
│   │   ├── PropertyBox.astro # Styled container for math formulas and examples
│   │   ├── TableOfContents.astro # Dynamic TOC for topic pages
│   │   └── ...
│   ├── content/
│   │   └── topics/           # JSON data for theory topics
│   ├── content.config.ts     # Content collections schema (Astro 5)
│   ├── data/
│   │   ├── menu.ts           # Dynamic navigation menu configuration
│   │   └── exercises.ts      # Data structure for exercise PDFs
│   ├── layouts/
│   │   └── BaseLayout.astro  # Main layout with View Transitions and KaTeX setup
│   ├── pages/
│   │   ├── theory/
│   │   │   └── [slug].astro  # Dynamic theory page generator
│   │   ├── exercises/
│   │   │   └── [slug].astro  # Dynamic exercise list generator
│   │   └── index.astro       # Home page
│   ├── scripts/
│   │   ├── animations.js     # Scroll and interaction animations
│   │   └── ...
│   └── styles/
│       └── global.css        # Design system and CSS variables
└── package.json
```

## Key Features

### Data-Driven Content (JSON Collections)
- Theory content is managed through JSON files, enabling type safety with Zod schemas
- Native LaTeX support via KaTeX across all content fields (titles, descriptions, examples)
- Pages are automatically generated when adding new files to `src/content/topics/`

### Exercise Management
- Dynamic listing system for PDF exercises
- PDFs organized by level in `public/exercises/`
- Relationship mapping defined in `src/data/exercises.ts`
- Exercise pages dynamically generated based on school level

### Premium UX
- View Transitions for seamless navigation without full page reloads
- Dark/Light mode support with system preference detection and persistence
- Micro-animations using CSS and Vanilla JS

## Development Commands

| Command | Action |
|--------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## Content Management

### Adding a New Theory Topic
1. Create a JSON file in `src/content/topics/`
2. Register it in `src/data/menu.ts` under the appropriate section

### Adding New Exercises
1. Upload the PDF to the corresponding folder in `public/exercises/`
2. Add the entry to the `exercisesData` object in `src/data/exercises.ts`

## Core Components

### PropertyBox.astro
The core building block for math content. Handles rendering of titles, formulas (KaTeX), descriptions, and examples in consistent, glassmorphic cards.

### Menu.astro
Animated full-screen menu that uses configuration from `src/data/menu.ts` for navigation.

### GlobalNav.astro
Persistent header containing the logo and high-level navigation.

### BaseLayout.astro
Main layout with View Transitions, KaTeX setup, and SEO metadata.