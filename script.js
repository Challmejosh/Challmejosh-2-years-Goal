const d = new Date();
document.querySelector("#currentTimeUTC").innerHtml = d.toUTCString();

const p = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.querySelector("#currentDay").innerHtml = days[p.getDay()];
