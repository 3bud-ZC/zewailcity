# University Student Portal

A responsive university student portal prototype built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- **Login Page** — Clean two-step authentication with username/password
- **Dashboard** — Today's Overview with calendar (June 2026) and quick links
- **Grade Report** — Full course table with color-coded grades, GPA summary, filters, and print support
- **Course Details Modal** — Click any course to view detailed information
- **Demo Authentication** — LocalStorage-based session (no real credentials collected)
- **Print Ready** — Grade report can be printed with hidden UI chrome
- **Responsive Design** — Works on desktop, tablet, and mobile

## Demo Credentials

- **Username:** `202201712`
- **Password:** `HB-224522666`

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React icons

## Getting Started

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

## Deploy on Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Add New Project**
4. Import your GitHub repository
5. Vercel will auto-detect Next.js — just click **Deploy**
6. Your site will be live in seconds

> No environment variables needed. This is a fully client-side demo app.

## Project Structure

```
src/
  app/           # Next.js app router pages
  components/    # React components
  config/        # Branding configuration
  data/          # Demo data (grades, students, calendar)
  lib/           # Auth utilities
```

## License

Demo project — not for production use.
