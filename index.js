function updateTime() {
  const current = new Date();

  const hrs = current.getHours().toString().padStart(2, 0);
  const mins = current.getMinutes().toString().padStart(2, 0);
  const secs = current.getSeconds().toString().padStart(2, 0);

  const currentTime = `${hrs}:${mins}:${secs}`;

  document.getElementById(`clk`).textContent = currentTime;
}

updateTime();
setInterval(updateTime, 1000);
