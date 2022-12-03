function checkSign(num) {
  return num === 0 ? "zero" : (num => 0) ? "positive" : (num <= 0) ? "negative" : "positive";
}

console.log(checkSign(0));
console.log(checkSign(10));
console.log(checkSign(-10));
