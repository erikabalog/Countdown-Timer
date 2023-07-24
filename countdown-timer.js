const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const countdownDisplay = document.getElementById("countdown");

let timer;
let remainingSeconds;

function startCountdown() {
  const minutesInput = parseInt(document.getElementById("minutes").value);
  const secondsInput = parseInt(document.getElementById("seconds").value);
  const totalSeconds = minutesInput * 60 + secondsInput;

  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert("Please enter a valid time.");
    return;
  }

  remainingSeconds = totalSeconds;

  timer = setInterval(updateCountdown, 1000);
  updateCountdown(); // Display the initial time without delay
  startBtn.disabled = true;
  pauseBtn.disabled = false;
}

function pauseCountdown() {
  clearInterval(timer);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

function updateCountdown() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  countdownDisplay.textContent = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  if (remainingSeconds === 0) {
    clearInterval(timer);
    alert("Time's up!");
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  }

  remainingSeconds--;
}

startBtn.addEventListener("click", startCountdown);
pauseBtn.addEventListener("click", pauseCountdown);
