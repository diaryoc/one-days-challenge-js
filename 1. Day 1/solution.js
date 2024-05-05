function PairNumberForGivenSum(arrayOfNumber, target) {
    var output = []
    for (let i = 0; i < arrayOfNumber.length; i++) {
        for (let j = i + 1; j < arrayOfNumber.length; j++) {
            if (i !== j) {
                if (arrayOfNumber[i]+arrayOfNumber[j] === target) {
                    output.push([arrayOfNumber[i],arrayOfNumber[j]]);
                }
            }
        }
    }
    if (output.length !== 0) {
        var stringOutput = ""
        for (let i = 0; i < output.length; i++) {
            if (output.length-1 !== i) {
                stringOutput += "Pair found " + output[i] + " or "
            }else {
                stringOutput += "Pair found " + output[i]
            }
        }
        return stringOutput
    };
    return "Pair not found"
}
console.log(PairNumberForGivenSum([5, 2, 6, 8, 1, 9],12))