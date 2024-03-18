// Funciones constructoras inician con mayuscula

//{ id: 1, recuperarClave: function(){}}

function Usuario(){
    this.id = 1;
    this.recuperarClave = function(){ // es un metodo, no funcion
        console.log("Recuperando Clave...")
    }
}

// new:
//  - crea un objeto literal
//  - vincula el prototipo de la funcion con el objeto creado
//  - al objeto vacio se le asigna a this
//  - si la funcion no retorna nada, retorna THIS
let usuario = new Usuario();

console.log(usuario);