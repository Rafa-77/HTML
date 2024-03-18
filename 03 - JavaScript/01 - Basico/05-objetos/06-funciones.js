function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U("Rafa");

console.log(user);

// Usar una funcion como argumento

function of(Fn, arg){
    return new Fn(arg);
}

let user1 = of(Usuario, "Ale");
console.log(user1);

// Retornar un funcion 

function returned(){
    return function(){
        console.log("hola");
    }
}

let saludo = returned()
saludo();