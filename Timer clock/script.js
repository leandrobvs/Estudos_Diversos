function timer() {
const relogio = document.querySelector(".relogio");

let secs = 0;
let timer;

document.addEventListener("click", function (event) {
  const el = event.target;

  if (el.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    startTimer();
  }

  if (el.classList.contains("zerar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    secs = 0;
  }

  if (el.classList.contains("pausar")) {
    relogio.classList.add("pausado");
    clearInterval(timer);
  }
});

function getTimer(secs) {
  const gettimer = new Date(secs * 1000);
  return gettimer.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

function startTimer() {
  timer = setInterval(function () {
    secs++;
    relogio.innerHTML = getTimer(secs);
  }, 1000);
}
}
timer()
