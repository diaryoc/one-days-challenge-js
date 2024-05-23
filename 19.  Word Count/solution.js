//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const countWords = (text) => {
    let wordCount = {};
    //stole better regex to account for optional contractions
    //BASICALLY instead of splitting on the NOT words, we're matching the words
    const sanitizedText = text.toLowerCase().trim().match(/\w+('\w+)?/g);
    sanitizedText.forEach(word =>{
        if(word){
            wordCount[word] ? wordCount[word]++ : wordCount[word] = 1;
        }
    });
    return wordCount;
};

console.log(countWords("123")); //1
console.log(countWords("agent")); //1
console.log(countWords("cried")); //1
console.log(countWords("fled")); //1
console.log(countWords("i")); //1
console.log(countWords("password ")); //2
console.log(countWords("so")); //1
console.log(countWords("special")); //1
console.log(countWords("that's ")); //1
console.log(countWords("the")); //2