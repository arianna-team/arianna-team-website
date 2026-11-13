# ARIANNA

Static website for ARIANNA, ready to deploy on GitHub Pages.

## GitHub Pages setup

1. Push this repository to GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to your default branch (`main` recommended) to trigger deploy.

The workflow at `.github/workflows/deploy-pages.yml` publishes this site's root files to GitHub Pages.

## Google Search Console

The public site resolves on `https://www.ariannateam.ai/`. Canonical URLs, Open Graph URLs, structured-data URLs, `robots.txt`, and `sitemap.xml` must all use that same host.

After publishing SEO changes:

1. Submit `https://www.ariannateam.ai/sitemap.xml` in Search Console and confirm its status is **Success**.
2. Use URL Inspection on the homepage, `resources.html`, and the main product pages; run **Test live URL** and request indexing after significant changes.
3. Review **Page indexing** for website-sourced errors and **Core Web Vitals** separately for mobile and desktop.
4. Use the Performance report to improve page titles and copy based on actual queries, impressions, click-through rate, and average position rather than guessed keywords.

Email-rendering files intended for Nutshell are marked `noindex, nofollow` and must not be added to the sitemap. Every public indexable HTML page should have one title, one description, one canonical URL, and one H1.

## Site structure

Every page uses the 2026 design: page content with inline styles, plus the shared `assets/site.css` (base styles, header menu, small-screen layout) and `assets/site.js` (mobile menu, footer "Cookie settings" link). Images live in `images/site/`.

`site-shell.js` adds the cookie banner, Google Analytics (after consent), the Nutshell contact/demo form (`data-nutshell-form`), the CEO meeting scheduler (`data-nutshell-scheduler`) and the Nutshell chat (only after "Accept all"). `attribution.js` attaches campaign attribution to form submissions after consent.

### Page addresses

Pages are linked without ".html" (for example `/platform`, `/contact`). GitHub Pages serves `platform.html` for `/platform`, and the old `.html` addresses keep working. Canonical URLs, Open Graph URLs and `sitemap.xml` use the clean form.

### Verify after deploy

1. Open `/contact` and `/book-a-demo` and confirm the Nutshell form renders; on `/contact` also the meeting scheduler.
2. Submit a test entry and confirm it arrives in Nutshell.
3. Accept cookies and confirm the chat loads; choose "Only necessary" and confirm it does not.
