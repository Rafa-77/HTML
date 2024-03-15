// Indice validar que no sea menor a 0 y que el elemento exista en el array

function getbyIdx(arr, idx){
    if(idx < 0 || arr.length <= idx){
        return false;
    } else return arr[idx];
}

let resultado = getbyIdx([1,2], 2);
console.log(resultado)