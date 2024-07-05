document.addEventListener("DOMContentLoaded", () => {
    const dayElement = document.getElementById('day');
    const timeElement = document.getElementById('timeUTC');

    function updateTime() {
        const now = new Date();
        const utcDay = now.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });
        const utcTime = now.toLocaleTimeString('en-US', { timeZone: 'UTC' });

        dayElement.textContent = utcDay;
        timeElement.textContent = `${utcTime} UTC`;
    }

    updateTime();
    setInterval(updateTime, 1000);
});