// Nombre: ancho * alto
// 8K 7680 * 4320
// 4K 3840 * 2160
// WQHD 2560 * 1440
// FHD 1920 * 1080
// HD 1280 * 720 

function nombreResolucion(ancho, alto){
    let HD_w = 1280
    let HD_h = 720
    let FHD_w = 1920
    let FHD_h = 1080
    let WQHD_w = 1920
    let WQHD_h = 1440
    let K4_w = 3840
    let K4_h = 2160
    let K8_w = 7680
    let K8_h = 4320

    if (ancho >= K8_w && alto >= K8_h){
        return "8K";
    } else if (ancho >= K4_w && alto >= K4_h){
        return "4K";
    } else if (ancho >= WQHD_w && alto >= WQHD_h){
        return "WQHD";
    } else if (ancho >= FHD_w && alto >= FHD_h){
        return "FHD";
    } else if (ancho >= HD_w && alto >= HD_h){
        return "HD";
    } else {
        return false;
    }
}

let nombre = nombreResolucion(1366, 1000);
console.log(nombre)