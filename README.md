# ICCoSD-25 Conference Website

A modern, professional, fully markdown-driven website for the International Conference on Communication and Smart Devices (ICCoSD-25) - July 25-26, 2025 at BIT Mesra, Ranchi.

## Quick Start for Non-Developers

**Need to update content? See [CONTENT_EDITING_GUIDE.md](./CONTENT_EDITING_GUIDE.md)**

All website content can be edited through markdown files in `/content/` without touching any code:

- `footer.md` - Footer links, acknowledgments, contact info
- `home.md` - Home page statistics and highlights
- `about.md` - Conference and institution details
- `contact.md` - Contact information and committee details

## Overview

This website features:

- **Markdown-Driven Content System** - Edit content without writing code
- **Modern, Clean Aesthetic** with professional typography
- **Vibrant Yet Elegant Design** (Deep Ocean Blue + Warm Gold palette)
- **Subtle Micro-interactions** (animated underlines, button lift effects, scroll fade-ins)
- **Clear Information Hierarchy** and intuitive navigation
- **Dynamic Footer** with links, dates, and organization acknowledgments
- **Responsive Design** for all devices
- **Strong CTAs** throughout

## Design System

### Color Palette

- **Primary Dark Blue:** `#0D5B6F` - Main brand color
- **Gold Accent:** `#D4A574` - CTAs, highlights, interactive elements
- **Charcoal:** `#2C3E50` - Secondary text
- **Light Gray:** `#F5F5F5` - Section backgrounds
- **White:** `#FFFFFF` - Text and backgrounds
- **Teal Accent:** `#1FA39C` - Secondary interactions

### Micro-interactions

- **Link Underlines:** Gold gradient animation on hover (400ms cubic-bezier)
- **Button Lift:** 2px elevation with shadow on hover
- **Icon Hover:** 15% scale with rotation and color change
- **Scroll Fade-in:** Elements fade in as they come into view
- **Gold Pulse:** Subtle color pulse animation for emphasis
- **Smooth Transitions:** All interactions have 300-400ms duration

### Typography

- **Headings:** Geist font family (bold, modern, geometric)
- **Body:** Geist font family (highly readable, professional)
- **Line Height:** 1.6 for improved readability
- **Font Sizes:** Semantic scaling from 14px minimum

## Project Structure

```
content/                        # Markdown content files (edit these!)
├── footer.md                   # Footer configuration & links
├── home.md                     # Home page content
├── about.md                    # About conference & BIT Mesra
├── contact.md                  # Contact information
└── [other-pages].md           # Additional page content

lib/                            # Content loaders & utilities
├── markdown.ts                # Markdown parser with YAML support
├── footer-content.ts          # Footer content processor
├── home-content.ts            # Home content processor
├── use-intersection-observer.ts # Scroll animation hook
└── utils.ts                   # Utility functions

app/
├── layout.tsx                 # Root layout with Header/Footer/ScrollToTop
├── globals.css               # Design tokens, animations, micro-interactions
├── page.tsx                  # Home page
├── about/page.tsx            # About the conference
├── call-for-papers/page.tsx  # Paper submission guidelines
├── committee/
│   ├── organizing/page.tsx    # Organizing Committee
│   ├── technical/page.tsx     # Technical Program Committee
│   └── advisory/page.tsx      # Advisory Committee
├── registration/page.tsx      # Registration info and fees
├── keynote-speakers/page.tsx  # Keynote speakers list
├── student-volunteers/page.tsx # Student volunteers
├── abstract-proceedings/page.tsx # Download proceedings
├── contact/page.tsx           # Contact form & information
└── directions/page.tsx        # How to reach BIT Mesra

components/
├── header.tsx                # Dynamic navigation header
├── footer.tsx                # Dynamic footer (loads from markdown)
├── scroll-to-top.tsx         # Smooth scroll-to-top button
├── hero-section.tsx          # Hero sections with overlay
├── cta-button.tsx           # Call-to-action buttons
├── info-block.tsx           # Info callout blocks
└── two-column-section.tsx   # Alternating content layout

public/
├── hero-conference.jpg       # Hero section image
└── logos/
    ├── ieee.png
    ├── bit-mesra.png
    └── icgd.png
```

## Key Features

### 1. **Content Management System**

- All content stored in markdown files with YAML frontmatter
- No hardcoded content - everything loaded dynamically
- JSON data blocks for structured content (lists, arrays)
- Automatic caching for performance
- Easy content updates without touching code

### 2. **Dynamic Footer**

- Links, acknowledgments, and dates from markdown
- Organization logos with hover effects
- Contact information auto-populated
- Important dates section
- Quick navigation links
- Social media integration
- Bottom copyright bar with smooth styling

### 3. **Enhanced Header**

- Sticky navigation with micro-interactions
- Animated underlines on hover
- Smooth dropdown animations
- Mobile hamburger menu with slide transitions
- Organization logos with color transitions
- Search icon with hover scale effect

### 4. **Micro-interactions**

