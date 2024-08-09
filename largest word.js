function longestWord(str) {
 
    let words = str.split(" ");
   

    let longestWord = "";
    let maxLength = 0;
   

    for (let word of words) {
     
        if (word.length > maxLength) {
            longestWord = word;
            maxLength = word.length;
        }
    }
   
   
    return longestWord;
}


console.log(longestWord("chandana sree"));
console.log(longestWord("ayesetty vara lakshmi"));
