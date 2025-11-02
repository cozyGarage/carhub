This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### CI/CD Pipeline

The project includes three GitHub Actions workflows:

1. **Deploy to GitHub Pages** (`deploy.yml`) - Automatically deploys the site to GitHub Pages when changes are pushed to `main`
2. **Pull Request Validation** (`pr-validation.yml`) - Validates PRs by running linting, building, and checking bundle size
3. **Run Tests** (`test.yml`) - Runs linting and build tests on feature branches

### Manual Deployment

To build the static site locally:

```bash
npm run build
```

This will create an optimized production build in the `out` directory.

### GitHub Pages Setup

To enable GitHub Pages deployment:

1. Go to your repository settings
2. Navigate to "Pages" under "Code and automation"
3. Under "Source", select "GitHub Actions"
4. The site will be automatically deployed on the next push to `main`


Car_hub
