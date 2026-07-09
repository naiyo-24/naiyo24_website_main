# Naiyo24 Website (Frontend)

This is the frontend React application for Naiyo24. It is built using React and Vite, featuring a modern, responsive Neo-Brutalist design.

## Prerequisites

- Node.js (v16 or higher recommended)
- npm (Node Package Manager)

## Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   *The site will be running on `http://localhost:5173` by default.*

## Build for Production

To create an optimized production build of the website:

```bash
npm run build
```
This will generate the static files in the `dist/` folder, which can be deployed to any static hosting service (e.g., Vercel, Netlify, AWS S3).

## Features

- Fully responsive Neo-Brutalist UI.
- Integrated with the FastAPI backend for Contact Queries, Careers Applications, and Newsletter Subscriptions.
- Built-in lightweight "Bug Smasher" minigame on the contact page.
