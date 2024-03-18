function Punto(x, y){
    this.x =x;
    this.y = y;
    this.dibujar = function(){ console.log("dibujando..")};
}


// Personalmente no utilizar esto

const Point = new Function("x", "y", `
this.x =x;
this.y = y;
this.dibujar = function(){ console.log("dibujando..")};
`);

const p = new Point(1, 2);
console.log(p);

// Call sirve para extender el objeto de una funcion

let punto = {z: 7};
Punto.call(punto, 1, 2);
Punto.apply(punto, [1, 2]); // Devuelve lo mismo que call
console.log(punto);