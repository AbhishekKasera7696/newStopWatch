let start;
let isRunning = false;

function startStops(){
    if(isRunning){
        isRunning = false;
        document.getElementById("startStop").innerText = "Start";
        clearInterval(intervalId);
    }else{
        isRunning = true;
        document.getElementById("startStop").innerText = "Stop";
        startTime = new Date().getTime() - elapsedTime;
        updateDisplay()

        intervalId = setInterval(updateDisplay, 1000);
    }
}

function reset() {
    // Reset the stopwatch
    isRunning = false;
    document.getElementById("reset").innerText = "Reset";
    clearInterval(intervalId);
    elapsedTime = 0;
    startTime = new Date().getTime();
    updateDisplay();
}

function updateDisplay() {
    // Update the display with the elapsed time
    const currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);

    const displayTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById("display").innerText = displayTime;
}
let elapsedTime = 0;
let intervalId;