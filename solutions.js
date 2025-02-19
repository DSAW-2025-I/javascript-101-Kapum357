// Sum of Two Numbers
function sum(a, b) {
  return a + b; 
}
// Factorial of a Number
function factorial(n) {
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
// Find the Largest Number
function findLargest(arr) {
  return Math.max(...arr);
}
// Count Vowels in a String
function countVowels(str) {
  return str.match(/[aeiou]/gi).length;
}
// Check if a Number is Prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
