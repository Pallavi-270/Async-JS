// Prompt the user to enter the number of seconds
let totalSeconds = parseInt(prompt("Enter the number of seconds for the countdown: "), 10);

if (isNaN(totalSeconds) || totalSeconds <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    let remainingTime = totalSeconds;

    // Function to display the remaining time
    const displayTime = () => {
        console.log(`Time remaining: ${remainingTime} seconds`);
    };

    // Countdown logic using setInterval
    const countdownInterval = setInterval(() => {
        remainingTime--;

        displayTime();

        // If countdown reaches zero, stop the timer and print a message
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            console.log("Countdown Complete!");
        }
    }, 1000);

    // Function to detect keypress
    const detectKeyPress = () => {
        document.addEventListener('keydown', (event) => {
            if (event.key === 's') {
                clearInterval(countdownInterval);
                console.log("Countdown stopped by user.");
            }
        });
    };

    // Delay key press detection with setTimeout
    setTimeout(detectKeyPress, 500); // Start detecting key press after 500ms
}
