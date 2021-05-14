const preloader = document.querySelector(".preloader");
const preloaderProgress = document.querySelector(".preloader__progress");

window.addEventListener("load", () => {
  preloaderProgress.style.width = "100%";
  setTimeout(() => {
    preloader.classList.add("loaded");
  }, 1000); // delay from .preloader__progress transition
});
