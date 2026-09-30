# EACHRights Website

The official website of **EACHRights**, advancing human rights and social justice in East Africa.

**Live site:** https://www.eachrights.or.ke/

---

## Overview

This is a single-page application (SPA) that presents EACHRights' work, programmes, and ways to get involved. It includes programme pages such as the **Gender Justice Programme**, which features an interactive "pillars" selector and an expected-change section.

## Tech Stack

| Area | Tool |
| --- | --- |
| Framework | [React](https://react.dev/) |
| Build tool | [Vite](https://vitejs.dev/) |
| Routing | [React Router](https://reactrouter.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Hosting | [Vercel](https://vercel.com/) |
| DNS | cPanel Zone Editor (HA Soft Kenya nameservers) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (comes with Node.js)

### Installation

```bash
git clone <your-repository-url>
cd <project-folder>
npm install
```

### Run locally

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

The production files are generated in the `dist/` folder. To preview the build locally:

```bash
npm run preview
```

## Project Structure

Adjust this to match your repository.

```
.
├── public/                 # Static files
├── src/
│   ├── assets/             # Images and media (e.g. assets/impact/)
│   ├── components/         # Shared components
│   ├── pages/              # Page components (Home, Gender Justice, Contact, ...)
│   ├── App.jsx             # Routes
│   └── main.jsx            # Entry point
├── vercel.json             # SPA routing rewrite for Vercel
├── index.html
├── package.json
└── README.md
```

## Editing Content

### Gender Justice page

Page content lives at the top of the Gender Justice page component:

- **`pillars`**: the four focus-area pillars. Each pillar has an `icon`, `color`, `title`, and a list of `items` (each with an `icon`, `title`, and `text`). The selector, progress bar, and detail panel adapt automatically to the number of pillars, but the layout is designed for **four**.
- **`outcomes`**: the expected-change cards.

Icons come from `lucide-react`. Import any new icon at the top of the file before using it.

## Deployment

The site is deployed on **Vercel**, connected to the GitHub repository. Every push to the production branch triggers a new deployment.

### Vercel settings

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

### Client-side routing

`vercel.json` must be present in the project root so that refreshing or opening an inner page (for example `/gender-justice`) doesn't return a 404:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Custom domain and DNS

The domain `eachrights.or.ke` is managed through cPanel DNS (Zone Editor) and points to Vercel.

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `216.198.79.1` |
| CNAME | `www` | the value shown in Vercel's Domains settings |

Notes:

- Use the exact values Vercel shows under **Settings → Domains**, as they can change.
- Do not keep an `AAAA` record for the root domain. It conflicts with Vercel.
- Leave the MX and TXT records alone. Email runs on Google Workspace.
- Subdomain records (`cpanel`, `webmail`, `ftp`, `mail` and others) stay pointed at the hosting server (`88.198.7.251`).
- Because the main domain points to Vercel, log in to cPanel at `https://cpanel.eachrights.or.ke:2083` rather than `eachrights.or.ke:2083`.

## Contributing

1. Create a branch: `git checkout -b feature/your-change`
2. Make your changes and test locally with `npm run dev`
3. Confirm the build passes with `npm run build`
4. Commit, push, and open a pull request

## Contact

- Website: https://www.eachrights.or.ke/
- Use the **Get Involved** page on the site to get in touch.

## License

Add your license here (for example, proprietary, "All rights reserved", or an open-source license such as MIT).

---

&copy; EACHRights. All rights reserved.