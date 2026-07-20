
console.log('Is this working?');

function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: true});

    const element = document.getElementById('time');

    if (element) {
        element.textContent = time;
    }
}

updateClock();
setInterval(updateClock, 1000);