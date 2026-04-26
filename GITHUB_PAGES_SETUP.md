# GitHub Pages Setup

Use these steps when copying or pushing this project to GitHub.

## 1. Create The Repository

Create a new GitHub repository. Keep the default branch as `main`.

## 2. Push The Project

From this folder:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

If the remote already exists:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## 3. Enable Pages

In GitHub:

1. Open the repository.
2. Go to **Settings**.
3. Go to **Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push to `main` or manually run the workflow from the **Actions** tab.

## 4. Confirm The Site

After the action finishes, open the Pages URL shown in the deployment summary.

Important routes:

- Homepage: `/`
- Cyber report route: `/#/cyber-threat-risk`
- Direct static report: `/site/cyber-threat-risk-master-report.html`
- Black-and-white PDF: `/site/summit-care-cyber-threat-risk-master-report-black-white.pdf`
- Color PDF: `/site/summit-care-cyber-threat-risk-master-report.pdf`

## 5. Before Pushing

Run:

```bash
npm run build
git status --short
```

The build should succeed. `git status --short` should show only intentional changes.
