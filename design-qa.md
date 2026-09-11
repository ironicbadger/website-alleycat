# Design QA — AlleyCat Music Tuition

## Result

Visual implementation, local navigation, and registration integration are verified. The school supplied its Google Form URL, and the primary action opens the AlleyCat Music Tuition Student Intake & Registration Form. No form submission was made.

final result: passed

## Evidence

- Source: `/Users/alex/.codex/generated_images/01a091d3-30ad-7fb1-b80c-76d9cb4a4571/exec-030fee18-8c0c-45f3-b767-5cc1376b436e.png` (1135 × 1387).
- Browser implementation: `http://127.0.0.1:8765/index.html`.
- Evidence directory: `/Users/alex/.codex/visualizations/2026/09/11/01a091d3-30ad-7fb1-b80c-76d9cb4a4571/build-qa/`.
- Full comparison: `comparison.png`; inspected source and implementation together in one image.
- Implementation: `desktop-final.png`, stitched from actual `final-top.png` and `final-bottom.png` captures with recorded scrollY 570.5.
- CSS viewport: 1135 × 1000, devicePixelRatio 1. Browser capture output: 1120 × 987 (app scaling). Source normalized to the implementation's pixel width, scroll offset normalized by screenshot height / CSS viewport height. Page content height 1570.5 CSS px; added footer and testimonial attribution account for part of the additional height.
- Full-page browser export produced a broken stitched image and was rejected. Final evidence uses verified viewport captures.
- Additional mobile evidence: `mobile-top.png`, `mobile-contact.png`. Responsive checks at 320, 390, 768 and 1135 CSS px widths.
- State: homepage, navigation and biography closed, no logged-in account. Focused top/bottom captures were inspected separately to read typography, contact details, icons and the logo.

## Findings and comparison history

1. Initial desktop hero was too tall (550px). Reduced it to 490px and reduced header/instrument spacing. Final captures show the main sections in the intended order and similar proportions.
2. Initial teacher photograph was too loosely framed. Added an overflow-hidden image frame and a 1.3× centered crop. Final lower-section comparison verifies the closer crop.
3. Original mobile menu hid Student Portal. Moved that action outside the collapsing navigation, with a full-width pill on phones. Mobile screenshot verifies visibility.
4. Tablet heading/navigation needed narrower sizing. Added a 761–950px adjustment; 768px browser inspection shows no clipping. 320px and 390px checks show no horizontal overflow.
5. Existing My Music Staff widget produced an empty, zero-height iframe with third-party warnings. Replaced it with a verified direct login link. Browser click reached the My Music Staff login form. No credentials entered or payments attempted.
6. Resolved integration blocker: the Google registration URL was supplied and connected in both HTML and JavaScript. The browser click from the homepage opened “AlleyCat Music Tuition Student Intake & Registration Form,” including its student-name fields and Next button. No automatic booking is used.

## Required fidelity surfaces

- Typography: locally hosted Fraunces headings and Nunito Sans body/UI. The headline is deliberately smaller than the generated mockup, following the repeated request for a calmer heading. Body remains readable and headings wrap cleanly on phones.
- Spacing: same split hero, instrument row, teacher introduction, pink lesson/testimonial section and contact section. Mobile stacks these sections naturally. Extra footer is a practical addition.
- Colors: orange-red primary button, blue portal treatment and links, charcoal text, pale gray hero and pale pink lesson band. Original logo file is unchanged byte for byte (SHA-256 compared with HEAD).
- Imagery: original logo and original clarinet photograph; generated hero and five individual instrument assets follow the approved direction. No decorative instrument rays. Standard contact/menu icons use Iconoir assets. Hero optimized from ~2.2MB PNG to ~192KB WebP. Instrument images are optimized WebP.
- Content: “Music lessons with Cat”; “Ages 3 and up, including adults”; online lessons explicit; real student quotation; human lesson copy; no corporate tagline. Expanded biography uses the original site's facts. Prices preserved from the original site. Removed stale June 2024 recital announcement.

## Verification

- Local link and fragment check on all five redesigned pages: no missing files, anchors or duplicate IDs.
- `node --check site.js`: passed.
- Mobile menu: open/close, aria-expanded, Escape and focus return verified.
- About disclosure and FAQ disclosure verified in browser.
- Contact anchor scroll and tel/mailto destinations verified without initiating communications.
- Google Form link verified in browser; signup route also provides the supplied form link, including without JavaScript.
- All homepage images loaded successfully.
- No local application console errors observed. The external My Music Staff login page emitted a JSON parsing error while still displaying its login form; this third-party code is outside this repository.
- No deployment performed.

## Follow-up polish

- The underline and instrument strokes are slightly finer than the generated reference.
- The individual generated instrument illustrations are close in style, not exact traced copies.

## Completion checklist

- [x] Implement approved visual direction with original logo.
- [x] Verify desktop, tablet and mobile layouts.
- [x] Verify local navigation and direct student login destination.
- [x] Receive and connect Google registration Form URL.
- [x] Verify that registration opens the correct form.
