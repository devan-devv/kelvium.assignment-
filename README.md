# QuickCart

A lightweight shopping cart app built with React and Vite.

## Overview
QuickCart is a frontend-only ecommerce display page that shows 8 products in a responsive grid layout. The project demonstrates React fundamentals including functional components, props, JSX, list rendering, and responsive styling.

## Project Structure
- `src/components/` — reusable React components
- `src/data/` — product data for the product grid
- `src/styles/` — shared CSS files for component styling
- `src/App.jsx` — app layout and root component
- `src/main.jsx` — React entry point

## Available Scripts
From the project root, run:

```bash
npm install
npm run dev
```

Then open `http://localhost:5173/` in your browser.

## What’s Included
- `Header` component with a purple gradient hero banner
- `ProductCard` component with hover effects, category badge, and price formatting
- `ProductList` component rendering all products using `.map()`
- Responsive CSS Grid layout for desktop, tablet, and mobile
- Smooth hover animations and fade-in card effect

## Product Data
Products are defined in `src/data/products.js` and exported as:

```js
export const products = [ ... ];
```

## GitHub
This repository is ready for use with GitHub, including the initial QuickCart Vite React setup.
