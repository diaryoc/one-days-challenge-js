const truncate = (input) => {
    const codePoints = [...input];

    // Truncate the array to the first 5 code points
    const truncatedCodePoints = codePoints.slice(0, 5);

    // Convert the array of code points back to a string
    return truncatedCodePoints.join('');
};