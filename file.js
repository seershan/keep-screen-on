let keepScreenOnInterval;
let wakeLock = null;
let timerInterval;
let startTime;

async function resetIdleTimer() {
    try {
        if (!wakeLock) {
            wakeLock = await navigator.wakeLock.request('screen');
            wakeLock.addEventListener('release', () => {
                console.log('Screen Wake Lock was released');
            });
            console.log('Screen Wake Lock is active');
        }
    } catch (err) {
        console.error('Failed to activate Screen Wake Lock:', err);
    }
}

function startKeepingScreenOn() {
    if (!keepScreenOnInterval) {
        resetIdleTimer(); // Reset idle timer immediately
        keepScreenOnInterval = setInterval(resetIdleTimer, 30000); // Reset every 30 seconds
        document.body.classList.add('dark-mode');
        document.getElementById('startButton').style.display = 'none';
        document.getElementById('stopButton').style.display = 'inline-block';
        document.getElementById('timer').style.display = 'block';
        
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
        
        console.log('Started keeping screen on');
    }
}

function stopKeepingScreenOn() {
    if (keepScreenOnInterval) {
        clearInterval(keepScreenOnInterval);
        keepScreenOnInterval = null;
        if (wakeLock) {
            wakeLock.release().then(() => {
                wakeLock = null;
                console.log('Stopped keeping screen on');
            });
        }
        document.body.classList.remove('dark-mode');
        document.getElementById('stopButton').style.display = 'none';
        document.getElementById('startButton').style.display = 'inline-block';
        document.getElementById('timer').style.display = 'none';
        
        clearInterval(timerInterval);
        document.getElementById('timeElapsed').textContent = '0';
    }
}

function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('timeElapsed').textContent = elapsedTime;
}
