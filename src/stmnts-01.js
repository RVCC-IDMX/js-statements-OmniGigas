/*
 * stmnts-01.js
 * Language: javascript
 * Test: tests/stmnts-01.test.js
 * Path: src/stmnts-01.js
 *
 * Arithmetic
 */

/**
 * Calculates the next integer as if you were counting up by 1
 * @param {integer} int - The integer
 * @returns {integer} - the next integer as if you were counting up by 1
 */
function nextInteger(int) {
  // write your code here & return value
  const plusOne = int + 1;
  return plusOne;
}

/**
 * Calculates the product of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - The result of the multiplication
 */
function times(a, b) {
  // write your code here & return value
  const product = a * b;
  return product;
}

/**
 * Converts the number of minutes into seconds
 * @param {number} minutes - the number of minutes to convert
 * @returns {number} - the number of seconds
 */
function convertMinutesToSeconds(minutes) {
  // write your code here & return value
  const seconds = minutes * 60;
  return seconds;
}

/**
 * Converts the number of hours into seconds
 * @param {number} hours - the number of hours to convert
 * @returns {number} - the number of seconds
 */
function convertHoursToSeconds(hours) {
  // write your code here & return value
  const minutes = hours * 60;
  const seconds = minutes * 60;
  return seconds;
}

module.exports = {
  nextInteger,
  times,
  convertMinutesToSeconds,
  convertHoursToSeconds,
};
