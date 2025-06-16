const hoursEl = document.getElementById("hour");
const minutesEl = document.getElementById("mins");
const secondsEl = document.getElementById("secs");

setInterval(setTime, 1000);

function setTime() {
    const newDate = new Date();
    let hours = newDate.getHours().toString();

    let mins = newDate.getMinutes().toString();

    let secs = newDate.getSeconds().toString();

    if(hours < 10 || mins < 10 || secs < 10) {
        mins = mins.padStart(2, "0");
        secs = secs.padStart(2, "0");
        hours = hours.padStart(2, "0");
    }
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = mins;
    secondsEl.innerHTML = secs;
}