# AlleyCat Music Tuition

A responsive static website. Serve the repository locally:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765`.

## Updating the site

- `index.html`: homepage, lesson instruments, teacher biography and testimonial.
- `site.css`: shared styles and responsive layouts.
- `site.js`: mobile navigation and registration destination.
- `q_and_a.html`, `portal.html`, `schedule.html`, `signup.html`: existing supporting pages.
- `navbar.html`: compatibility navigation for older resource pages.

The school's Google registration form is linked from the homepage, lessons page and existing signup route. It is present directly in HTML so registration links work without JavaScript. If changing it, update those three pages and `registrationUrl` in `site.js`. There are no direct calendar-booking embeds on the redesigned pages.

Student Portal links to My Music Staff's official login. The previous embedded widget rendered an empty frame, so it has been replaced with a direct sign-in link.

The original `assets/images/AlleyCat_string.png` is used unchanged. Fonts are served locally; their open-font licenses are in `assets/fonts`. Standard interface icons are from Iconoir, with its license in `assets/icons`. The hero image, instrument illustrations and underline were generated from the approved visual direction. WebP assets are the optimized versions used by the page.

No external JavaScript framework is required. For hosting, run `node scripts/build-static.mjs` to create the curated `dist/` output. `.openai/hosting.json` identifies the Sites project and static output directory. Only public page assets are copied to the deployment; repository metadata and internal QA notes are excluded.
