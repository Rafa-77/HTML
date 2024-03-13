// FOR

for (let i = 0; i < 10; i+=1) {
    if (i % 2 == 0){
        console.log("Numero par", i);
    }
}

// FOR OF, sirve para iterar sobre un listado

let animales = ["gato", "perro", "raton"];

for (let animal of animales){
    console.log(animal)
}

// FOR IN, sirve para iterar propiedades de un objeto

let user = {
    id: 1,
    name: "rafa",
    age: 25,
};

for (let propiedad in user) {
    console.log(propiedad, user[propiedad])
}