function lcs(string1,string2,finalValue) {
    let car1
    let car2
    if (string1.length-1 > 0 && string2.length > 0){
        car1 = string1.charAt(string1.length-1);
        car2 = string2.charAt(string2.length-1);
    }
    if (car1 === car2 && (string1.length > 0 && string2.length > 0)) {
        string1 = string1.slice(0,string1.length-1)
        string2 = string2.slice(0,string2.length-1)
        finalValue = 1 + lcs(string1,string2,finalValue)
        return finalValue
    } else if (car1 !== car2 && (string1.length > 0 && string2.length > 0)) {
        finalValue = Math.max(lcs(string1,string2.slice(0,string2.length-1),finalValue),lcs(string1.slice(0,string1.length-1),string2,finalValue))
        return finalValue
    } else{
        return finalValue
    }
}

console.log("The length of the LCS is "+lcs("XMJYAUZATYHU","MZJAWXUTUJKL",0)+" LCS")