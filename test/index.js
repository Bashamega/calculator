const { expect } = require('chai');
const calc = require('../src/index');

describe('Math Operations', () => {
    it('should add two numbers', () => {
        expect(calc.add(2, 3)).to.equal(5);
    });

    it('should subtract two numbers', () => {
        expect(calc.subtract(5, 3)).to.equal(2);
    });

    it('should multiply two numbers', () => {
        expect(calc.multiply(2, 3)).to.equal(6);
    });

    it('should divide two numbers', () => {
        expect(calc.divide(6, 3)).to.equal(2);
    });

    it('should throw error on division by zero', () => {
        expect(() => calc.divide(5, 0)).to.throw('Division by zero is not allowed');
    });

    it('should find the greatest common divisor of numbers', () => {
        expect(calc.gcd([12, 8, 16])).to.equal(4);
    });
});

describe('Percentage Operations', () => {
    it('should calculate percentage', () => {
        expect(calc.calculatePercentage(20, 100)).to.equal(20);
    });

    it('should convert decimal to percent', () => {
        expect(calc.decimalToPercent(0.5)).to.equal(50);
    });
});

describe('Rounding Operations', () => {
    it('should round up a number', () => {
        expect(calc.roundUp(5.3)).to.equal(6);
    });
});

describe('BMI Operations', () => {
    it('should calculate BMI', () => {
        expect(calc.BMI(70, 175)).to.be.closeTo(22.86, 0.01);
    });

    it('should round up BMI', () => {
        expect(calc.rounded_BMI(70, 175)).to.equal(23);
    });
});