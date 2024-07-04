const d = new Date();
const time = document.querySelector("#currentTimeUTC");
time.textContext = d.toUTCString();

const p = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const date = document.querySelector("#currentDay");
date.textContent = days[p.getDay()];
