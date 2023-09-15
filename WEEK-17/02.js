let delayInSeconds = 3;

function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayCountdown(remainingTime) {
  console.log(`Time remaining: ${remainingTime} seconds`);
}
setTimeout(() => {
  let remainingTime = delayInSeconds;
  const intervalId = setInterval(() => {
    if (remainingTime > 0) {
      displayCountdown(remainingTime);ś
      remainingTime--;
    } else {
      clearInterval(intervalId);
      const min = 1;
      const max = 10000;
      const randomNum = generateRandomNum(min,max);
      console.log(`Random number generated: ${randomNum}`);
    }
  }, 1000);
}, delayInSeconds * 1000);
