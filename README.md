# Ágora Academy - Academia de Matemáticas

Modern web application built with **Astro** for a mathematics academy in Cuenca, Spain.

## 🚀 Project Structure

```
/
├── public/
│   └── favicon/          # Favicon files and static assets
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── ContactItem.astro
│   │   ├── Header.astro
│   │   ├── InfoBox.astro
│   │   ├── LevelTags.astro
│   │   └── PropertyBox.astro
│   ├── layouts/
│   │   └── BaseLayout.astro  # Main layout with theme toggle and menu
│   ├── pages/
│   │   ├── index.astro       # Home page
│   │   └── potencias.astro   # Math properties page
│   ├── scripts/
│   │   ├── animations.js     # Scroll animations and easter eggs
│   │   ├── menu.js          # Menu toggle functionality
│   │   └── theme.js         # Theme switching logic
│   └── styles/
│       └── global.css       # Global styles and CSS variables
└── package.json
```

## 🧩 Components

### BaseLayout.astro
The main layout component that includes:
- Meta tags for SEO and social sharing
- Theme toggle button (light/dark mode)
- Navigation menu overlay with animated math symbols
- Footer
- Global styles and scripts

### Reusable Components

- **Header.astro** - Page title and subtitle display
- **InfoBox.astro** - Styled content boxes with neo-brutalist design
- **ContactItem.astro** - Contact information with label/value pairs
- **LevelTags.astro** - Educational level badges (E.S.O., Bachillerato) with easter egg
- **PropertyBox.astro** - Mathematical property display with KaTeX formulas

## 🎨 Features

### Theme Toggle
- Seamless light/dark mode switching
- Persists user preference in localStorage
- Respects system color scheme preference
- Smooth transitions between themes

### Navigation Menu
- Animated math symbol toggle button (π, +, -, ×, ÷, =)
- Full-screen overlay menu
- Smooth animations and transitions
- Keyboard accessible (ESC to close)
- Prevents body scroll when open

### Easter Eggs
- Click on level tags (E.S.O., BACHILLERATO) to trigger falling Pi digits animation
- Menu button cycles through different math symbols with animation

### Scroll Animations
- Fade-in animations for sections
- Intersection Observer API for performance
- Staggered animation delays for visual appeal

### Mathematical Content
- KaTeX rendering for beautiful math formulas
- Interactive property boxes
- Clear examples and explanations

## 🛠️ Commands

All commands are run from the root of the project:

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro ...` | Run Astro CLI commands |

## 📝 Pages

### Home Page (`/`)
- Introduction to Ágora Academy
- Educational levels offered (E.S.O. and Bachillerato)
- Benefits and features
- Contact information with Google Maps integration

### Potencias Page (`/potencias`)
- Comprehensive guide to exponent properties
- KaTeX-rendered mathematical formulas
- Interactive examples
- Organized by topic:
  - Basic exponents (zero, one)
  - Signs in exponents (even/odd)
  - Operations with exponents
  - Special exponents (negative, rational)

## 🎯 Key Benefits

1. **Component Reusability** - Modular components used across pages
2. **Better Organization** - Clear separation of layouts, components, and pages
3. **Performance** - Astro's partial hydration and static generation
4. **Maintainability** - Single source of truth for common elements
5. **Type Safety** - TypeScript support for component props
6. **SEO Optimized** - Server-side rendering with proper meta tags

## 📦 Dependencies

- **Astro ^5.16.6** - Modern web framework
- **KaTeX** - Math formula rendering (loaded via CDN)
- **Google Fonts** - Space Mono monospace font

## 🎨 Design System

The project uses CSS custom properties for consistent theming:

### Color Schemes
- Light theme: `#f4f4f4` background, `#2a2a2a` text
- Dark theme: `#1a1a1a` background, `#f4f4f4` text
- Automatic theme switching based on user preference

### Spacing Scale
- `--spacing-xs`: 10px
- `--spacing-sm`: 15px
- `--spacing-md`: 20px
- `--spacing-lg`: 40px
- `--spacing-xl`: 60px

### Typography
- Font family: Space Mono (monospace)
- Base size: 18px
- Responsive sizing with `clamp()`

### Visual Effects
- Neo-brutalist shadows: `5px 5px 0 var(--shadow-color)`
- Border width: 2px
- Transition speed: 0.5s
- No border radius (sharp corners)

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint at 768px for desktop layouts
- Safe area insets for notched devices (iPhone X+)
- Touch-optimized interactions
- `-webkit-fill-available` for proper mobile viewport height

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support (Tab, ESC)
- Screen reader friendly with `.sr-only` class
- Focus management for menu overlay
- Proper heading hierarchy

## 🚀 Deployment

The project can be deployed to any static hosting service:

### Build for Production
```bash
npm run build
```

This generates a `dist/` folder with optimized static files.

### Recommended Hosting Platforms
- **Netlify** - Automatic deployments from Git
- **Vercel** - Zero-config deployments
- **GitHub Pages** - Free hosting for public repos
- **Cloudflare Pages** - Fast global CDN

### Deployment Configuration
The project is configured for static site generation. Simply deploy the `dist/` folder after building.

## 🔧 Development Tips

### Adding a New Page
1. Create a new `.astro` file in `src/pages/`
2. Import and use `BaseLayout`
3. Add navigation link in `BaseLayout.astro`

Example:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
---

<BaseLayout 
  title="New Page - Ágora"
  description="Description here"
  currentPage="newpage"
>
  <Header title="NEW PAGE" />
  <!-- Your content here -->
</BaseLayout>
```

### Creating a New Component
1. Create a `.astro` file in `src/components/`
2. Define TypeScript interface for props
3. Use the component in your pages

Example:
```astro
---
interface Props {
  title: string;
  content?: string;
}

const { title, content } = Astro.props;
---

<div class="my-component">
  <h3>{title}</h3>
  {content && <p>{content}</p>}
  <slot />
</div>
```

### Modifying Styles
- Global styles: Edit `src/styles/global.css`
- Component styles: Add `<style>` tags in `.astro` files
- CSS variables: Defined in `:root` and `[data-theme="dark"]`

## 📄 License

© 2025 Ágora - Academia de Matemáticas

## 🔗 Links

- Website: [agoraacademy.es](https://www.agoraacademy.es)

---

Built with ❤️ using [Astro](https://astro.build)
