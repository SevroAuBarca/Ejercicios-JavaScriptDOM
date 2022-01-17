import { Clock } from "./data/clock.js";
import { hamburguer } from "./data/hamburger.js";

const init = () => {
  document.addEventListener("DOMContentLoaded", (e) => {
    hamburguer();
    Clock();
  });
};

export default init;
