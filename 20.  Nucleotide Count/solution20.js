function countNucleotides(strand) {
    let nucleotides = {'A' : 0, 'C' : 0, 'G' : 0, 'T' : 0,
    };

    [...strand].forEach(n => {
        if(nucleotides.hasOwnProperty(n)) nucleotides[n]++;
        else throw new Error('Invalid nucleotide in strand');
    });

    return `${nucleotides['A']} ${nucleotides['C']} ${nucleotides['G']} ${nucleotides['T']}`;
}

console.log(countNucleotides("GATTACA"));
console.log(countNucleotides("INVALID"));