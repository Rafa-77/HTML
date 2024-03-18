// No modificar el tipo de dato

const user = {
    id: 1,
};

user.name = "Rafael"
user.id = 2;
user.guardar = function(){
    console.log("Guardando", user.name)
};
user.guardar();

// delete user.name;
// delete user.guardar;

console.log("User", user);

// PAra que no se pueda modificar el objeto en su totalidad

const user1 = Object.freeze({ id: 1})
user1.name ="Rafa"; // no modifica
user1.id = 2; // no modifica
console.log("User1", user1);

// Para poder modificar valores del objeto pero no propiedades

const user2 = Object.seal({ id: 1})
user2.name ="Rafa"; // no modifica
user2.id = 200; // si modifica
console.log("User2", user2);

