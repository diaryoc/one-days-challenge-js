//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const operator = ['plus', 'minus', 'multiplied', 'divided'];
const mathOp = ['+', '-', '*', '/'];

export const answer = (input) => {
    if (!/What is/gi.test(input)) throw new Error('Unknown operation');
    let filter = input.replace(/What is |\?$/gi, '').replace(/ by/gi, '').split(' ');
    if (filter.length === 1) return Number(filter);
    for (let el of filter) {
        for (let op of operator) {
            if (el === op) {
                filter.splice(filter.indexOf(el), 1, mathOp[operator.indexOf(op)]);
            }
        }
    }
    if (/What is/gi.test(filter)) throw new Error('Syntax error');
    if (/[0-9]/g.test(filter) && /[a-z]/gi.test(filter)) {
        throw new Error('Unknown operation');
    }
    while (filter.length > 1) {
        let result = operation(filter[0], filter[2], filter[1]);
        filter.splice(0, 3, result);
    }
    if (isNaN(filter[0])) throw new Error('Syntax error');
    return filter[0];
};

const operation = (num1, num2, oper) => {
    num1 = Number(num1);
    num2 = Number(num2);
    switch(oper) {
        case '+': return num1 += num2; break;
        case '-': return num1 -= num2; break;
        case '*': return num1 *= num2; break;
        case '/': return num1 /= num2; break;
        default: return NaN;
    }
}