- Animated link underlines (gold gradient expand)
- Button lift effect on hover (2px elevation)
- Icon scale and rotate on hover (15% scale, 5° rotate)
- Scroll-triggered fade-in animations
- Gold pulse animation for emphasis
- Smooth color transitions (300ms)
- Focus ring customization for accessibility

### 5. **Component System**

- **HeroSection:** Configurable hero with image, title, subtitle, and CTA
- **CTAButton:** Primary and secondary button variants with lift effect
- **InfoBlock:** Callout boxes (notice, highlight, warning styles)
- **TwoColumnSection:** Alternating left-right layouts
- **ScrollToTop:** Floating button with smooth scroll
- **Header/Footer:** Dynamic components from markdown

### 6. **Pages Implemented**

#### Dynamic Pages (Markdown-driven)

- **Home** - Hero, statistics, about, dates, CTAs (from `home.md`)
- **About** - BIT Mesra info, conference objectives, research tracks (from `about.md`)
- **Contact** - Committee contacts, department info (from `contact.md`)

#### Static Pages

- **Call for Papers** - Submission guidelines, research tracks, deadlines
- **Committee Pages** - Organizing, Technical Program, Advisory committees
- **Registration** - Fee table, categories, registration process
- **Keynote Speakers** - Distinguished speakers and talks
- **Student Volunteers** - Volunteer team information
- **Abstract Proceedings** - Download and publication information
- **Directions** - Transportation, maps, location details

### 5. **Responsive Design**

- Mobile-first approach
- Breakpoints: md (768px), lg (1024px)
- Flexible grid layouts
- Touch-friendly navigation

## Color Implementation

All color values use Tailwind CSS variables mapped to design tokens:

```css
--primary-dark-blue: #0d5b6f --gold-accent: #d4a574 --gold-dark: #b89a60
  --charcoal: #2c3e50 --light-gray: #f5f5f5 --teal-accent: #1fa39c;
```

## Getting Started

### Installation

```bash
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics

## Design Principles Applied

1. **No Generic Patterns:** Avoided typical AI-generated card-based UI
2. **No Purple Gradients:** Used sophisticated blue/gold palette
3. **Typography-Focused:** Strong visual hierarchy through fonts and spacing
4. **Whitespace:** Generous padding (40-80px) for elegance
5. **Professional Aesthetics:** Clean, modern, academic-appropriate design
6. **Easy Navigation:** Intuitive menu structure and clear CTAs
7. **Accessible:** Semantic HTML, ARIA labels, proper contrast

## Editing Content (No Code Required)

See [CONTENT_EDITING_GUIDE.md](./CONTENT_EDITING_GUIDE.md) for complete instructions.

### Quick Examples

**Change Email:**
Edit `/content/footer.md`:

```yaml
email: "newemail@example.com"
```

**Update Conference Dates:**
Edit `/content/home.md`:

```yaml
heroDate: "August 15-16, 2025"
```

**Change Hero Image:**
Edit `/content/home.md`:

```markdown
---HERO_IMAGE---
/new-image.jpg
```

**Add Quick Links:**
Edit `/content/footer.md` JSON block:

```json
{
  "title": "New Link",
  "href": "/page-path",
  "icon": "IconName"
}
```

### For Developers: Customization

**Adding New Pages**

1. Create content file: `/content/page-name.md`
2. Create loader: `/lib/page-name-content.ts`
3. Create page: `/app/page-name/page.tsx`
4. Update header navigation

**Updating Colors**
Edit CSS variables in `/app/globals.css`:

```css
:root {
  --primary-dark-blue: #0d5b6f;
  --gold-accent: #d4a574;
}
```

**Modifying Micro-interactions**
Edit animation keyframes and classes in `/app/globals.css`:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Technology Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Content:** Gray-matter (YAML + Markdown)
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
pnpm build
pnpm start
```

## Deployment

### Vercel (Recommended)

```bash
# Automatic deployment on git push
git push origin main
```

### Manual Deployment

```bash
pnpm build && pnpm start
```

## Documentation

- **[CONTENT_EDITING_GUIDE.md](./CONTENT_EDITING_GUIDE.md)** - Complete guide for non-developers
- **[Design System](./app/globals.css)** - Color tokens and micro-interactions
- **[Markdown Examples](./content/)** - Sample content files

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## SEO & Accessibility

- Semantic HTML with proper heading hierarchy
- ARIA labels and roles
- Alt text for all images
- High color contrast (WCAG AA compliant)
- Keyboard navigation support
- Focus ring customization

## Performance

- In-memory markdown caching
- Optimized image handling with Next.js Image
- CSS-in-JS for critical styles
- Minified and compressed assets
- Page load optimization

## Support & Documentation

For questions:

- **Content Editing:** See [CONTENT_EDITING_GUIDE.md](./CONTENT_EDITING_GUIDE.md)
- **Conference Info:** iccosd@bitmesra.ac.in
- **Phone:** +91-6203905197

## License

© 2025 ICCoSD-25. All rights reserved.

---

Built with Next.js, TypeScript, and Tailwind CSS - featuring a markdown-driven content system for easy management and professional micro-interactions for enhanced user experience.
