# Summit Care Medical Clinic Cyber Threat Analysis & Risk Assessment

This repository contains a portfolio-ready Summit Care Medical Clinic project for GitHub Pages. It presents a mock healthcare network infrastructure and a full cybersecurity master report covering cyber threat analysis, penetration testing, risk assessment, HIPAA-aware controls, third-party audits, monitoring, incident response, disaster recovery, and remediation planning.

## Featured Deliverable

- Live route after deployment: `/#/cyber-threat-risk`
- Static report file: `public/site/cyber-threat-risk-master-report.html`
- Black-and-white PDF: `public/site/summit-care-cyber-threat-risk-master-report-black-white.pdf`
- Color PDF: `public/site/summit-care-cyber-threat-risk-master-report.pdf`

The homepage links directly to the cyber risk report from the hero button, navigation menu, project cards, and footer.

## Local Preview

Install dependencies:

```bash
npm ci
```

Run the development site:

```bash
npm run dev:web
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## GitHub Pages Deployment

This project is already configured for GitHub Pages through `.github/workflows/static.yml`.

When pushed to the `main` branch, GitHub Actions will:

1. Install Node dependencies with `npm ci`
2. Build the Vite site with `npm run build`
3. Copy `dist/index.html` to `dist/404.html` for fallback routing
4. Upload the `dist` folder to GitHub Pages

In the GitHub repository settings, set Pages to deploy from **GitHub Actions**.

## Notes

- Routing uses `HashRouter`, which is safer for GitHub Pages project sites.
- `vite.config.js` uses `base: './'` so assets work correctly under a GitHub Pages subpath.
- `node_modules`, `dist`, local database files, and local environment files are ignored by `.gitignore`.
- The project currently has a local initial commit ready to push.
