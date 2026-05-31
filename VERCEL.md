# Deploy to Vercel

## Option A — Vercel Dashboard (recommended)

1. Push this project to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Vercel auto-detects **Vite**. Confirm these settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Add environment variable (for contact form):
   - **Name:** `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value:** your Web3Forms access key
5. Click **Deploy**.

## Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

When prompted, link the project. Add env vars:

```bash
vercel env add VITE_WEB3FORMS_ACCESS_KEY
vercel --prod
```

## Notes

- `vercel.json` is included for SPA routing and asset caching.
- `.env` is not uploaded — set secrets in the Vercel dashboard only.
- After changing env vars, redeploy from the Vercel dashboard.
