function lcs(string1,string2,finalValue) {
    let car1
    let car2

    // get last character in the string
    if (string1.length-1 > 0 && string2.length > 0){
        car1 = string1.charAt(string1.length-1);
        car2 = string2.charAt(string2.length-1);
    }

    // first check for the last character in each string is same or not
    if (car1 === car2 && (string1.length > 0 && string2.length > 0)) {
        string1 = string1.slice(0,string1.length-1)
        string2 = string2.slice(0,string2.length-1)

        // if same add 1 to finalValue variable and start recursive function. then return the finalValue
        finalValue = 1 + lcs(string1,string2,finalValue)
        return finalValue
        // first check for the last character in each string is same or not
    }
    // second check for the last character in each string is same or not
    else if (car1 !== car2 && (string1.length > 0 && string2.length > 0)) {

        /* if not same calculate the max value of finalValue in this condition:
            1. we remove last character in string2, and we do start recursive function.
            2. we remove last character in string1, and we do start recursive function.
            3. check the max value from finalValue between two-step above
         */
        finalValue = Math.max(lcs(string1,string2.slice(0,string2.length-1),finalValue),lcs(string1.slice(0,string1.length-1),string2,finalValue))
        return finalValue
    } else{
        return finalValue
    }
}

console.log("The length of the LCS is "+lcs("XMJYAUZATYHU","MZJAWXUTUJKL",0)+" LCS")