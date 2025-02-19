// solutions.js

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return a + b;
}

function factorial(n) {
  if (typeof n !== 'number' || n < 0) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function findLargest(arr) {
  if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number')) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return Math.max(...arr);
}

function countVowels(str) {
  if (typeof str !== 'string') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return (str.match(/[aeiou]/gi) || []).length;
}

function isPrime(n) {
  if (typeof n !== 'number' || n <= 1) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
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