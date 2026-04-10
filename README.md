# Airbnb Assistants

Live Link: https://onelittleweb-azure.vercel.app

Landing page project for Airbnb assistant and property management services, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- class-variance-authority + tailwind-merge for utility composition
- Radix UI primitives + shadcn-style UI patterns
- Lucide React icons

## Prerequisites

- Node.js 20+
- One package manager:
- npm (10+ recommended)
- pnpm (10+ recommended)
- yarn (1.22+ or modern yarn)

## Installation

Use only one package manager in your local setup.

### Using npm

```bash
npm install
```

### Using pnpm

```bash
pnpm install
```

### Using yarn

```bash
yarn install
```

## Run The Project

### Development

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev
```

App runs at: http://localhost:3000

### Production Build

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build
```

### Start Production Server

```bash
# npm
npm run start

# pnpm
pnpm start

# yarn
yarn start
```

### Lint

```bash
# npm
npm run lint

# pnpm
pnpm lint

# yarn
yarn lint
```

## Available Scripts

- dev: Start local development server
- build: Create production build
- start: Run production server
- lint: Run ESLint

## Project Structure

```text
src/
	app/
		(public)/
			page.tsx
		layout.tsx
		globals.css
	components/
		modules/LandingPage/
		shared/
		ui/
	content/
		landingPage/
		header/
		footer/
	svg/
		LandingPage/
		Header/
		Footer/
	types/
		landingPage/
```

## Main Dependencies

- next: Framework/runtime and routing
- react, react-dom: UI rendering
- tailwindcss, @tailwindcss/postcss: Styling system
- class-variance-authority: Variant-based class patterns
- clsx + tailwind-merge: Conditional class handling and dedupe
- radix-ui: Headless primitives used in UI components
- shadcn: Utilities/patterns for component setup
- lucide-react: Icon set used across sections
- tw-animate-css: Animation utilities

## Fonts And Styling Notes

- DM Sans is used as the primary site font.
- Manrope is available as a secondary font for specific sections/components.
- Global styles are managed in `src/app/globals.css`.
- The project includes a custom Airbnb-themed favicon at `public/airbnb-favicon.svg`.

## Deployment (Vercel)

### First-time setup

```bash
npx vercel
```

### Production deploy

```bash
npx vercel --prod
```

Vercel auto-detects Next.js settings for this project.

## Troubleshooting

- If packages are out of sync: remove `node_modules` and reinstall.
- If types fail after dependency changes: run a clean install and rebuild.
- If styles look incorrect: ensure Tailwind CSS build is running and `globals.css` is included in `src/app/layout.tsx`.
