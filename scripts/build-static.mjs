import { cp, mkdir, rm, access, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
const pages = [
  "index.html",
  "portal.html",
  "q_and_a.html",
  "schedule.html",
  "signup.html",
  "music-kittens.html",
  "site.css",
  "site.js",
];
const images = [
  "AlleyCat_string.png",
  "favicon.ico",
  "catClarinet.jpg",
  "catPiano.jpg",
  "heading-swish.png",
  "lessons-piano-cat.webp",
  ...[
    "piano",
    "voice",
    "clarinet",
    "saxophone",
    "bassoon",
    "theory",
    "groups",
  ].map((name) => `lesson-${name}.webp`),
];

// Render the announcement into HTML so it does not depend on browser JavaScript.
const announcement = JSON.parse(await readFile(path.join(root, "announcement.json"), "utf8"));
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);
const banner = announcement.enabled && announcement.text.trim()
  ? `<aside class="announcement" aria-label="School announcement"><div class="wrap announcement-inner"><span>${escapeHtml(announcement.text)}</span>${announcement.linkText && announcement.href ? `<a href="${escapeHtml(announcement.href)}">${escapeHtml(announcement.linkText)}</a>` : ""}</div></aside>`
  : "";

// Publish only public page assets, never repository metadata or internal notes.
await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, "assets/images"), { recursive: true });
for (const file of pages) {
  if (file.endsWith(".html")) {
    const html = await readFile(path.join(root, file), "utf8");
    await writeFile(path.join(output, file), html.replace('<header class="site-header">', `${banner}\n    <header class="site-header">`));
  } else {
    await cp(path.join(root, file), path.join(output, file));
  }
}
for (const file of images)
  await cp(
    path.join(root, "assets/images", file),
    path.join(output, "assets/images", file),
  );
for (const folder of ["fonts", "icons", "documents"])
  await cp(
    path.join(root, "assets", folder),
    path.join(output, "assets", folder),
    { recursive: true },
  );
await access(path.join(output, "index.html"));
console.log("Static site prepared in dist/.");
