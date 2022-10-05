# Content v2 Minimal Starter

Look at the [Content documentation](https://content-v2.nuxtjs.org/) to learn more.

## Observed issue

During development (e.g. `npm run dev`) navigating to the about page via click behaves as expected.
Refreshing the /about page will briefly flash "other layout" before reverting to "default layout".

Building and testing (e.g `npm run build && node .output/server/index.mjs`), this no longer happens.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.
