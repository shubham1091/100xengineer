const clock = document.getElementById("clock");

function updateTime() {
  let date = new Date();
  let options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
  clock.innerHTML = date.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately
