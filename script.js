let navham = document.querySelector(".btn-navbar");
let header = document.querySelector(".header");
let nav = document.querySelector(".header .navbar");
let links = document.querySelectorAll(".header .link");

window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 0);
});

navham.addEventListener("click", () => {
  header.classList.toggle("open-nav");
});
links.forEach((e) => {
  e.addEventListener("click", () => {
    if (header.classList.contains("open-nav"))
      header.classList.remove("open-nav");
  });
});

// smooth scrolling
links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // Stoping LInks from ging to point
    e.preventDefault();
    const href = link.getAttribute("href");
    // scrollBack to top
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (href != "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
