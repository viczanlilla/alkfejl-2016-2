"use strict";
//console.log('hello');
//ctrl + ö : terminál ablak
//ctrl - shift - p / b / u
//ctrl + shift p : futtat
//task.json:
//"command": "node",
//    "args": ["${file}"],
//ctrl + shift b : futtat
//var, let, const
const szamok = [2, 4, -6, 2, -4, -5, 5];

function kivalogatas(arr, tulFn){
    const result = [];
    //tombok címszerint tároloódnak ezért legyen konstans a címzés
    for (let i = 0; i < arr.length; i++) {
    
        if(tulFn(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

function negativE(p){
    return p<0;
}
//kialakulas: legyeg: fgv parameterkent is atadhato
console.log(kivalogatas(szamok, negativE));
console.log( kivalogatas(szamok, function (p){
    return p < 0;
})) ;
console.log( szamok.filter(negativE) )
console.log( szamok.filter(function (p) {
    return p < 0;
}))
console.log( szamok.filter(p => p< 0) );

