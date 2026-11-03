# Sanket Sugave — Personal Portfolio

A responsive React + Vite portfolio with custom CSS, Framer Motion animations, Lucide icons, and a persistent dark/light theme toggle.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel should detect Vite automatically.
4. Use:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy.

## Updating projects later

The Projects section currently uses a deliberate "Projects in progress" empty state. When you have real projects, replace the `project-empty` block in `src/main.jsx` with project cards. Do not add fictional projects.

## Personal details to review before publishing

- Confirm the B.Tech status wording in the Education section.
- Review the self-description and skill list for accuracy.
- Add Fiverr/Upwork URLs, resume, and a custom domain when available.
