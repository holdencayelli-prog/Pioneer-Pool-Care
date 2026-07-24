# Pioneer Pool Care

Marketing website for Pioneer Pool Care — weekly pool cleaning and maintenance in Charlotte, NC.

Static site (HTML/CSS/JS). No build step, no dependencies. Hosts free on GitHub Pages.

## Files

- `index.html` — the page
- `styles.css` — all styling
- `script.js` — mobile menu + quote form
- `CNAME` — (optional) your custom domain

## Run locally

Just open `index.html` in a browser. Or serve it:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub named `pioneer-pool-care`.
2. Push these files to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/pioneer-pool-care.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment**.
   Set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
4. Wait ~1 minute. Your site goes live at:
   `https://YOUR_USERNAME.github.io/pioneer-pool-care/`

## Custom domain (optional)

1. Buy a domain (e.g. `pioneerpoolcare.com`).
2. Edit the `CNAME` file to contain only your domain, e.g.:
   ```
   pioneerpoolcare.com
   ```
3. At your domain registrar, add DNS records pointing to GitHub Pages:
   - Four `A` records for the apex domain → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` → `YOUR_USERNAME.github.io`
4. In **Settings → Pages**, enter your custom domain and enable "Enforce HTTPS".

## TODO before launch

- [ ] Replace `[Add phone number]` and `[Add email address]` in `index.html` footer.
- [ ] Connect the quote form to a real backend (see below).
- [ ] Confirm pricing ($95 / $165 / $175) matches your actual rates.
- [ ] Add real photos once you have them.

## Making the quote form receive real leads

The form is currently front-end only — it shows a thank-you message but doesn't send anything anywhere. Easiest fix is [Formspree](https://formspree.io) (free tier):

1. Sign up, create a form, copy your form ID (looks like `xqkzabcd`).
2. In `index.html`, wrap the fields in a form tag and point it at Formspree:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Add `name="..."` attributes to each input so the data comes through.
4. Submissions will be emailed to you.

(Ask and this can be wired up for you.)
