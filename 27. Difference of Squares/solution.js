//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
    constructor(num = 1) {
        if (typeof num !== 'number') throw new Error('Natural value required.');
        let square = 0;
        let sum = 0;
        for (let i = 0; i <= num; i++) {
            square += i*i;
            sum += i;
        }
        sum *= sum;
        this._squareSum = square;
        this._sumSquare = sum;
        this._diff = sum - square;
    }

    get sumOfSquares() {
        return this._squareSum
    }

    get squareOfSum() {
        return this._sumSquare
    }

    get difference() {
        return this._diff
    }
}