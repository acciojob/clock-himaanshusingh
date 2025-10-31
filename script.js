//your JS code here. If required.
function updateTimer() {
  const dateString = new Date().toLocaleString();
  const timerElement = document.getElementById("timer");
  timerElement.textContent = dateString;
}
updateTimer();
setInterval(updateTimer, 1000);