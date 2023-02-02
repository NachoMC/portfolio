
// Current date
const lastmm = 3;
const lastyyyy = 2022;
const today = new Date();
var todaymm = String(today.getMonth() + 1).padStart(2, '0');
var todayyyyy = today.getFullYear();
var yyyy = todayyyyy - lastyyyy;
var mm = todaymm - lastmm;
if (todaymm < lastmm) {
    mm += 12;
    yyyy--;
}
mm++;
if (mm == 12) {
    mm = 0;
    yyyy++;
}
var m = (mm > 0) ? (mm + ((mm > 1) ? " months" : " month")) : "";
var y = (yyyy > 0) ? (yyyy + ((yyyy > 1) ? " years" : " year")) : "";
document.getElementById("current-date").innerHTML = ((mm > 0) || (yyyy > 0)) ? ("(" + y + (((mm > 0) && (yyyy > 0)) ? " " : "") + m + ")") : "";


// Visits (if not dev)
if (!window.location.href.includes("file://")) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/nachomc.github.io-portfolio-pro/visits");
    xhr.responseType = "json";
    xhr.onload = function() {
        console.log("visits: " + this.response.value);
    }
    xhr.send();
}
