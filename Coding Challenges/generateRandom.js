function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function displayProgress(timeRemaining) {
    console.log(`Generating random number in ${timeRemaining} seconds...`);
}

const delayInSeconds = 3;

let timeRemaining = delayInSeconds;


displayProgress(timeRemaining);


const countdownInterval = setInterval(() => {
    timeRemaining--;

    displayProgress(timeRemaining);


    if (timeRemaining === 0) {
        const randomNumber = generateRandomNumber();
        console.log(`Random number generated: ${randomNumber}`);
        clearInterval(countdownInterval);
    }
}, 1000);
