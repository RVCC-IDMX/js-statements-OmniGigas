/*
 * stmnts-04.js
 * Language: javascript
 * Test: tests/stmnts-04.test.js
 * Path: src/stmnts-04.js
 * Temperature Calculator
 */

/**
 * Converts a temperature in Fahrenheit to Celsius rounded to 2 decimal places
 * @param {number} fahrenheit - temperature in Fahrenheit
 * @returns {number} - temperature in Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
  // write your code here & return
  const celsius = (fahrenheit - 32) * 5 / 9;
  const rndCelsius = celsius.toFixed(2);
  return +rndCelsius;
}

/**
 * Converts a temperature in Celsius to Fahrenheit rounded to 2 decimal places
 * @param {number} celsius - temperature in Celsius
 * @returns {number} - temperature in Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  // write your code here & return
  const fahrenheit = (9 * celsius + 160) / 5;
  const rndFahrenheit = fahrenheit.toFixed(2);
  return +rndFahrenheit;
}

module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};
