export const hamburguer = (e) => {
  e.target.classList.toggle("is-active");
  document.querySelector(".hamburger-nav").classList.toggle("is-active");
};
