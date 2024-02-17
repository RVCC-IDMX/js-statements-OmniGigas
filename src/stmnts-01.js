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
nextInteger(1);
nextInteger(2);
nextInteger(13);
nextInteger(-14);

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
times(2, 3);
times(3, 3);
times(0, 3);
times(-5, 4);

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
convertMinutesToSeconds(1);
convertMinutesToSeconds(2);
convertMinutesToSeconds(1.5);
convertMinutesToSeconds(0);

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
convertMinutesToSeconds(1);
convertMinutesToSeconds(2);
convertMinutesToSeconds(1.5);
convertMinutesToSeconds(0);

module.exports = {
  nextInteger,
  times,
  convertMinutesToSeconds,
  convertHoursToSeconds,
};
