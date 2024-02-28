alert("Bienvenido! ¿Estas preparado para comenzar?");

let nombre = prompt("Ingresa tu nombre");

let anioDeNacimiento = prompt("Ingresá tu año de nacimiento") 

let rataInicial = 1960
let bueyInicial = 1961


while (anioDeNacimiento != "ESC") {
    switch (anioDeNacimiento) {
        case "RATA":
            function signoRata(rataInicial){
            for (let i = 0; i<=12; i++) {
                rataInicial += i;
            }
            return rataInicial;
            alert("Segun el calendario chino sos RATA");
            }
        // case "BUEY":
        //     for (let i = 0; i<=12; i++) {
        //         bueyInicialInicial += i;
        //     } return bueyInicialInicial;
        //     alert("Segun el calendario chino sos BUEY")

        
        default:
            alert("Sos muy viejo :) ");
        break;    
    } 
}

let anioDeNacimiento2 = prompt("Ingresa nuevamente tu año de nacimiento");





