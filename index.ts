import inquirer from "inquirer";

async function main() {
    const { operation, num1, num2 } = await inquirer.prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'Choose an operation:',
            choices: ['Add', 'Subtract', 'Multiply', 'Divide'],
        },
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (input) => !isNaN(parseFloat(input)) ? true : 'Please enter a valid number',
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (input) => !isNaN(parseFloat(input)) ? true : 'Please enter a valid number',
        },
    ]);

    const result = calculate(operation, parseFloat(num1), parseFloat(num2));
    console.log('Result:', result);
}

function calculate(operation: string, num1: number, num2: number): number {
    switch (operation) {
        case 'Add':
            return num1 + num2;
        case 'Subtract':
            return num1 - num2;
        case 'Multiply':
            return num1 * num2;
        case 'Divide':
            if (num2 === 0) {
                throw new Error('Cannot divide by zero');
            }
            return num1 / num2;
        default:
            throw new Error('Invalid operation');
    }
}

main().catch((error) => console.error(error));
