# FATEQ Technologies — Website Hosting & Deployment Guide

This folder (`dist/`) contains the complete, production-ready static build of the **FATEQ Technologies** website.

---

## 1. Quick Local Preview
You can test the built website locally using any static web server:

```bash
# Using Node / npx:
npx serve dist

# Or using Python:
python3 -m http.server 8080 --directory dist
```
Then visit `http://localhost:8080` or `http://localhost:3000`.

---

## 2. Deploying to cPanel / Shared Hosting (Hostinger, GoDaddy, Namecheap, etc.)
1. Log in to your **cPanel**.
2. Open **File Manager** and navigate to `public_html/` (or your domain's document root).
3. Upload the contents of this `dist/` directory (or upload `dist-fateq-technologies.zip` and extract it directly inside `public_html/`).
4. Ensure `.htaccess` is present in `public_html/` to support client-side routing and URL rewrites.

---

## 3. Deploying to Netlify / Vercel / Cloudflare Pages
* **Netlify**: Drag and drop the `dist/` folder directly onto the Netlify Drop dashboard. The included `_redirects` file automatically handles all SPA routing.
* **Cloudflare Pages**: Connect your repository or drag-and-drop the `dist/` folder.
* **Vercel**: Run `npx vercel deploy --prod` from the project root or configure build output directory as `dist`.

---

## 4. Deploying to Nginx
Add this block inside your `server { ... }` block:

```nginx
server {
    listen 80;
    server_name fateqtechnologies.com www.fateqtechnologies.com;
    root /var/www/fateqtechnologies/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
}
```

---

## 5. File Inventory
* `index.html`: Optimized HTML entry point with OpenGraph, JSON-LD structured data, and font preconnects.
* `assets/`: Minified JavaScript bundles, stylesheets (`index-*.css`), and vendor modules.
* `fateq_logo.svg`: Vector company brandmark.
* `_redirects`: Netlify / Cloudflare SPA rewrite rules.
* `.htaccess`: Apache mod_rewrite rules for direct URL navigation.
* `dist-fateq-technologies.zip`: All-in-one compressed archive for upload.
