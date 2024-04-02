const {
    add,
    subtract,
    multiply,
    divide,
    gcd,
    decimalToPercent,
    calculatePercentage,
    roundUp,
    BMI,
    rounded_BMI,
    cmToInch,
    inchToCm,
    mToFeet,
    feetToM,
    kmToMile,
    mileToKm,
    mToYard,
    yardToM,
    celsiusToFahrenheit,
    fahrenheitToCelsius
} = require('../src/index'); // Replace 'your_functions_file.js' with the actual file name

// Basic arithmetic tests
console.log('Addition:', add(2, 3) === 5 ? 'Pass' : 'Fail');
console.log('Subtraction:', subtract(5, 3) === 2 ? 'Pass' : 'Fail');
console.log('Multiplication:', multiply(2, 3) === 6 ? 'Pass' : 'Fail');
console.log('Division:', divide(6, 3) === 2 ? 'Pass' : 'Fail');
console.log('Division by zero:', (() => {
    try {
        divide(6, 0);
    } catch (error) {
        return error.message === 'Division by zero is not allowed' ? 'Pass' : 'Fail';
    }
})());

// GCD test
console.log('GCD:', gcd([12, 18, 24]) === 6 ? 'Pass' : 'Fail');

// Percentage functions tests
console.log('Decimal to percent:', decimalToPercent(0.5) === 50 ? 'Pass' : 'Fail');
console.log('Calculate percentage:', calculatePercentage(20, 100) === 20 ? 'Pass' : 'Fail');

// Rounding functions tests
console.log('Round up:', roundUp(3.14) === 4 ? 'Pass' : 'Fail');

// BMI functions tests
console.log('BMI:', BMI(70, 175).toFixed(2) === '22.86' ? 'Pass' : 'Fail');
console.log('Rounded BMI:', rounded_BMI(70, 175) === 23 ? 'Pass' : 'Fail');

// Length converter functions tests
console.log('Centimeters to inches:', cmToInch(10).toFixed(3) === '3.937' ? 'Pass' : 'Fail');
console.log('Inches to centimeters:', inchToCm(10).toFixed(1) === '25.4' ? 'Pass' : 'Fail');
console.log('Meters to feet:', mToFeet(5).toFixed(3) === '16.404' ? 'Pass' : 'Fail');
console.log('Feet to meters:', feetToM(10).toFixed(3) === '3.048' ? 'Pass' : 'Fail');
console.log('Kilometers to miles:', kmToMile(10).toFixed(3) === '6.214' ? 'Pass' : 'Fail');
console.log('Miles to kilometers:', mileToKm(10).toFixed(3) === '16.093' ? 'Pass' : 'Fail');
console.log('Meters to yards:', mToYard(5).toFixed(3) === '5.468' ? 'Pass' : 'Fail');
console.log('Yards to meters:', yardToM(10).toFixed(3) === '9.144' ? 'Pass' : 'Fail');
// Celsius to Fahrenheit
console.log('Celsius to Fahrenheit:', celsiusToFahrenheit(0).toFixed(2) === '32.00' ? 'Pass' : 'Fail');
console.log('Celsius to Fahrenheit:', celsiusToFahrenheit(100).toFixed(2) === '212.00' ? 'Pass' : 'Fail');

// Fahrenheit to Celsius
console.log('Fahrenheit to Celsius:', fahrenheitToCelsius(32).toFixed(2) === '0.00' ? 'Pass' : 'Fail');
console.log('Fahrenheit to Celsius:', fahrenheitToCelsius(212).toFixed(2) === '100.00' ? 'Pass' : 'Fail');
