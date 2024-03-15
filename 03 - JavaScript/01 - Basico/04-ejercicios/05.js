// Devuelve el numero menor y mayor de un array

let array = [2,5,7,15,-5,-100,55];

function getMenorMayor(arr){
    let mayor = 0;
    let menor = 0;
    for (let n of arr){
        mayor = n > mayor ? n : mayor; 
        menor = n < menor ? n : menor; 
    }
    return [mayor, menor];
}

let numeros = getMenorMayor(array);
console.log(numeros);