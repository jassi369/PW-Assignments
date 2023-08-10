const userList = ['user1', 'user2', 'user3', 'user4', 'user5']; // Example list of users

function isUsernameInList(username) {
  return userList.includes(username);
}

// Usage
const usernameToCheck = 'user3';
if (isUsernameInList(usernameToCheck)) {
  console.log(`${usernameToCheck} is in the list of users.`);
} else {
  console.log(`${usernameToCheck} is not in the list of users.`);
}