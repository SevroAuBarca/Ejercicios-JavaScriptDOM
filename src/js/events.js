import { hamburguer } from "./data/hamburger.js";

const init = () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".hamburger")) {
      hamburguer(e);
    }
  });
};

export default init;
