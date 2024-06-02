//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
 const classify = (number) => {
    if (number <= 0) {
        throw new Error("Classification is only possible for natural numbers.");
    }

    const divisors = number => {
        let divisors = [];
        for (let index = 0; index < number; index++) {
            if (number % index == 0) {
                divisors.push(index);
            }
        }
        return divisors;
    };

    let sumOfDivisors = divisors(number).reduce((a, b) => { return a + b; }, 0);

    if (sumOfDivisors == number) {
        return 'perfect';
    }

    return sumOfDivisors > number ? 'abundant' : 'deficient';
};

console.log(classify(10))