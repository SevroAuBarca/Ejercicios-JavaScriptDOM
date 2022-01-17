const art = document.querySelector(".buttons-menu");
const h3 = document.createElement("h3");
const audio = document.querySelector(".audio");

let intervalID;
export const Clock = () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches("#start-clock")) {
      intervalID = setInterval(startClock, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches("#stop-clock")) {
      stopClock();
      e.target.previousElementSibling.disabled = false;
    }
    if (e.target.matches("#start-alarm")) {
      startAlarm();
      e.target.disabled = true;
    }
    if (e.target.matches("#stop-alarm")) {
      stopAlarm();
      e.target.previousElementSibling.disabled = false;
    }
  });
};

const startClock = () => {
  const fecha = new Date();
  const tiempo = {
    hora: fecha.getHours(),
    minuto: fecha.getMinutes(),
    segundo: fecha.getSeconds(),
  };
  h3.textContent = `${tiempo.hora} : ${tiempo.minuto} : ${tiempo.segundo}`;
  art.insertAdjacentElement("afterbegin", h3);
};

const stopClock = () => {
  clearInterval(intervalID);
};

const startAlarm = () => {
  audio.play();
  audio.volume = 1;
};

const stopAlarm = () => {
  audio.pause();
};
