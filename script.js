function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').innerText = timeString;
  }
  // Update the clock every second
  setInterval(updateClock, 1000);
  // Initial call to display the clock immediately
  updateClock();
