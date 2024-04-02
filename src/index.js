function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both parameters must be numbers');
    }
    return a + b;
}

function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both parameters must be numbers');
    }
    return a - b;
}

function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both parameters must be numbers');
    }
    return a * b;
}

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both parameters must be numbers');
    }
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

function gcd(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Input must be a non-empty array');
    }
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== 'number' || !Number.isInteger(numbers[i])) {
            throw new Error('All elements of the array must be integers');
        }
    }

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = findGCD(result, numbers[i]);
        let a = Math.abs(result);
        let b = Math.abs(numbers[i]);
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

        // The GCD is the last non-zero remainder
        result = a;
        if (result === 1) return 1;
    }
    return result;
}

function findGCD(a, b) {
    // Apply Euclid's algorithm
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    // The GCD is the last non-zero remainder
    return a;
}

function decimalToPercent(decimal) {
    if (typeof decimal !== 'number') {
        throw new Error('Input must be a number');
    }
    return multiply(decimal,100);
}

function calculatePercentage(part, whole) {
    if (typeof part !== 'number' || typeof whole !== 'number') {
        throw new Error('Both parameters must be numbers');
    }
    return multiply( divide(part, whole), 100);
}

function roundUp(number) {
    if (typeof number !== 'number') {
        throw new Error('Input must be a number');
    }
    return Math.ceil(number);
}

function BMI(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number') {
        throw new Error('Both weight and height must be numbers');
    }
    let heightInMeters = height / 100;
    return divide(weight, multiply(heightInMeters, heightInMeters));
}

function rounded_BMI(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number') {
        throw new Error('Both weight and height must be numbers');
    }
    let heightInMeters = height / 100;
    let bmi = divide(weight, multiply(heightInMeters, heightInMeters));
    return roundUp(bmi);
}
//Converter
function convertLength(value, fromUnit, toUnit) {
    const units = {
        'cm': 1,
        'inch': 2.54,
        'm': 100,
        'ft': 30.48,
        'km': 100000,
        'mile': 160934.4,
        'yard': 91.44
    };

    if (typeof value !== 'number') {
        throw new Error('Input must be a number');
    }

    if (!(fromUnit in units) || !(toUnit in units)) {
        throw new Error('Invalid units');
    }

    return multiply(value, divide(units[fromUnit], units[toUnit]));
}
function cmToInch(measurement) {
    if (typeof measurement !== 'number') {
        throw new Error('Input must be a number');
    }
    return divide(measurement,2.54);
}

function inchToCm(measurement) {
    if (typeof measurement !== 'number') {
        throw new Error('Input must be a number');
    }
    return multiply(measurement,2.54);
}

function mToFeet(measurement) {
    if (typeof measurement !== 'number') {
        throw new Error('Input must be a number');
    }
    return multiply(measurement,3.28084);
}

function feetToM(measurement) {
    if (typeof measurement !== 'number') {
        throw new Error('Input must be a number');
    }
    return divide(measurement,3.28084);
}

function kmToMile(measurement) {
    if (typeof measurement !== 'number') {
        throw new Error('Input must be a number');
    }
    return divide(measurement,1.60934);
}

function mileToKm(measurement) {
    if (typeof measurement !== 'number') {
        throw new Error('Input must be a number');
    }
    return multiply(measurement, 1.60934);
}

function mToYard(measurement) {
    if (typeof measurement !== 'number') {
        throw new Error('Input must be a number');
    }
    return multiply(measurement, 1.09361);
}

function yardToM(measurement) {
    if (typeof measurement !== 'number') {
        throw new Error('Input must be a number');
    }
    return divide(measurement, 1.09361);
}
function celsiusToFahrenheit(cel){
    if (typeof cel !== 'number') {
        throw new Error('Input must be a number');
    }
    
    return add(multiply(cel, 1.8), 32)
}
function fahrenheitToCelsius(f){
    if (typeof f !== 'number') {
        throw new Error('Input must be a number');
    }
    
    return divide(subtract(f, 32), 1.79999999)
}
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    gcd,
    calculatePercentage,
    decimalToPercent,
    roundUp,
    BMI,
    rounded_BMI,
    convertLength,
    cmToInch,
    inchToCm,
    mToFeet,
    mToYard,
    mileToKm,
    feetToM,
    yardToM,
    kmToMile,
    celsiusToFahrenheit,
    fahrenheitToCelsius
};