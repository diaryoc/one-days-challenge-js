export class Matrix {
    #rowLength;
    #columnLength;
    #numbers = [];

    constructor(matrixString) {
        let rowStrings = matrixString.split('\n');

        this.#columnLength = rowStrings.length;

        for (let rowString of rowStrings) {
            let rowNumbers = rowString.split(' ').map(s => Number(s));

            if (!this.#rowLength) this.#rowLength = rowNumbers.length;

            this.#numbers.push(...rowNumbers);
        }
    }

    // *row and column here are zero-based.
    #numberAt(row, column) {
        return row * this.#rowLength + column;
    }

    get rows() {
        let rows = [];

        for (let r = 0; r < this.#columnLength; r++) {
            let row = [];

            for (let c = 0; c < this.#rowLength; c++) {
                row.push(this.#numbers[this.#numberAt(r, c)]);
            }

            rows.push(row);
        }

        return rows;
    }

    get columns() {
        let columns = [];

        for (let c = 0; c < this.#rowLength; c++) {
            let column = [];

            for (let r = 0; r < this.#columnLength; r++) {
                column.push(this.#numbers[this.#numberAt(r, c)]);
            }

            columns.push(column);
        }

        return columns;
    }
}