
function MissingNumber(arr) {
   
    arr.sort((a, b) => a - b);
   
    let missing = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!== i) {
            missing = i;
            break;
        }
    }
   
    return missing;
}

console.log(MissingNumber([0,1,2,3,5,6,7,8,9,10]));
