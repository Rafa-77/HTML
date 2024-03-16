// array de longitud n, con elementos de 1 hasta n

let longitud = 7;

function crearArray(n){
    let cuenta = 1
    let arr = []
    while (cuenta <= n){
        arr[cuenta -1] = cuenta;
        cuenta += 1;
    }
    return arr
}

let resultado = crearArray(longitud)
console.log(resultado);