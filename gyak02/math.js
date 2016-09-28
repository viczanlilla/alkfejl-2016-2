function add(a,b){
    return a + b;
}
function multiply(a,b){
    return a * b;
}
//kiakarom  exportálni másik fájlba h ott használhassuk >> main.js
module.exports = {
    //add: add, helyette:
    add,
    multiply,
};