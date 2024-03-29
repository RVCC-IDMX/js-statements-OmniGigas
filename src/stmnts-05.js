/*
 * stmnts-05.js
 * Language: javascript
 * Test: tests/stmnts-05.test.js
 * Path: src/stmnts-05.js
 * Boolean expressions for numbers
 */

/**
 * Check if a number is odd
 * @param {number} num - number to check
 * @returns {boolean} - true if num is odd, false otherwise
 */
function isOdd(num) {
  // write your code here & return
  const checkOdd = num % 2;
  if (checkOdd === 1 || checkOdd === -1) {
    return true;
  }
  return false;
}

/**
 * Check if a number is even
 * @param {number} num - number to check
 * @returns {boolean} - true if num is even, false otherwise
 */
function isEven(num) {
  // write your code here & return
  const checkEven = num % 2;
  if (checkEven === 0) {
    return true;
  }
  return false;
}

/**
 * Check if a value is a number and negative
 * @param {*} value
 * @returns {boolean} - true if value is a negative number, false otherwise
 */
function isNegative(value) {
  // write your code here & return
  if (value < 0) {
    return true;
  }
  return false;
}

module.exports = {
  isOdd,
  isEven,
  isNegative,
};
