// Edit this one announcement for every page. Set enabled to false to hide it.
// For recitals or other news, replace the text and optional link together.
const schoolAnnouncement = {
  enabled: true,
  text: "Coming soon: small group music classes for ages 0–5.",
  linkText: "Explore classes",
  href: "music-kittens.html",
};

if (schoolAnnouncement.enabled && schoolAnnouncement.text.trim()) {
  const banner = document.createElement("aside");
  banner.className = "announcement";
  banner.setAttribute("aria-label", "School announcement");
  const content = document.createElement("div");
  content.className = "wrap announcement-inner";
  const message = document.createElement("span");
  message.textContent = schoolAnnouncement.text;
  content.append(message);
  if (schoolAnnouncement.linkText && schoolAnnouncement.href) {
    const link = document.createElement("a");
    link.href = schoolAnnouncement.href;
    link.textContent = schoolAnnouncement.linkText;
    content.append(link);
  }
  banner.append(content);
  document.querySelector(".site-header")?.before(banner);
}

// Google registration form supplied by the school.
const registrationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSe4-aOulcCENNHHYs33Ax_OEAbvoSqY3S2nk93dzVqrwS2VuA/viewform?usp=sharing&ouid=101060649055349864171";

document.querySelectorAll("[data-registration]").forEach((link) => {
  if (registrationUrl) link.href = registrationUrl;
});

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");
const lessonsDropdown = document.querySelector(".lessons-dropdown");
function closeMenu() {
  lessonsDropdown?.removeAttribute("open");
  navigation?.removeAttribute("data-open");
  menuButton?.setAttribute("aria-expanded", "false");
}
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  navigation.toggleAttribute("data-open", open);
});
navigation?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lessonsDropdown?.open) {
    lessonsDropdown.removeAttribute("open");
    lessonsDropdown.querySelector("summary").focus();
    return;
  }
  if (
    event.key === "Escape" &&
    menuButton?.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!lessonsDropdown?.contains(event.target)) {
    lessonsDropdown?.removeAttribute("open");
  }
});
lessonsDropdown?.addEventListener("focusout", (event) => {
  if (!lessonsDropdown.contains(event.relatedTarget)) {
    lessonsDropdown.removeAttribute("open");
  }
});

// The legacy signup page remains a useful contact fallback without a form URL.
const registrationAction = document.querySelector("[data-registration-action]");
if (registrationAction && registrationUrl) {
  registrationAction.innerHTML = "";
  const link = document.createElement("a");
  link.className = "button button-primary";
  link.href = registrationUrl;
  link.textContent = "Open registration form";
  registrationAction.append(link);
}
