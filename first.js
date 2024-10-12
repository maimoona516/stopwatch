let timer;
let isRunning = false;
let timeElapsed = 0;

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);

function formatTime(ms) {
    let milliseconds = Math.floor((ms % 1000) / 10);
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / 60000) % 60);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        document.getElementById("startBtn").disabled = true;
        document.getElementById("pauseBtn").disabled = false;
        document.getElementById("resetBtn").disabled = false;

        const startTime = Date.now() - timeElapsed;
        timer = setInterval(() => {
            timeElapsed = Date.now() - startTime;
            document.getElementById("timer").innerText = formatTime(timeElapsed);
        }, 10);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("startBtn").disabled = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeElapsed = 0;
    document.getElementById("timer").innerText = "00:00:00";
    document.getElementById("startBtn").disabled = false;
    document.getElementById("pauseBtn").disabled = true;
    document.getElementById("resetBtn").disabled = true;
}
