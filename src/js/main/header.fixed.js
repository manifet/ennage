const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
  console.log(headerHeight);
  if (window.pageYOffset > 0) {
    document.body.style.paddingTop = `${headerHeight}px`;
    header.classList.add("fixed");
  } else {
    document.body.style.paddingTop = 0;
    header.classList.remove("fixed");
  }
});
