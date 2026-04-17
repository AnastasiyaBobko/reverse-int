module.exports = function reverse(n) {
  const reversedNumber = Math.abs(n).toString().split('').reverse().join('');
  return Number(reversedNumber);
};
