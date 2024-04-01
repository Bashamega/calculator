# Calculator

[![npm version](https://badge.fury.io/js/calculator.svg)](https://badge.fury.io/js/calculator)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Welcome to Calculator! This lightweight and flexible npm package provides a suite of mathematical utilities to streamline your development workflow. Whether you need to perform basic arithmetic operations, calculate percentages, or find the Greatest Common Divisor (GCD), Calculator has got you covered. Let's crunch those numbers! 🚀

## Features

- **Basic Arithmetic**: Addition, subtraction, multiplication, and division.
- **Percentage Calculation**: Easily calculate percentages.
- **Greatest Common Divisor (GCD)**: Find the GCD of multiple numbers.
- **Body Mass Index (BMI) Calculation**: Compute BMI effortlessly.
- **Rounding Operations**: Round numbers up to the nearest integer.

## Installation

You can install Calculator via npm:

```bash
npm i @basha_coder/calculator
```
Or using cdn:
```
<script src="https://cdn.jsdelivr.net/gh/bashamega/calculator/src/index.js"></script>
```

## Usage

```javascript
const { add, subtract, multiply, divide, gcd, calculatePercentage, decimalToPercent, roundUp, BMI, rounded_BMI } = require('@basha_coder/calculator');

console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(3, 5)); // 15
console.log(divide(12, 4)); // 3
console.log(gcd([24, 36, 48])); // 12
console.log(calculatePercentage(20, 100)); // 20
console.log(decimalToPercent(0.75)); // 75
console.log(roundUp(5.3)); // 6
console.log(BMI(70, 175)); // 22.86
console.log(rounded_BMI(70, 175)); // 23
```

## Contributing

Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please feel free to open an issue or submit a pull request.

## License

Calculator is licensed under the [ISC License](https://opensource.org/licenses/ISC).
