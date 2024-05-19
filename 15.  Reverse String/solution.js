const reverseString = (word) => {
    if(word.length>1){
        let output = ""
        for(let i=word.length-1;i>=0;i--){
            output += word[i]
        }
        return output
    }else{
        return ""
    }
};

console.log(reverseString("i love you"))