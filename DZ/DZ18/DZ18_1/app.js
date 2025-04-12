const timeBlock = document.querySelector(".time");

let seconds = 90;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formattedSecs = secs < 10 ? '0' + secs : secs;
  return `${minutes}:${formattedSecs}`;
}

const interval = setInterval(() => {
  timeBlock.textContent = formatTime(seconds);
  seconds--;

  if (seconds < 0) {
    clearInterval(interval);
  }
}, 1000);
