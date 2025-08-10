# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite consulting website for HeumaierConsulting, a German IT consulting firm specializing in technology due diligence, cloud transformation, and strategic digitalization. The site is deployed on Netlify and uses Tailwind CSS for styling.

## Essential Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:5173

# Build & Preview
npm run build        # Build for production (outputs to ./dist)
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint on all TypeScript files
```

## Architecture

### Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with React plugin
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: lucide-react library
- **Deployment**: Netlify (configured via netlify.toml)

### Project Structure
- Single-page application with all content in `src/App.tsx`
- No routing implementation (pure landing page)
- Static service offerings displayed in a grid layout
- External calendar integration via Calendly for scheduling

### Key Components

**App.tsx**: Main application component containing:
- Service offerings array with structured data (title, description, icon, features)
- Header with company branding and CTA button
- Service grid with hover effects
- Footer with company contact information
- Calendly integration for scheduling meetings

### Styling Approach
- Tailwind CSS utility classes throughout
- Responsive design with mobile-first approach
- Emerald color scheme for branding (emerald-600, emerald-700)
- Shadow effects for depth and interactivity

## Development Guidelines

### When Making Changes
1. All text content is in German - maintain language consistency
2. Use Tailwind classes exclusively for styling (no separate CSS files for components)
3. Icons come from lucide-react - import additional icons as needed
4. Maintain responsive design patterns (sm:, md:, lg: breakpoints)

### Build Configuration
- Vite optimizes dependencies but excludes lucide-react
- Assets inline limit set to 0 to ensure proper asset generation
- Netlify handles SPA routing with catch-all redirect to index.html

### External Integrations
- **Calendly**: Scheduling link opens in new tab to https://calendly.com/heumaierventures-info/15-minute-intro
- Contact email: info@heumaier-consulting.de
- Phone: +49 (040) 38651929

## Deployment

The site is configured for Netlify deployment:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing handled via redirects in netlify.toml
- JavaScript MIME types explicitly set for .js and .mjs files