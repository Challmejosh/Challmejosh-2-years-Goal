const d = new Date();
document.querySelector("#currentTimeUTC").textContent = d.toUTCString();

const p = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.querySelector("#currentDay").textContent = days[p.getDay()];
