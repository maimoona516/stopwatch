let timer;
let isRunning = false;
let timeElapsed = 0;

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);

document.getElementById("continueBtn").addEventListener("click", continueTimer);
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
        document.getElementById("startBtn").style.display = "none";
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
        document.getElementById("startBtn").style.display = "none";
        document.getElementById("continueBtn").style.display = "inline-block";
        document.getElementById("pauseBtn").style.display = "none";
    }
}
function continueTimer() {
    if (!isRunning) {
        isRunning = true;
        document.getElementById("startBtn").style.display = "none"; 
        document.getElementById("continueBtn").style.display = "none";
        document.getElementById("pauseBtn").style.display = "inline-block"; 
         // Show Pause button again

        const startTime = Date.now() - timeElapsed;
        timer = setInterval(() => {
            timeElapsed = Date.now() - startTime;
            document.getElementById("timer").innerText = formatTime(timeElapsed);
        }, 10);
    }
}
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeElapsed = 0;
    document.getElementById("timer").innerText = "00:00:00";
    document.getElementById("startBtn").style.display = "inline-block";
    document.getElementById("continueBtn").style.display = "none";
    document.getElementById("pauseBtn").style.display = "inline-block";
    document.getElementById("resetBtn").disabled = false;
}

