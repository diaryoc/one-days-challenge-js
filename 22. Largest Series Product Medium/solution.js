//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const largestProduct = (input, span) => {
    if (span > input.length) throw new Error('Span must be smaller than string length');
    if (/[a-b]/gi.test(input)) throw new Error('Digits input must only contain digits');
    if (span <= 0) throw new Error('Span must be greater than zero');
    let lsp = [];
    const sequence = input.split('');
    const series = input.length - span + 1;
    for (let i = 0; i < series; i++) {
        let product = 1;
        for (let j = i; j < span + i; j++) {
            product *=  Number(sequence[j]);
        }
        lsp.push(product);
    }
    return Math.max(...lsp);
};