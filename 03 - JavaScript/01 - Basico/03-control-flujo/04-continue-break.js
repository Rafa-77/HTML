//break: salir del loop
//continue: saltar 1 iteracion

let i = 0;
while (i < 6){
    i += 1;
    if (i == 2){
        continue;
    }
    if (i == 4){
        break;
    }
    console.log(i);
}