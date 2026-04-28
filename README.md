# Long Wharf Junior Roller Derby — Website

Static site for [longwharfjrd.com](https://longwharfjrd.com).

## Stack

- Plain HTML, CSS, and a small amount of vanilla JS
- Hosted on GitHub Pages
- Custom domain via CNAME
- Google Fonts (Fraunces, Manrope, JetBrains Mono)

## File structure

```
long-wharf-jrd/
├── index.html        Landing page (Fear the Wharf hero, intro, pillars, banner, CTA)
├── about.html        Mission, teams, MARINERS + AMITY codes (truncated)
├── register.html     Registration page with embedded Google Form
├── contact.html      Contact page (email + Instagram)
├── 404.html          Custom 404
├── css/
│   └── style.css     Single stylesheet, organized by section
├── js/
│   └── main.js       Mobile nav, active link, reveal animation, footer year
└── assets/           Logo, favicon, OG image (replace placeholders)
```

## Setup

1. **Replace the Google Form embed.**
   In `register.html`, find:
   ```html
   src="https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/viewform?embedded=true"
   ```
   Replace with the actual embed URL from your Google Form's Send dialog (Embed HTML option). Adjust the iframe `height` attribute to fit your form length.

2. **Add brand assets to `assets/`.**
   - `favicon.png` — 32x32 or larger
   - `og-image.jpg` — 1200x630, the badge logo on a navy background, for social shares
   - Optional: `logo.png`, `logo-white.png` if you want to swap the unicode anchor in the nav for a real logo

3. **Replace the nav anchor mark.**
   The nav currently uses the unicode anchor character `⚓` as a placeholder logomark. To swap for the real Long Wharf badge, replace this in every page:
   ```html
   <span class="nav__brand-mark">⚓</span>
   ```
   With:
   ```html
   <img src="assets/logo.png" alt="Long Wharf JRD" class="nav__brand-mark" style="background:transparent">
   ```

4. **Update Instagram handle if different.**
   Search for `instagram.com/longwharfjrd` across all pages and update.

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `long-wharf-jrd`)
2. Push these files to the `main` branch
3. In repo Settings → Pages, set source to `main` branch, root folder
4. Add a `CNAME` file containing your custom domain (e.g. `longwharfjrd.com`)
5. Configure DNS at your registrar:
   - `A` records pointing to GitHub Pages IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
   - `CNAME` record on `www` pointing to `<username>.github.io`
6. Enable HTTPS in repo Settings → Pages once DNS propagates

## Local preview

```bash
# any static server works
python3 -m http.server 8000
# or
npx serve
```

Then open `http://localhost:8000`.

## Notes

- All copy is editable directly in the HTML files
- Color and type tokens are at the top of `css/style.css` under `:root`
- The reveal animation uses `IntersectionObserver` and degrades gracefully
- `prefers-reduced-motion` is respected throughout
- No analytics, no tracking, no third-party scripts beyond Google Fonts and the embedded Form
