/*
 * stmnts-03.js
 * Language: javascript
 * Test: tests/stmnts-03.tests.js
 * Path: src/stmnts-03.js
 * Arithmetic Expressions

/**
 * Calculates the perimeter of the rectangle rounded to 2 decimal places
 * @param {number} width - the width of the rectangle
 * @param {number} height - the height of the rectangle
 * @returns {number} - the perimeter of the rectangle rounded to 2 decimal places
 *
 */

function rectanglePerimeter(width, height) {
  // write your code here & return
  const perimeter = (width + height) * 2;
  const rndPerimeter = perimeter.toFixed(2);
  return +rndPerimeter;
}
rectanglePerimeter(2, 3);
rectanglePerimeter(3, 4);
rectanglePerimeter(4, 5);

/**
 * Calculates the area of a rectangle rounded to 2 decimal places
 * @param {number} width - the width of the rectangle
 * @param {number} height - the height of the rectangle
 * @returns {number} - the area of the rectangle rounded to 2 decimal places
 *
 */
function rectangleArea(width, height) {
  // write your code here & return
  const area = width * height;
  const rndArea = area.toFixed(2);
  return +rndArea;
}
rectangleArea(2, 3);
rectangleArea(2.5, 3);
rectangleArea(3, 4);
rectangleArea(4.2, 5);

/**
 * Calculates the circumference of a circle with a known radius
 * rounded to 2 decimal places
 * @param {number} radius - the radius of the circle
 * @returns {number} - the circumference of the circle rounded to 2 decimal places
 *
 * The math equation is c = 2 * pi * radius
 *
 * Hint: use toFixed()
 */
function circleCircumference(radius) {
  // write your code here & return
  const circ = 2 * Math.PI * radius;
  const rndCirc = circ.toFixed(2);
  return +rndCirc;
}
circleCircumference(2);
circleCircumference(3);
circleCircumference(4);

/**
 * Calculates the area of a circle with a known radius
 * rounded to 2 decimal places
 * @param {number} radius - the radius of the circle
 * @returns {number} - the area of the circle rounded to 2 decimal places
 */
function circleArea(radius) {
  // write your code here & return
  const circArea = (radius * radius) * Math.PI;
  const roundArea = circArea.toFixed(2);
  return +roundArea;
}
circleArea(2);
circleArea(3);
circleArea(4);

/**
 * Calculates the area of a triangle with three sides
 * rounded to 2 decimal places
 *
 * @param {number} base - the base of the triangle
 * @param {number} height - the height of the triangle
 * @returns {number} - the area of the triangle rounded to 2 decimal places
 */
function triangleArea(base, height) {
  // write your code here & return
  const triArea = (base * height) / 2;
  const rndTri = triArea.toFixed(2);
  return +rndTri;
}
triangleArea(2, 3);
triangleArea(3, 4);
triangleArea(4, 5);
triangleArea(4.5, 5.5);

/**
 * Calculates the hypotenuse of a right triangle with two sides,
 * rounded to 2 decimal places
 * @param {number} sideA - the length of side A
 * @param {number} sideB - the length of side B
 * @returns {number} - the hypotenuse of the triangle rounded to 2 decimal places
 */
function pythagorean(sideA, sideB) {
  // write your code here & return
  const squaredC = (sideA * sideA) + (sideB * sideB);
  const sideC = Math.sqrt(squaredC);
  const rndC = sideC.toFixed(2);
  return +rndC;
}
pythagorean(3, 4);
pythagorean(4, 7);
pythagorean(4.5, 7.5);

module.exports = {
  rectanglePerimeter,
  rectangleArea,
  circleCircumference,
  circleArea,
  triangleArea,
  pythagorean,
};
