// Step 1: Set Up the Delay Variable
let delayInSeconds = 3;

// Step 2: Display Countdown Messages
function displayCountdown(remainingTime) {
  console.log(`Time remaining: ${remainingTime} seconds`);
  remainingTime--;
}

// Step 3: Generate Random Number Function
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Step 4: Initiate Countdown and Random Number Generation
setTimeout(() => {
  let remainingTime = delayInSeconds;
  const intervalId = setInterval(() => {
    if (remainingTime > 0) {
      displayCountdown(remainingTime);
      remainingTime--;
    } else {
      clearInterval(intervalId);
      const min = 1;
      const max = 10000;
      const randomNumber = generateRandomNumber(min, max);
      console.log(`Random number generated: ${randomNumber}`);
    }
  }, 1000); // Call the interval function every second
}, delayInSeconds * 1000); // Delay for the specified duration
