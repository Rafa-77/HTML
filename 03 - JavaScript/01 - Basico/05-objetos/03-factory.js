// let user1 = {
//     id: 1,
//     email: "rafa@rafa.com",
//     name: "Rafa",
//     activo: true,
//     recuperarClave: function recuperarClave(){
//         console.log("recuperando clave...");
//     }, 
// };



function crearUsuario(name, email){
    return  {
        email,
        name,
        activo: true,
        recuperarClave: function recuperarClave(){
            console.log("recuperando clave...");
        }, 
    };
}

let user1 = crearUsuario("Rafa", "Rafa@rafa.com");
let user2 = crearUsuario("ale", "ale@rafa.com");

console.log(user1, user2);