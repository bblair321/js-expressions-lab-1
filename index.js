//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
const day1F = 32;
const day1C = 25;

const day2F = 70;
const day2C = 18;

const day3F = 80;
const day3C = 15;

const day4F = 72;
const day4C = 28;

const day5F = 68;
const day5C = 20;

const day6F = 75;
const day6C = 23;

const day7F = 82;
const day7C = 30;

const day8F = 65;
const day8C = 22;

const day9F = 77;
const day9C = 26;

const day10F = 78;
const day10C = 24;

const day11F = 73;
const day11C = 21;

const day12F = 79;
const day12C = 27;

const day13F = 71;
const day13C = 19;

const day14F = 74;
const day14C = 17;

const day15F = 76;
const day15C = 29;

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius
const tot_temperature_in_celsius =
  (day1F - 32) * 5/9 +
  (day2F - 32) * 5/9 +
  (day3F - 32) * 5/9 +
  (day4F - 32) * 5/9 +
  (day5F - 32) * 5/9 +
  (day6F - 32) * 5/9 +
  (day7F - 32) * 5/9 +
  (day8F - 32) * 5/9 +
  (day9F - 32) * 5/9 +
  (day10F - 32) * 5/9 +
  (day11F - 32) * 5/9 +
  (day12F - 32) * 5/9 +
  (day13F - 32) * 5/9 +
  (day14F - 32) * 5/9 +
  (day15F - 32) * 5/9;

const tot_temperature_in_fahrenheit =
  day1C * 9/5 + 32 +
  day2C * 9/5 + 32 +
  day3C * 9/5 + 32 +
  day4C * 9/5 + 32 +
  day5C * 9/5 + 32 +
  day6C * 9/5 + 32 +
  day7C * 9/5 + 32 +
  day8C * 9/5 + 32 +
  day9C * 9/5 + 32 +
  day10C * 9/5 + 32 +
  day11C * 9/5 + 32 +
  day12C * 9/5 + 32 +
  day13C * 9/5 + 32 +
  day14C * 9/5 + 32 +
  day15C * 9/5 + 32;

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius
const avg_temperature_in_celsius = tot_temperature_in_celsius / 15;
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 15;

//! Console.log the results for your own inspection if you'd like
console.log("Total C:", tot_temperature_in_celsius.toFixed(2));
console.log("Total F:", tot_temperature_in_fahrenheit.toFixed(2));
console.log("Average C:", avg_temperature_in_celsius.toFixed(2));
console.log("Average F:", avg_temperature_in_fahrenheit.toFixed(2));

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};
