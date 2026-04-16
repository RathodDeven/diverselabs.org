# Diverse Labs - AI Agentic Solutions Website

A high-performance, SEO-optimized agency website built with Astro, React, and Tailwind CSS. Deployed on Cloudflare Pages.

## Quick Start

### Prerequisites
- Node.js 22.x or later
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Generate production build
npm run build

# Preview build locally
npm run preview
```

The site will be available at `http://localhost:3000` for development or in the `dist/` folder after building.

## Project Structure

```
/src
├── components/
│   └── BackgroundShader.astro       # WebGL background effect
├── layouts/
│   └── BaseLayout.astro             # Main layout with nav & footer
├── pages/
│   ├── index.astro                  # Homepage
│   ├── work.astro                   # Case studies/portfolio
│   ├── about.astro                  # About & philosophy
│   └── contact.astro                # Contact & discovery call CTA
├── styles/
│   └── global.css                   # Global styles & Tailwind directives
└── (other dirs)
/public
├── robots.txt                       # Search engine crawler rules
└── _headers                         # Cloudflare Pages cache & security headers
```

## Key Features

### 🎨 Premium Monochrome Design
- Sophisticated black, white, and grey palette
- Custom CSS variables for easy theming
- Responsive typography (clamp-based scaling)

### ⚡ Performance Optimized
- Zero JavaScript by default (Islands Architecture)
- Lightweight WebGL shader background (~5KB)
- Static HTML generation for instant loading
- Optimized for Lighthouse 95+ scores

### 🔍 SEO & AI Agent Ready
- Automatic sitemap generation
- JSON-LD schema markup (ProfessionalService)
- Semantic HTML structure
- Open Graph & Twitter card support
- Natural language-friendly content

### 🎆 Interactive Background
- Real-time WebGL shader effect
- Cursor-reactive glow (subtle and sophisticated)
- Passive noise animation
- Responsive canvas resizing
- Graceful fallback for unsupported browsers

### 📱 Responsive & Accessible
- Mobile-first design
- Accessible color contrasts
- Keyboard navigation support
- Touch-friendly interactions

## Content Strategy

### Services Described
- **AI Customer Support Agents** - 24/7 intelligent chatbots
- **AI-Driven Lead Generation** - Automated call qualification
- **Intelligent Product Discovery** - Image & semantic search
- **Talk to Your Data** - PDF/Excel natural language queries
- **ML-Powered Operations** - Predictive analytics & automation
- **Automated Content Generation** - AI-driven blog & copy

### Primary CTA
**Discovery Call** - https://cal.com/diverselabs/30min
- 30-minute consultation
- No commitment required
- Identify automation opportunities

### Secondary Contact
**Email** - team@diverselabs.org

## Configuration

### Site URL
Update in `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://diverselabs.org',
  // ...
});
```

### Tailwind CSS
Custom theme in `tailwind.config.mjs`:
- Extended color palette (dark theme)
- Utility extensions

### Environment Variables
Create a `.env` file only if you want Google Analytics:
```
# .env
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX
```

## Deployment to Cloudflare Pages

### Step 1: Connect Repository
1. Push project to GitHub
2. Go to Cloudflare Dashboard → Pages
3. Create new project → Connect to Git
4. Select your repository

### Step 2: Build Configuration
Set these in Cloudflare Pages:
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node.js version:** 20.x LTS

### Step 3: Domain Configuration
1. Add custom domain in Cloudflare Pages
2. Point domain nameservers to Cloudflare
3. SSL/TLS automatically configured

### Step 4: Caching & Headers
The `public/_headers` file automatically configures:
- Static asset caching (1 year, immutable)
- HTML caching (1 hour)
- Security headers (HSTS, X-Frame-Options, etc.)

## Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FCP | < 1.8s |
| TBT | < 200ms |
| CLS | < 0.1 |
| Lighthouse | 95+ |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

WebGL shader falls back to solid background on older browsers.

## Development

### CSS Architecture
- Tailwind utilities for component styling
- Global CSS for base styles & resets
- CSS variables for theme colors
- Component-specific styles in `.astro` files

### Adding Pages
1. Create `.astro` file in `src/pages/`
2. Import `BaseLayout` from `src/layouts/BaseLayout.astro`
3. Wrap content in layout
4. Add SEO metadata via layout props

### Customizing the Background Shader
Edit `src/components/BackgroundShader.astro`:
- Fragment shader logic (lines 130-190)
- Uniforms (u_time, u_mouse, u_resolution)
- Mouse tracking (lines 195-205)

### Adding Analytics
Uncomment in `src/layouts/BaseLayout.astro`:
- Google Analytics script tag
- Add your GA4 measurement ID

## TypeScript

This project uses strict TypeScript (`tsconfig.json`):
- Enable JSX support via React integration
- Type-safe Astro components
- Intellisense in your editor

## Future Enhancements

- [ ] Blog system with MDX collections
- [ ] Client testimonials section
- [ ] Pricing calculator
- [ ] Case study detail pages
- [ ] CMS integration (Contentful, Sanity)

## Support & Resources

- 📖 **Astro Docs:** https://docs.astro.build
- 🎨 **Tailwind Docs:** https://tailwindcss.com/docs
- ☁️ **Cloudflare Pages:** https://pages.cloudflare.com/
- 🔗 **Reference Site:** https://heizen.work/

## License

© 2024 Diverse Labs. All rights reserved.

---

**Last Updated:** April 2024
