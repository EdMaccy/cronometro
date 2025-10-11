let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
let running = false;

function updateDisplay() {
  const display = document.getElementById("display");
  const format = (num) => String(num).padStart(2, '0');
  display.textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function tick() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function start() {
  if (!running) {
    timer = setInterval(tick, 1000);
    running = true;
  }
}

function pause() {
  clearInterval(timer);
  running = false;
}

function reset() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}
