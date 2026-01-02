# GrantWare AI — SEO Implementation Guide

**Last Updated:** January 1, 2026  
**Status:** Complete (Core Setup)  
**Site:** https://www.grantware.ai

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Technical SEO Implementation](#technical-seo-implementation)
3. [Google Search Console Setup](#google-search-console-setup)
4. [Google Analytics Integration](#google-analytics-integration)
5. [Monitoring Checklist](#monitoring-checklist)
6. [Future Enhancements](#future-enhancements)
7. [Account Reference](#account-reference)
8. [Troubleshooting](#troubleshooting)

---

## Executive Summary

### What Was Completed

| Category | Status | Details |
|----------|--------|---------|
| Technical SEO | ✅ Complete | Metadata, sitemap, robots.txt, canonical URLs |
| Google Search Console | ✅ Complete | Verified, sitemap submitted, indexing requested |
| Google Analytics 4 | ✅ Complete | Tracking active, events configured |
| Social Meta Tags | ✅ Complete | Open Graph, Twitter Cards |
| Verification | ✅ Complete | HTML meta tag verification |

### Key URLs

| Resource | URL |
|----------|-----|
| Live Site | https://www.grantware.ai |
| Sitemap | https://www.grantware.ai/sitemap.xml |
| Robots.txt | https://www.grantware.ai/robots.txt |
| Search Console | https://search.google.com/search-console |
| Google Analytics | https://analytics.google.com |

### Expected Timeline

| Milestone | Expected |
|-----------|----------|
| Sitemap processed | ✅ Done |
| Pages indexed | 2–7 days |
| Search results updated | 1–2 weeks |
| Sitelinks appear | 1–3 months |

---

## Technical SEO Implementation

### 1. Global Metadata

**File:** `src/app/layout.tsx`

The root layout contains comprehensive metadata that applies to all pages:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://www.grantware.ai"),
  title: {
    default: "GrantWare AI - Intelligent Grant Discovery & Management",
    template: "%s | GrantWare AI",
  },
  description: "Discover, apply, and manage grants with AI-powered automation. Win the funding your organization deserves with GrantWare AI.",
  keywords: [
    "grant management",
    "AI grants",
    "funding discovery",
    "grant writing",
    "nonprofit funding",
    "grant automation",
    "grant search",
    "proposal writing",
    "grant tracking",
  ],
  // ... additional metadata
}
```

#### Metadata Components

| Component | Purpose | Value |
|-----------|---------|-------|
| `metadataBase` | Base URL for relative URLs | `https://www.grantware.ai` |
| `title.default` | Default page title | "GrantWare AI - Intelligent Grant Discovery & Management" |
| `title.template` | Title format for child pages | "%s \| GrantWare AI" |
| `description` | Meta description | 160 characters, keyword-rich |
| `keywords` | Target keywords | 9 primary keywords |
| `authors` | Content attribution | "GrantWare AI" |
| `creator` | Site creator | "GrantWare AI" |
| `publisher` | Content publisher | "GrantWare AI" |

---

### 2. Google Search Console Verification

**File:** `src/app/layout.tsx`

Added verification meta tag to prove domain ownership:

```typescript
verification: {
  google: "5yQFhcQY_wjva3ZJkFo6gTqZiZPszpaMIVT1tTN7EI4",
},
```

This renders as:
```html
<meta name="google-site-verification" content="5yQFhcQY_wjva3ZJkFo6gTqZiZPszpaMIVT1tTN7EI4" />
```

---

### 3. Open Graph Tags (Social Sharing)

**File:** `src/app/layout.tsx`

Configures how the site appears when shared on Facebook, LinkedIn, etc.:

```typescript
openGraph: {
  type: "website",
  locale: "en_US",
  url: "https://www.grantware.ai",
  siteName: "GrantWare AI",
  title: "GrantWare AI - Intelligent Grant Discovery & Management",
  description: "Discover, apply, and manage grants with AI-powered automation. Win the funding your organization deserves.",
  images: [
    {
      url: "/og-image.svg",
      width: 1200,
      height: 630,
      alt: "GrantWare AI - Win funding for your organization faster",
    },
  ],
},
```

#### Open Graph Image

- **File:** `public/og-image.svg`
- **Dimensions:** 1200 x 630 pixels (recommended)
- **Format:** SVG (vector, scalable)

---

### 4. Twitter Cards

**File:** `src/app/layout.tsx`

Configures how the site appears when shared on Twitter/X:

```typescript
twitter: {
  card: "summary_large_image",
  title: "GrantWare AI - Intelligent Grant Discovery & Management",
  description: "Discover, apply, and manage grants with AI-powered automation.",
  images: ["/twitter-image.svg"],
},
```

#### Twitter Image

- **File:** `public/twitter-image.svg`
- **Format:** SVG
- **Card Type:** `summary_large_image` (displays large preview)

---

### 5. Robots Configuration

**File:** `src/app/layout.tsx`

Controls how search engines crawl and index the site:

```typescript
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
```

| Directive | Value | Meaning |
|-----------|-------|---------|
| `index` | `true` | Allow indexing |
| `follow` | `true` | Follow links |
| `max-video-preview` | `-1` | No limit on video preview |
| `max-image-preview` | `large` | Allow large image previews |
| `max-snippet` | `-1` | No limit on text snippet |

---

### 6. Canonical URLs

**File:** `src/app/layout.tsx`

Prevents duplicate content issues:

```typescript
alternates: {
  canonical: "https://www.grantware.ai",
},
```

This tells Google the preferred URL for the homepage.

---

### 7. Sitemap

**File:** `src/app/sitemap.ts`

Dynamic sitemap generated at build time:

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.grantware.ai"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
```

#### Sitemap Pages

| URL | Priority | Change Frequency |
|-----|----------|------------------|
| `/` | 1.0 | Weekly |
| `/about` | 0.8 | Monthly |
| `/blog` | 0.7 | Weekly |
| `/terms` | 0.3 | Yearly |
| `/privacy` | 0.3 | Yearly |

**Access:** https://www.grantware.ai/sitemap.xml

---

### 8. Robots.txt

**File:** `src/app/robots.ts`

Controls crawler access:

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.grantware.ai/sitemap.xml",
  }
}
```

**Output:**
```
User-Agent: *
Allow: /

Sitemap: https://www.grantware.ai/sitemap.xml
```

**Access:** https://www.grantware.ai/robots.txt

---

### 9. Favicon & Icons

**File:** `src/app/layout.tsx`

```typescript
icons: {
  icon: [
    { url: "/favicon.svg", type: "image/svg+xml" },
  ],
  apple: [{ url: "/favicon.svg" }],
},
```

#### Icon Files

| File | Purpose |
|------|---------|
| `public/favicon.svg` | Browser tab icon |
| `public/og-image.svg` | Open Graph image |
| `public/twitter-image.svg` | Twitter card image |

---

### 10. PWA Manifest

**File:** `public/site.webmanifest`

```json
{
  "name": "GrantWare AI",
  "short_name": "GrantWare",
  "icons": [...],
  "theme_color": "#5b8cff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

---

### 11. Page-Specific Metadata

Each page can override the default metadata:

#### About Page (`src/app/about/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about GrantWare AI...",
  // Page-specific metadata
}
```

#### Blog Page (`src/app/blog/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on grant management...",
  // Page-specific metadata
}
```

---

## Google Search Console Setup

### Setup Steps Completed

| Step | Status | Date |
|------|--------|------|
| Property added | ✅ | Jan 1, 2026 |
| Domain verified (HTML tag) | ✅ | Jan 1, 2026 |
| Sitemap submitted | ✅ | Jan 1, 2026 |
| Pages indexed requested | ✅ | Jan 1, 2026 |

### Verification Method

- **Method:** HTML meta tag
- **Tag:** `<meta name="google-site-verification" content="5yQFhcQY_wjva3ZJkFo6gTqZiZPszpaMIVT1tTN7EI4" />`
- **Location:** `src/app/layout.tsx` → `metadata.verification.google`

### Sitemap Submission

- **URL submitted:** `sitemap.xml`
- **Full URL:** https://www.grantware.ai/sitemap.xml
- **Status:** Success
- **Pages discovered:** 5

### Indexing Requests

| URL | Requested |
|-----|-----------|
| https://www.grantware.ai | ✅ |
| https://www.grantware.ai/about | ✅ |
| https://www.grantware.ai/blog | ✅ |
| https://www.grantware.ai/terms | ✅ |
| https://www.grantware.ai/privacy | ✅ |

---

## Google Analytics Integration

### GA4 Configuration

**File:** `src/components/google-analytics.tsx`

```typescript
const GA_MEASUREMENT_ID = "G-FF5EQZN43T"

export function GoogleAnalyticsComponent() {
  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
}
```

### Implementation

**File:** `src/app/layout.tsx`

```typescript
import { GoogleAnalyticsComponent } from "@/components/google-analytics"

// In the body:
<GoogleAnalyticsComponent />
```

### Event Tracking

Custom events can be tracked using:

```typescript
import { trackEvent } from "@/components/google-analytics"

trackEvent("button_click", {
  button_name: "Get Started",
  page: "homepage"
})
```

### Vercel Analytics

Also integrated for additional insights:

```typescript
import { Analytics } from "@vercel/analytics/next"

// In the body:
<Analytics />
```

---

## Monitoring Checklist

### Daily (First Week)

#### Day 1-3: Check Indexing Status

1. Go to [Search Console](https://search.google.com/search-console)
2. Navigate to **Indexing → Pages**
3. Look for:
   - Pages moving from "Discovered" to "Crawled"
   - Pages moving from "Crawled" to "Indexed"
   - Any errors or warnings

#### Day 3-7: Check for Issues

1. In Search Console, check:
   - **Pages** → Look for "Error" or "Excluded" pages
   - **Experience → Core Web Vitals** → Mobile and desktop scores
   - **Security & Manual Actions** → Ensure no issues

2. In Google Analytics:
   - **Real-time** → Verify tracking is working
   - **Engagement → Pages** → Check which pages are visited

### Weekly (First Month)

#### Week 1-2: Verify Search Results

1. Search Google for: `site:grantware.ai`
2. Check which pages are indexed
3. Verify titles and descriptions are correct

#### Week 2-4: Monitor Performance

1. In Search Console → **Performance**:
   - Track impressions
   - Track clicks
   - Track average position
   - Track CTR (click-through rate)

2. In Google Analytics → **Acquisition**:
   - Track organic search traffic
   - Compare to direct and referral traffic

### Monthly (Ongoing)

#### Performance Review

1. **Search Console Performance Report:**
   - Top queries bringing traffic
   - Top pages by clicks
   - Average position trends
   - Mobile vs desktop performance

2. **Google Analytics:**
   - Organic traffic trends
   - Bounce rate from search
   - User engagement metrics

#### Technical Health Check

1. **Sitemap:**
   - Verify sitemap is up to date
   - Add new pages when created

2. **Core Web Vitals:**
   - Check LCP (Largest Contentful Paint)
   - Check FID (First Input Delay)
   - Check CLS (Cumulative Layout Shift)

3. **Mobile Usability:**
   - Check for mobile issues
   - Test on multiple devices

---

## Future Enhancements

### Priority 1: Structured Data (JSON-LD)

Add schema markup to improve rich results:

#### Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GrantWare AI",
  "url": "https://www.grantware.ai",
  "logo": "https://www.grantware.ai/logo.svg",
  "description": "AI-powered grant discovery and management platform",
  "sameAs": [
    "https://www.linkedin.com/company/grantware-ai"
  ]
}
```

#### SoftwareApplication Schema

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "GrantWare AI",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

#### WebSite Schema with SearchAction

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "GrantWare AI",
  "url": "https://www.grantware.ai",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.grantware.ai/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### Priority 2: Blog Post Sitemap

Currently, only `/blog` is in the sitemap. Add individual blog posts:

```typescript
// In sitemap.ts
const blogPosts = [
  { slug: "redhat-partnership", date: "2024-10-30" },
  { slug: "bu-spark-demo-day", date: "2024-12-20" },
  // ... more posts
]

return [
  // ... existing pages
  ...blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }))
]
```

### Priority 3: Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters
2. Add property: `https://www.grantware.ai`
3. Verify using the same HTML tag method
4. Submit sitemap

### Priority 4: Social Media Optimization

1. **LinkedIn Company Page:**
   - Ensure URL is consistent
   - Add website link
   - Post regularly to build authority

2. **Twitter/X Profile:**
   - Create company profile if not exists
   - Link to website

### Priority 5: Content Strategy

1. **Blog Content:**
   - Publish 2-4 articles per month
   - Target long-tail keywords:
     - "how to find grants for nonprofits"
     - "grant writing best practices"
     - "AI grant management tools"

2. **FAQ Expansion:**
   - Add more FAQ items
   - Target "People also ask" queries

---

## Account Reference

### Google Accounts

| Service | Email | Role |
|---------|-------|------|
| Search Console | ryan@grantware.ai | Owner (Verified) |
| Search Console | ryanrodriguez1703@gmail.com | Full Access |
| Google Analytics 4 | ryanrodriguez1703@gmail.com | Owner |

### Key Identifiers

| Item | Value |
|------|-------|
| GA4 Measurement ID | `G-FF5EQZN43T` |
| Search Console Verification | `5yQFhcQY_wjva3ZJkFo6gTqZiZPszpaMIVT1tTN7EI4` |
| Domain | `grantware.ai` |
| Primary URL | `https://www.grantware.ai` |

### Repository

| Item | Value |
|------|-------|
| GitHub Repo | `https://github.com/XC475/grantware-landing-page.git` |
| Branch | `main` |
| Hosting | Vercel (auto-deploy from main) |

---

## Troubleshooting

### Issue: Pages Not Indexed

**Symptoms:** Pages show as "Discovered - currently not indexed" in Search Console

**Solutions:**
1. Request indexing manually via URL Inspection tool
2. Ensure page is not blocked by robots.txt
3. Check for `noindex` meta tags
4. Improve internal linking to the page

### Issue: Wrong Title/Description in Search Results

**Symptoms:** Google shows old or incorrect title/description

**Solutions:**
1. Wait 1-2 weeks for Google to re-crawl
2. Request indexing via URL Inspection
3. Use "Request re-crawl" option in Search Console

### Issue: Sitemap Errors

**Symptoms:** Sitemap shows "Couldn't fetch" or errors

**Solutions:**
1. Verify sitemap is accessible: https://www.grantware.ai/sitemap.xml
2. Check robots.txt doesn't block sitemap
3. Re-submit sitemap in Search Console

### Issue: Core Web Vitals Poor

**Symptoms:** "Poor" scores in Core Web Vitals report

**Solutions:**
1. Run PageSpeed Insights: https://pagespeed.web.dev/
2. Optimize images (use WebP, lazy loading)
3. Minimize JavaScript bundle size
4. Use CDN for static assets

### Issue: Mobile Usability Errors

**Symptoms:** Errors in Mobile Usability report

**Solutions:**
1. Test with Mobile-Friendly Test tool
2. Ensure responsive design
3. Check tap targets are large enough
4. Verify text is readable without zooming

---

## Appendix: File Reference

### SEO-Related Files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Global metadata, verification tag |
| `src/app/sitemap.ts` | Dynamic sitemap generation |
| `src/app/robots.ts` | Robots.txt generation |
| `src/components/google-analytics.tsx` | GA4 integration |
| `public/favicon.svg` | Browser favicon |
| `public/og-image.svg` | Open Graph image |
| `public/twitter-image.svg` | Twitter card image |
| `public/site.webmanifest` | PWA manifest |

### Page Metadata Files

| File | Page |
|------|------|
| `src/app/layout.tsx` | Global defaults |
| `src/app/about/layout.tsx` | About page |
| `src/app/blog/layout.tsx` | Blog index |
| `src/app/terms/page.tsx` | Terms of Service |
| `src/app/privacy/page.tsx` | Privacy Policy |

---

## Document History

| Date | Change | Author |
|------|--------|--------|
| Jan 1, 2026 | Initial SEO implementation | Cursor AI |
| Jan 1, 2026 | Search Console setup | Ryan Rodriguez |
| Jan 1, 2026 | Documentation created | Cursor AI |

---

*This document should be updated whenever SEO-related changes are made to the site.*

