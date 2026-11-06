/**
 * NepsenX Universal Animation Suite
 * 10+ Premium Animation Types for a Dynamic & Professional Experience.
 */

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");
  initScrollReveal();
  init3DTilt();
  initMagneticElements();
  initRippleEffect();
  initTextShimmer();
  initFloatingIcons();
  initGlassFocus();
  initScrollProgress();
});

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          if (entry.target.classList.contains("stagger-container")) {
            const children = entry.target.querySelectorAll(".stagger-item");
            children.forEach((child, index) => {
              setTimeout(() => child.classList.add("revealed"), index * 100);
            });
          }
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
  );

  document
    .querySelectorAll(".reveal-fade, .reveal-scale, .stagger-container")
    .forEach((el) => observer.observe(el));
}

function init3DTilt() {
  document.querySelectorAll(".tilt-card").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      el.style.transform = `perspective(1000px) rotateX(${
        y * -10
      }deg) rotateY(${x * 10}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      el.style.transition = "all 0.5s ease-in-out";
    });
  });
}

function initMagneticElements() {
  document.querySelectorAll(".magnetic-btn").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = `translate(0, 0)`;
      el.style.transition = "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)";
    });
  });
}

function initRippleEffect() {
  document.querySelectorAll(".ripple-on-click").forEach((el) => {
    el.addEventListener("mousedown", (e) => {
      const ripple = document.createElement("span");
      ripple.className = "ripple-effect";
      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      el.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

function initTextShimmer() {}
function initFloatingIcons() {
  document
    .querySelectorAll(".soft-float")
    .forEach((el, i) => (el.style.animationDelay = `${i * 0.5}s`));
}
function initGlassFocus() {
  document.querySelectorAll(".glass-focus").forEach((card) => {
    card.addEventListener("mouseenter", () =>
      card.classList.add("glass-active")
    );
    card.addEventListener("mouseleave", () =>
      card.classList.remove("glass-active")
    );
  });
}
function initScrollProgress() {
  const progressContainer = document.createElement("div");
  progressContainer.className = "scroll-progress-container";
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress-bar";
  progressContainer.appendChild(progressBar);
  document.body.appendChild(progressContainer);
  window.addEventListener("scroll", () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
  });
}

const styles = document.createElement("style");
styles.textContent = `
    .reveal-fade { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
    .reveal-fade.revealed { opacity: 1; transform: translateY(0); }
    .reveal-scale { opacity: 0; transform: scale(0.9); transition: opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); }
    .reveal-scale.revealed { opacity: 1; transform: scale(1); }
    .tilt-card { transition: transform 0.1s ease-out; will-change: transform; transform-style: preserve-3d; }
    .magnetic-btn { transition: transform 0.2s ease-out; position: relative; }
    .ripple-on-click { position: relative; overflow: hidden; }
    .ripple-effect { position: absolute; background: rgba(255,255,255,0.4); border-radius: 50%; transform: scale(0); animation: ripple-anim 0.6s linear; pointer-events: none; }
    @keyframes ripple-anim { to { transform: scale(4); opacity: 0; } }
    .text-shimmer { background: linear-gradient(90deg, #4a90e2 0%, #ffffff 50%, #4a90e2 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer-anim 3s linear infinite; }
    @keyframes shimmer-anim { to { background-position: 200% center; } }
    .soft-float { animation: float-anim 3s ease-in-out infinite; }
    @keyframes float-anim { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
    .stagger-item { opacity: 0; transform: translateY(20px); transition: all 0.5s ease-out; }
    .stagger-item.revealed { opacity: 1; transform: translateY(0); }
    .glass-focus { transition: all 0.4s ease; backdrop-filter: blur(0px); }
    .glass-active { backdrop-filter: blur(10px); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2); }
    .scroll-progress-container { position: fixed; top: 0; left: 0; width: 100%; height: 4px; background: transparent; z-index: 9999; pointer-events: none; }
    .scroll-progress-bar { height: 100%; background: linear-gradient(to right, #4a90e2, #63b3ed); width: 0%; transition: width 0.1s ease-out; }
    body { opacity: 0; transition: opacity 1s ease-in; }
    body.page-loaded { opacity: 1; }
`;
document.head.appendChild(styles);
