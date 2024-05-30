export function square(num) {
    if (num < 1 || num > 64) {
        throw new Error('square must be between 1 and 64');
    }
    return 2n ** BigInt(num - 1);
}

export function total() {
    return 2n ** 64n - 1n;
}