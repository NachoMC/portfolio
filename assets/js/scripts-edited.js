
// Current date
const last_mm = 7;
const last_yyyy = 2023;
const today = new Date();
const today_mm = String(today.getMonth() + 1).padStart(2, '0');
const today_yyyy = today.getFullYear();
let yyyy = today_yyyy - last_yyyy;
let mm = today_mm - last_mm;
if (today_mm < last_mm) {
    mm += 12;
    yyyy--;
}
mm++;
if (mm === 12) {
    mm = 0;
    yyyy++;
}
const m = (mm > 0) ? (mm + ((mm > 1) ? " months" : " month")) : "";
const y = (yyyy > 0) ? (yyyy + ((yyyy > 1) ? " years" : " year")) : "";
document.getElementById("current-date").innerHTML = ((mm > 0) || (yyyy > 0)) ? ("(" + y + (((mm > 0) && (yyyy > 0)) ? " " : "") + m + ")") : "";

