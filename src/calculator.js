// calculator.js
// Node.js CLI Calculator
// Supports: Addition, Subtraction, Multiplication, Division

const [,, operation, a, b] = process.argv;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return x / y;
}

// Export functions for unit testing
module.exports = {
    add,
    subtract,
    multiply,
    divide
};

// CLI logic
if (require.main === module) {
    const [,, operation, a, b] = process.argv;
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
        console.error('Please provide two valid numbers.');
        process.exit(1);
    }

    let result;
    switch (operation) {
        case 'add':
            result = add(numA, numB);
            break;
        case 'subtract':
            result = subtract(numA, numB);
            break;
        case 'multiply':
            result = multiply(numA, numB);
            break;
        case 'divide':
            try {
                result = divide(numA, numB);
            } catch (e) {
                console.error(e.message);
                process.exit(1);
            }
            break;
        default:
            console.error('Supported operations: add, subtract, multiply, divide');
            process.exit(1);
    }

    console.log(`Result: ${result}`);
}
