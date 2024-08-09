function palindrome(enter){
    let reversed = enter.split('').reverse().join('');
    if(enter===reversed){
        return "palindrome";
    } 
    else {
         return "not  a palindrome";
    }
}
let enter=prompt("enter a name");
console.log(palindrome(enter));
