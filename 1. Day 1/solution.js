function PairNumberForGivenSum(arrayOfNumber, target) {
    // set up output in array
    var output = []

    // first loop for get how many iteration needed base on length of array input
    for (let i = 0; i < arrayOfNumber.length; i++) {
        // second loop for to get a pair that matches the desired sum result
        for (let j = i + 1; j < arrayOfNumber.length; j++) {
            if (i !== j) {
                if (arrayOfNumber[i]+arrayOfNumber[j] === target) {
                    output.push([arrayOfNumber[i],arrayOfNumber[j]]);
                }
            }
        }
    }

    // for print the result that we get
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
// testing function
console.log(PairNumberForGivenSum([2,3,1,5,6,7,4,9,8],10))