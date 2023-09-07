const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const day = new Date();
let currentDay = days[day.getDay()];
document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = `[ ${currentDay} ]`;



const utcTime = new Date().getTime();

document.querySelector('[data-testid="currentUTCTime"]').textContent = `[ ${utcTime} ]`;
        



