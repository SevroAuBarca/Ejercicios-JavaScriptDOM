export const hamburguer = () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".hamburger") || e.target.matches(".hamburger *")) {
      activeNav(e);
    }
    if (e.target.matches(".hamburger-nav > nav *")) {
      activeNav(e);
    }
  });
};

const activeNav = (e) => {
  e.target.classList.toggle("is-active");
  document.querySelector(".hamburger-nav").classList.toggle("is-active");
};
