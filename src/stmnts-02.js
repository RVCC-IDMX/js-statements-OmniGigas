/*
 * stmnts-02.js
 * Language: javascript
 * Test: tests/stmnts-02.test.js
 * Path: src/stmnts-02.js
 * Arithmetic Operators

 */

/**
 * Calculates the sum of two numbers
 * @param {number} a - First number to calculate
 * @param {number} b - Second number to calculate
 * @returns {number} - The sum of the two numbers
 */
function sum(a, b) {
  // write your code here & return value
  const result = a + b;
  return result;
}
sum(1, 2);
sum(-1, 55);
sum(0, 0);
sum(0, -1);
sum(1, -1);

/**
 * Calculates the sum of two numbers (even if they are passed as strings)
 * @param {number|string} x - First number to calculate
 * @param {number|string} y - Second number to calculate
 * @returns {number} - The sum of the two numbers
 */
function betterSum(x, y) {
  // write your code here & return value
  const convert1 = parseInt(x);
  const consert2 = parseInt(y);
  const convertSum = convert1 + consert2;

  return convertSum;
}
betterSum('1', '2');
betterSum('-1', '55');
betterSum('0', '0');
betterSum(0, '-1');

/**
 * Calculates the remainder of two numbers, the first divided by the second
 * @param {number} number - the number to be divided
 * @param {number} divisor - the divisor of the number
 * @returns {number} - the remainder of the number and the divisor
 *
 *
 * ? computes the first operand modulo the second operand
 */
function remainder(number, divisor) {
  // write your code here & return value
  const leftOver = number % divisor;
  return leftOver;
}
remainder(22, 2);
remainder(5, 2);
remainder(179, 3);
remainder(193, 11);
remainder(0, 0);

module.exports = {
  sum,
  betterSum,
  remainder,
};
