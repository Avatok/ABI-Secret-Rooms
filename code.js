const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#navlinks");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
});
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menü öffnen");
  }),
);

// Click-to-zoom for original key images (no external library).
const lightbox = document.querySelector('#key-lightbox');
if (lightbox) {
  const largeImage = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.lightbox-caption');
  document.querySelectorAll('.key-zoom').forEach(button => {
    button.addEventListener('click', () => {
      const thumbnail = button.querySelector('img');
      largeImage.src = thumbnail.currentSrc || thumbnail.src;
      largeImage.alt = thumbnail.alt;
      caption.textContent = thumbnail.alt.replace(' – Arena Breakout Infinite', '');
      lightbox.showModal();
    });
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
}
