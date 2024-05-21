//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function steps(n) {
    if(n <= 0) {
        throw Error('Only positive numbers are allowed')
    }
    let steps = 0
    while(n > 1) {
        n = (n %2)? n*3 +1: n/2
        steps++
    }
    return steps
}

console.log(steps(12))
console.log(steps(1))
console.log(steps(16))