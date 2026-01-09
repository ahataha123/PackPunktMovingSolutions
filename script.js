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

  function handleMobileHeroLogo() {
    const logoWrapper = document.getElementById("heroMiddle");
    if (!logoWrapper) return;

    const viewportWidth = window.visualViewport
      ? window.visualViewport.width
      : window.innerWidth;

    const isTouchDevice =
      window.matchMedia("(hover: none)").matches &&
      window.matchMedia("(pointer: coarse)").matches;

    const isMobile = isTouchDevice && viewportWidth < 768;

    if (isMobile) {
      // SHOW + CENTER
      logoWrapper.style.display = "flex";
      logoWrapper.style.justifyContent = "center";
      logoWrapper.style.alignItems = "center";
      logoWrapper.style.margin = "24px auto";

      // RESPONSIVE IMAGE SIZE
      const img = logoWrapper.querySelector("img");
      if (img) {
        img.style.width = Math.min(viewportWidth * 0.75, 320) + "px";
        img.style.height = "auto";
      }
    } else {
      // HIDE ON DESKTOP / TABLET / LARGE SCREENS
      logoWrapper.style.display = "none";
    }
  }

  // Run once
  handleMobileHeroLogo();

  // Run on resize + orientation change
  window.addEventListener("resize", handleMobileHeroLogo);
  window.addEventListener("orientationchange", handleMobileHeroLogo);

(function () {
  function forceLightMode() {
    const isForcedDark =
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      document.documentElement.style.colorScheme !== 'light';

    if (!isForcedDark) return;

    let style = document.getElementById('force-light-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'force-light-style';
      style.innerHTML = `
        html, body {
          background: #ffffff !important;
          color: #111111 !important;
          color-scheme: light !important;
        }

        * {
          background-color: inherit !important;
          color: inherit !important;
          box-shadow: none !important;
          filter: none !important;
        }

        img, svg, video {
          filter: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  // Run on load
  forceLightMode();

  // Re-apply if Chrome tries again
  setTimeout(forceLightMode, 300);
  setTimeout(forceLightMode, 1000);

  // Re-apply on resize or tab switch
  window.addEventListener('resize', forceLightMode);
  document.addEventListener('visibilitychange', forceLightMode);
})();


