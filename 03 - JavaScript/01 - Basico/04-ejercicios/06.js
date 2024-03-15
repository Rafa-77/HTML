// devuelve cantidad de numeros positivos de un array

let array = [2,5,7,15,-5,-100,55];

function cuantosPositivos(arr){
    let cuenta = 0;
    for (let n of array){
        if (n > 0){
            cuenta += 1;
        } 
    } return cuenta;
}

let resultado = cuantosPositivos(array);
console.log(resultado);