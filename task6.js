function factorial(number){
    if(number<=0){
    return 1;
    }
return number*factorial(number-1);
}
let number=prompt("enter number");
console.log(factorial(number));