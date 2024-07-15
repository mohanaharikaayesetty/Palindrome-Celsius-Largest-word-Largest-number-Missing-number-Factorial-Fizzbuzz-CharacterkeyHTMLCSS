function characterkey(name){
    let obj={};
    for(let i=0;i<name.length;i++){
        let char=name[i];
        if(obj[char]){
            obj[char]++;}
            else{
                obj[char]=1;
            }
        }
        return obj;
    }
    let name=prompt("enter a name");
    console.log(characterkey(name));
