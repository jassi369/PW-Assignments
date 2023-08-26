let input = "Jassi";
function reverseString() {
  let arrstr = input.split("");
  let newarr = [];
  for (let i = arrstr.length - 1; i >= 0; i--) {
    newarr.push(arrstr[i]);
  }
  return console.log(newarr.join(""));
}

setTimeout(reverseString, 2000);
