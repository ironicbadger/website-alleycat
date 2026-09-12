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

The original `assets/images/AlleyCat_string.png` is used unchanged. Fonts are served locally; their open-font licenses are in `assets/fonts`. Standard interface icons are from Iconoir, with its license in `assets/icons`. Both photographs use the original, unmodified images of Cat. The instrument illustrations and underline were generated from the approved visual direction. Instrument WebP assets are the optimized versions used by the page.

No external JavaScript framework is required. For hosting, run `node scripts/build-static.mjs` to create the curated `dist/` output. `.openai/hosting.json` identifies the Sites project and static output directory. Only public page assets are copied to the deployment; repository metadata and internal QA notes are excluded.

## Seasonal announcements

Edit `schoolAnnouncement` at the top of `site.js`. The same banner appears on every modern page:

- `enabled`: set to `false` when there is no announcement.
- `text`: the short announcement, such as an upcoming recital or new class.
- `linkText` and `href`: an optional link; leave both empty for text only. Use `music-kittens.html` for the young musicians landing page.

The banner uses plain text, wraps on small screens, and does not rotate or scroll. It requires JavaScript. Class descriptions and age ranges are in `index.html` under `group-classes`.

The announcements and young musicians work is a local draft on `codex/announcements-and-young-musicians`. It has not been published.

## Music Kittens landing page

`music-kittens.html` contains Music Kittens and Mini Musicians ages, fall dates, class times, pricing and caregiver requirements from the supplied flyer. Its registration button uses the dedicated Google Form decoded from the flyer QR code, separate from private lesson registration. The original flyer is available at `assets/documents/music-kittens-flyer.pdf`.

The shared Lessons navigation is a native disclosure with Sign up and Music Kittens links. When editing navigation, update all six public pages and `navbar.html`; Escape, outside clicks and focus leaving the dropdown close it.

## Navigation comparison

The `codex/nav-redo` worktree previews direct Lessons, Little musicians and FAQs links, with the existing prominent Student Portal button. The previous dropdown design stays in the original worktree. This version is local only.
