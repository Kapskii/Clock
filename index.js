isComing = false;
let timerId;

const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    if (!isComing) {
    timerId = setInterval(updateClock, 1000);
    isComing = true;
}
});

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    if (isComing) {
    clearInterval(timerId);
    isComing = false;
}
});

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours(); 
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}
