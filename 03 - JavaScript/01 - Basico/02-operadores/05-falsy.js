// short-circuit

// Valores que evaluan en Falso (Valores Falsy)
// - false
// - 0
// - ""
// - null
// - undefined
// - NaN

let nombre = "";
let username = nombre || "Anonimo";
console.log(username);

nombre = "rafa";
username = nombre || "Anonimo";
console.log(username);

function fn1(){
    console.log("Soy funcion 1");
    return true
}
function fn2(){
    console.log("Soy funcion 2");
    return true
}
function fn3(){
    console.log("Soy funcion 3");
    return false
}
let x = fn1() && fn2();
let y = fn3() && fn1(); // Para saber si una funcion anterior devuelve true 