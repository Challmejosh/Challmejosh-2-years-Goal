const d = new Date();
document.getElementById("currentTimeUTC").innerHtml = d.toUTCString();

const p = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("currentDay").innerHtml = days[p.getDay()];
