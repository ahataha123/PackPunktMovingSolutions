document.getElementById("offer-form").addEventListener("submit", e => {
  e.preventDefault();

  const from = e.target.from.value.trim();
  const to = e.target.to.value.trim();

  const message = `Hallo, ich möchte ein Umzugsangebot:\nVon: ${from}\nNach: ${to}`;

  const phone = "436781234567"; // without +
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});
const steps = {
  1: {
    title: "Schritt 1: Erstgespräch",
    text:
      "Im Erstgespräch evaluieren wir den Umfang der abzuwickelnden Arbeiten und besprechen Ihre Wünsche und Anforderungen, um die Grundlage für ein individuelles Angebot zu schaffen.",
    progress: 20,
  },
  2: {
    title: "Schritt 2: Besichtigung (optional)",
    text:
      "Bei Bedarf besichtigen wir Ihre Räumlichkeiten vor Ort, um den Umzug exakt einschätzen und optimal planen zu können.",
    progress: 40,
  },
  3: {
    title: "Schritt 3: Individuelles Angebot",
    text:
      "Sie erhalten Ihr individuelles Angebot entweder innerhalb von 60 Minuten nach dem Erstgespräch oder am selben Tag der Besichtigung.",
    progress: 60,
  },
  4: {
    title: "Schritt 4: Umzugsabwicklung",
    text:
      "Am vereinbarten Wunschtermin führen wir Ihren Umzug zuverlässig, professionell und termingerecht durch.",
    progress: 80,
  },
  5: {
    title: "Schritt 5: Feedback-Gespräch",
    text:
      "Nach dem Umzug freuen wir uns über Ihr Feedback und stellen sicher, dass Sie mit unserer Dienstleistung vollständig zufrieden sind.",
    progress: 100,
  },
};

document.querySelectorAll(".process-card").forEach(card => {
  card.addEventListener("click", () => {
    const step = Number(card.dataset.step);
    const data = steps[step];

    document.querySelectorAll(".process-card").forEach(c => {
      const s = Number(c.dataset.step);
      c.classList.remove("active", "done");
      if (s < step) c.classList.add("done");
    });

    card.classList.add("active");

    document.getElementById("detail-title").textContent = data.title;
    document.getElementById("detail-text").textContent = data.text;
    document.getElementById("progress-bar").style.width = data.progress + "%";
    document.getElementById("progress-text").innerHTML =
      `Fortschritt: <strong>${data.progress}%</strong> · Schritt ${step} von 5`;
  });
});
// HERO IMAGE CAROUSEL
const slides = document.querySelectorAll(".carousel-img");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 2500); // change every 3.5s

/*
(function () {
  const wrapper = document.getElementById("heroMiddle");
  const img = document.getElementById("heroMiddleImg");

  if (!wrapper || !img) return;

  function updateHeroLogo() {
    const width = window.innerWidth;

    // REAL mobile layout range
    const isMobileLayout = width <= 820;

    if (isMobileLayout) {
      wrapper.style.display = "flex";
      wrapper.style.justifyContent = "center";
      wrapper.style.margin = "24px auto";

      img.style.width = Math.min(width * 0.7, 320) + "px";
      img.style.height = "auto";
    } else {
      wrapper.style.display = "none";
    }
  }

  // Initial run
  updateHeroLogo();

  // Keep in sync
  window.addEventListener("resize", updateHeroLogo);
})();

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("heroMiddle");
  if (!wrapper) return;

  const mq = window.matchMedia("(max-width: 768px)");

  function updateHeroMiddle(e) {
    if (e.matches) {
      wrapper.style.display = "flex";
      wrapper.style.justifyContent = "center";
      wrapper.style.margin = "24px auto";
    } else {
      wrapper.style.display = "none";
    }
  }

  // Initial run
  updateHeroMiddle(mq);

  // Listen for changes (rotate, resize, split screen)
  mq.addEventListener("change", updateHeroMiddle);
});
 */



