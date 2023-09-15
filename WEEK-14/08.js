function calculateRemainingDays(eventDate) {
  const currentDate = new Date();
  const startDateTime = new Date(eventDate);
  const timeDifference = startDateTime - currentDate;
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

const eventDate = "2023-08-31"; 
const daysUntilEvent = calculateRemainingDays(eventDate);

console.log(daysUntilEvent);
