//Objeto es una variable compuesta por varias variables
//tienen una propiedad y un valor
//Los objetos son una entidad, una persona, un objeto
//cuando vamos a creaar todas las propiedades en un solo lugar

//let nombre = Carpi;
//Let edad = 28;
//con let queda todo independiente, no lo podemos vincular

const usuario1 = { //puedo cambiar los valores por mas que use const porque estoy definiendo un objeto (por eso no uso let)
    nombre: "Carpi", //cosas que le aplicamos nueva al objeto se llama propiedad, el valor es "Carpi"
    edad: 27, // todas estas propiedades aplican al usuario 1
    nacionalidad: "Argentina",
    casado: true, //buleanos
    pasatiempos: {
        pasatiempo1: "fulbol", //puedo definir objetos dentro de objetos
        pasatiempo2: "ajedrez", //en el ultimo la coma la podes poner o no, es indistinto
    } //si queres poner una propiedad de objeto con dos personas poner camelcase
}

console.log(usuario1); //el navegador los muestra en orden alfabético
console.log(usuario1['pasatiempos']['pasatiempo1']); //acceder a las propiedades de un objeto para mostrarlos en consola
console.log(usuario1.pasatiempos.pasatiempo1);
usuario1.nombre = "Caro";

console.log(usuario1.nombre); //cuando redefino el nombre de una variable, no se me cambia dentro de las propiedades del objeto, pero si abro en la consola los ... se actualizó

//Constructores
//creamos un molde para crear objetos con esa estructora

//son parecido a una función

function Usuario (nombre, edad, nacionalidad, casado) { //cuando es una función constructora tiene que iniciar con mayúscula, se usa para construir objetos
    this.nombre = nombre; //this dentro de una función constructora, hacemos referencia al elemento que vamos a crear cuando se use, cuando lo use en el elemento que se va a aplicar (ejemplo usuario1), representa a la variable que definí arriba en la que estoy usando this en la 33 es igual a usuario1, en la 34 a usuario2, y asi
    this.edad = edad;
    this.nacionalidad = nacionalidad;
    this.casado = casado;
} 

const usuario2 = new Usuario("Martín", 41, "Argentina", false);
const usuario3 = new Usuario("Caro", 36, "Argentina", false);

const nombreIngresado1 = prompt("Ingrese nombre");
const edadIngresado = prompt("Ingrese edad");
const nacionalidadIngresada = prompt("Ingrese nacionalidad");
let casadoIngresado = prompt("Ingrese casado");

const usuario4 = new Usuario(nombreIngresado1, edadIngresado, nacionalidadIngresada, casadoIngresado);
//new se vincula al this, llama al this. es al nuevo objeto instaneado
console.log(usuario4); //con esto el usuario me agrega los datos, solo que no puedo generar varios usuarios porque no tengo donde guardar distintos por ahoraa

let edad;
do {
    edad = prompt("Ingrese edad");
} while (isNaN(edad)) //siempre y cuando el usuario ingrese un no numero va a seguir mostrando el cartel

function pedirNumero(mensaje) {
    let input;
    do {
        input = Number(prompt(mensaje));
        if (isNaN(input)) {
            alert("Por favor, ingresa un número válido.");
        }
    } while (isNaN(input));
    return input;
}

let numero1 = pedirNumero("Número 1")

//Metodos, tienen que estar creadas adentro de un objeto (en si son funciones)

let string = "Hola mundo!";
console.log(string); //string es un objeto para java

console.log(string,length); //lenght nos da la longitud de un string

// let nombreIngresado2;
// do {
//     let nombreIngresado2 = prompt("Ingrese su nombre");
// } while (nombreIngresado2.length < 3 || nombreIngresado2.length > 10);
// //parte condicional del ciclo for
// console.log(nombreIngresado2)

// console.log(string.substring(2, 5));

//string.trim le saca los espacios

// console.log(string.trim);

// operador IN, para saber si existe cierta propiedad en el objeto

console.log("nombre" in usuario1); //siempre responde true o false
console.log("apodo" in usuario1);

for (const propiedad in usuario1) { //este ciclo se reproduce tantas veces como propiedades exista en el objeto
    console.log(propiedad); //en un ciclo for in
}

// Clases ( es lo mismo que una funcion constructora pero mas simple)

class Producto {
    constructor(titulo, precio, color){
        this.titulo = titulo;
        this.precio = precio;
        this.color = color;
    }
    sumarIVA(){
        this.precio = this.precio * 1.21;
    }
}

const producto1 = new Producto("Sillón", 50, "verde");
console.log(producto1);
producto1.sumarIVA();
console.log(producto1);



