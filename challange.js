document.addEventListener('DOMContentLoaded', function() {
  const timerElement = document.getElementById('timer');
  const endTime = Date.now() + 125 * 1000; // 10 seconds from now

  function updateTimer() {
    const remainingTime = Math.max(0, endTime - Date.now());
    const minutes = Math.floor(remainingTime / 60000);
    const seconds = Math.floor((remainingTime % 60000) / 1000);
    timerElement.textContent = `Time remaining: ${minutes}m ${seconds}s`;

    if (remainingTime <= 0) {
      window.location.replace("timeout.html");
    }
  }

  updateTimer(); // start the timer
  setInterval(updateTimer, 1000); // update every second
});

