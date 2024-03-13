// bit: 0 1
// Byte: 8 bits
// Byte: 00000000 -> 0 
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6
// Decimal: 1,2,3,4,5,6,7,8,9,0
// Binario: 0, 1

// Operador OR de Bitwise, no selecciona uno u otro, sino crea un nuevo Byte dependiendo de los digitos
console.log(1 | 3); // 00000011
console.log(1 | 4); // 00000101

// Operador AND de Bitwise, devuelve los Bites que coinciden en ambas cadenas
console.log(1 & 3); // 00000001
console.log(1 & 4); // 00000000
