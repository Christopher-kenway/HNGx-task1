const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const day = new Date();
let currentDay = days[day.getDay()];
document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = `[ current day: ${currentDay} ]`;



const updateCurrentUTCTime = () => {
    const newCurrentUTCTime = new Date().getTime();
  
    document.querySelector("[data-testid='currentUTCTime']").textContent = `[ current time: ${newCurrentUTCTime} ]`;
  };
  
  setInterval(updateCurrentUTCTime, 1000);
