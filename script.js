const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const day = new Date();
        let currentDay = days[day.getDay()];
        document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML = `[ Current day: ${currentDay} ]`;
       
        const updateCurrentUTCTime = () => {
            const currentTime = new Date();
            const hours = currentTime.getUTCHours().toString().padStart(2, '0');
            const minutes = currentTime.getUTCMinutes().toString().padStart(2, '0');
            const seconds = currentTime.getUTCSeconds().toString().padStart(2, '0');
            const milliseconds = currentTime.getUTCMilliseconds().toString().padStart(3, '0');
            const formattedTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
        
            document.querySelector("[data-testid='currentUTCTime']").textContent = `[ Current time (UTC): ${formattedTime} ]`;
        };
        
        setInterval(updateCurrentUTCTime, 100);
        
        
