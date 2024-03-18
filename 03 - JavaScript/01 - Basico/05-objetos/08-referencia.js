// son diferentes puesto que su valor en la memoria ram no se modifica
// al ser especificos se asignan a un lugar en especifico
// son datos primitivos

let a = 1;
let b = a;


b+=1;

console.log(a, b);

// Son iguales porque su lugar en la memoria ram se modifica
// Al ser objetos no se les asigna un lugar en la ram sino una direccion, y se esta modificando 
// el lugar en la direccion
// son datos de referencia

let c = {};
let d = c;


c.prop = 1

console.log(c, d);

// Se le asigna un lugar al parametro n
// es un dato primitivo

let e = 1;

function suma(n){
    n+=1;
}
suma(e);
console.log(e);

// es un dato de referencia

let f = {prop: 1};

function suma(n){
    n.prop++;
}
suma(f);
console.log(f);