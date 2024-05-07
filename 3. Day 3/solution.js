function fizzBuzz() {
    let value = []
    for (let i = 1; i <=100 ; i++) {
        if (i%5 === 0 && i%3 === 0) {
            value.push("FizzBuzz")
        } else if (i%5 === 0) {
            value.push("Buzz")
        } else if (i%3 === 0) {
            value.push("Fizz")
        } else {
            value.push(i)
        }
    }
    return value
}

console.log(fizzBuzz())