const select = (element) => document.querySelector(element);

const setDigitalClock = () => {
  const date = new Date();

  const digitalClock = select(".digital-clock> h1");

  digitalClock.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  `;

  if (date.getSeconds() <= 9) {
    digitalClock.textContent = `${date.getHours()}:${date.getMinutes()}:0${date.getSeconds()}  `;
  }

  return;
};

const setRotation = (element, rotate) => {
  return element.style.setProperty("--r", rotate * 360);
};
const setClock = () => {
  const hour = select(".hour");
  const minute = select(".minute");
  const second = select(".second");

  const nowDate = new Date();
  const secondRotate = nowDate.getSeconds() / 60;
  const minutesRotate = (secondRotate + nowDate.getMinutes()) / 60;
  const hoursRotate = (minutesRotate + nowDate.getHours()) / 12;
  setRotation(hour, hoursRotate);
  setRotation(minute, minutesRotate);
  setRotation(second, secondRotate);

  return setDigitalClock();
};

setInterval(setClock, 1000);
