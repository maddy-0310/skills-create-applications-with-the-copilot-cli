// calculator.test.js
// Unit tests for calculator functions
// Uses Jest

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Basic Operations', () => {
  test('Addition: 7 + 3 = 10', () => {
    expect(add(7, 3)).toBe(10);
  });

  test('Subtraction: 7 - 3 = 4', () => {
    expect(subtract(7, 3)).toBe(4);
  });

  test('Multiplication: 7 * 3 = 21', () => {
    expect(multiply(7, 3)).toBe(21);
  });

  test('Division: 7 / 3 ≈ 2.33', () => {
    expect(divide(7, 3)).toBeCloseTo(2.333333, 5);
  });
});

describe('Calculator Edge Cases', () => {
  test('Addition with negative numbers', () => {
    expect(add(-5, 8)).toBe(3);
  });

  test('Subtraction resulting in negative', () => {
    expect(subtract(3, 7)).toBe(-4);
  });

  test('Multiplication with zero', () => {
    expect(multiply(0, 5)).toBe(0);
  });

  test('Division by zero throws error', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero is not allowed.');
  });

  test('Division with negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5);
  });
});

describe('Calculator Extended Operations', () => {
  test('Modulo: 10 % 3 = 1', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('Modulo with negative numbers', () => {
    expect(modulo(-10, 3)).toBe(-1);
    expect(modulo(10, -3)).toBe(1);
  });

  test('Power: 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('Power: 5 ^ 0 = 1', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('Power: negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25, 5);
  });

  test('Square root: sqrt(9) = 3', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('Square root: sqrt(0) = 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('Square root: sqrt(2) ≈ 1.414', () => {
    expect(squareRoot(2)).toBeCloseTo(1.414213, 5);
  });

  test('Square root of negative number throws error', () => {
    expect(() => squareRoot(-4)).toThrow('Square root of negative number is not allowed.');
  });
});
