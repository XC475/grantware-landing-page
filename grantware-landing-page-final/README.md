# GrantWare AI Landing Page

AI-powered grant discovery and management platform landing page.

**Live Site:** [https://www.grantware.ai](https://www.grantware.ai)

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16.1.1 (App Router) |
| **Language** | TypeScript 5.x |
| **Styling** | Tailwind CSS 4.1.9 |
| **Animation** | Framer Motion 12.x |
| **3D Graphics** | Three.js, React Three Fiber |
| **Analytics** | Google Analytics 4, Vercel Analytics |
| **Icons** | Lucide React, Tabler Icons |
| **Deployment** | Vercel (auto-deploy from `main`) |

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/XC475/grantware-landing-page.git

# Navigate to project directory
cd grantware-landing-page/grantware-landing-page-final

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   │   ├── layout.tsx           # About page metadata
│   │   └── page.tsx             # About page content
│   ├── blog/                     # Blog section
│   │   ├── [slug]/              # Dynamic blog post routes
│   │   │   └── page.tsx         # Individual blog post page
│   │   ├── data.ts              # Blog post data
│   │   ├── layout.tsx           # Blog metadata
│   │   └── page.tsx             # Blog index page
│   ├── privacy/                  # Privacy policy
│   │   └── page.tsx
│   ├── terms/                    # Terms of service
│   │   └── page.tsx
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout with SEO metadata
│   ├── page.tsx                 # Homepage
│   ├── robots.ts                # Robots.txt configuration
│   └── sitemap.ts               # Dynamic sitemap generation
│
├── components/                   # React components
│   ├── ui/                      # Reusable UI primitives
│   │   ├── animated-beam.tsx    # Animated connection beams
│   │   ├── aspect-ratio.tsx     # Aspect ratio container
│   │   ├── button.tsx           # Button variants
│   │   ├── orbiting-circles.tsx # Orbiting animation
│   │   └── shimmer-button.tsx   # Shimmer effect button
│   │
│   ├── approach-section.tsx     # "How it Works" section
│   ├── client-logos.tsx         # Trusted by logos carousel
│   ├── faq-section.tsx          # FAQ accordion
│   ├── footer-section.tsx       # Site footer
│   ├── google-analytics.tsx     # GA4 integration
│   ├── grantware-connections-beam.tsx  # Integration visualization
│   ├── grantware-orbiting-integrations.tsx  # Orbiting integrations
│   ├── header-pill.tsx          # Navigation header
│   ├── hero.tsx                 # Hero section
│   ├── legal-outline-rail.tsx   # Desktop legal page navigation
│   ├── legal-outline-sheet.tsx  # Mobile legal page navigation
│   ├── page-content.tsx         # Main page wrapper
│   ├── pricing-section.tsx      # Pricing plans (currently disabled)
│   ├── product-features-section.tsx  # Features with video demos
│   ├── smooth-scroll.tsx        # Lenis smooth scrolling
│   └── use-legal-outline.ts     # Legal page outline hook
│
└── lib/
    └── utils.ts                 # Utility functions (cn, etc.)

public/
├── about/                       # Team member images
├── blog/                        # Blog post images
├── logos/                       # Partner/client logos
├── videos/                      # Product demo videos
│   └── platform-features/
│       ├── discover-opportunities.mp4
│       ├── draft-with-ai.mp4
│       └── manage-applications.mp4
├── favicon.svg                  # Site favicon
├── og-image.svg                 # Open Graph image
├── twitter-image.svg            # Twitter card image
└── site.webmanifest            # PWA manifest
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, features, workflow, FAQ |
| `/about` | Company information and team |
| `/blog` | Blog index with articles |
| `/blog/[slug]` | Individual blog posts |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |

---

## Key Features

### Homepage Sections

1. **Hero** — Main headline with CTA buttons
2. **Product Features** — Interactive tabs with video demos
3. **Client Logos** — Infinite scroll carousel
4. **How it Works** — 3-step onboarding process
5. **AI Powered Workflow** — 3-step workflow explanation
6. **FAQ** — Expandable accordion
7. **Footer** — Navigation links and social

### Technical Features

- **SEO Optimized** — Full metadata, sitemap, robots.txt
- **Responsive Design** — Mobile-first approach
- **Smooth Scrolling** — Lenis scroll library
- **Video Integration** — Auto-playing product demos
- **Analytics** — GA4 + Vercel Analytics

---

## SEO Configuration

### Metadata

Global metadata is configured in `src/app/layout.tsx`:

- Title: "GrantWare AI - Intelligent Grant Discovery & Management"
- Description: "Discover, apply, and manage grants with AI-powered automation."
- Keywords: grant management, AI grants, funding discovery, etc.
- Open Graph and Twitter Cards configured

### Sitemap

Dynamic sitemap at `/sitemap.xml` includes:
- Homepage (priority: 1.0)
- About (priority: 0.8)
- Blog (priority: 0.7)
- Terms (priority: 0.3)
- Privacy (priority: 0.3)

### Analytics

- **Google Analytics 4:** `G-FF5EQZN43T`
- **Vercel Analytics:** Enabled

---

## Environment Variables

No environment variables are required. All configuration is hardcoded for simplicity.

If you need to customize, you can modify these files directly:

| Configuration | File |
|--------------|------|
| Site URL | `src/app/layout.tsx`, `src/app/sitemap.ts` |
| GA4 ID | `src/components/google-analytics.tsx` |
| External links | `src/components/header-pill.tsx`, `src/components/footer-section.tsx` |

---

## Deployment

The site is deployed on **Vercel** with automatic deployments from the `main` branch.

### Manual Deployment

```bash
# Build for production
npm run build

# The build output is in .next/
# Deploy to your preferred hosting platform
```

### Vercel Deployment

Push to `main` branch triggers automatic deployment:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

---

## Development Notes

### Disabled Features

The following features are currently disabled but preserved in code:

1. **Pricing Section** — Commented out in `page-content.tsx`
2. **Gradient Background** — Shader gradient toggle disabled
3. **Get Started Button** — Replaced with "Book a call" link

To re-enable, search for comments like `// COMMENTED OUT` or `// To re-enable`.

### Adding New Blog Posts

1. Edit `src/app/blog/data.ts`
2. Add a new entry to the `BLOG_POSTS` array:

```typescript
{
  slug: "your-post-slug",
  title: "Your Post Title",
  date: "Jan 1, 2026",
  category: "Category",
  image: "/blog/your-image.jpg",
  description: "Short description...",
  content: "Full post content..."
}
```

3. Add the image to `public/blog/`

### Code Style

- **Components:** PascalCase (e.g., `HeaderPill.tsx`)
- **Files:** kebab-case (e.g., `header-pill.tsx`)
- **Utilities:** camelCase functions
- **CSS:** Tailwind utility classes

---

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

---

## License

Proprietary — GrantWare AI © 2026

---

## Contact

- **Website:** [https://www.grantware.ai](https://www.grantware.ai)
- **LinkedIn:** [GrantWare AI](https://www.linkedin.com/company/grantware/)
- **Email:** ryanrod@bu.edu
