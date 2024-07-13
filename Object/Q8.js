function startClock() {
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const currentTime = `${hours}:${minutes}:${seconds}`;
        console.log(currentTime);
    }, 1000);
}

// Start the clock
startClock();
    