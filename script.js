// Contact address used by the contact form
const CONTACT_EMAIL = "nimayshah1118@gmail.com";

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal sections on scroll
const revealTargets = document.querySelectorAll(
  ".section h2, .pillars li, .timeline li, .card, .tier, .contact-form"
);
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

// Count-up animation for numeric stats
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll(".stat-num[data-count]").forEach((el) => {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  if (reduceMotion || target <= 1) return;
  const duration = 1200;
  let start = null;
  const step = (t) => {
    if (start === null) start = t;
    const p = Math.min((t - start) / duration, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  el.textContent = "0" + suffix;
  requestAnimationFrame(step);
});

// Contact form -> opens the visitor's email client with a prefilled message
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = `OHCL Inquiry: ${data.get("topic")}`;
  const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nInterested in: ${data.get("topic")}\n\n${data.get("message")}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
