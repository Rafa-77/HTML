// algoritmo que devuelve un array de objetos a partir de uno de pares

let pares = [
    [1, {id: 1, name: "Nicolas"}],
    [2, {id: 2, name: "Felipe"}],
    [3, {id: 3, name: "Rafa"}],
];

let array = [
    {
        id: 1,
        name: "Nicolas",
    },
    {
        id: 2,
        name: "Felipe",
    },
    {
        id: 3,
        name: "Rafa",
    }];

function toCollection(arr){
    let collection = [];
    for (idx in arr){
        collection[idx] = arr[idx][1];
        collection[idx].id = arr[idx][0];
    }
    return collection
}

let resultado = toCollection(pares);
console.log(resultado);