// 1.Tipos de Variables (var, let, const)
// 1.1: Declara una variable nombre con var, asígnale tu nombre y luego reasigna un nuevo nombre. Muestra ambos en consola.

console.log("EJERCICIO 1.1");
var nombre = "Valery";
console.log("Nombre con tipo de variable var:", nombre);
nombre = "Val";
console.log("Nuevo nombre con tipo de variable var:", nombre);

//Ejercicio 1.2: Intenta hacer lo mismo pero con const y explica por qué falló.
console.log("EJERCICIO 1.2");
try{
    const nombreConst = "Valery";
    console.log("Const:", nombreConst);
    nombreConst = "Val";

}catch (error){
    console.log("Error con variable const:",error.message);
    console.log("No es posible reasignar una varibale de tipo const");

}

//Ejercicio 1.3: Declara una variable edad con let dentro de un bloque if (sin que se cumpla la condición) y luego intenta acceder a ella fuera del bloque. Explica el resultado.
console.log("EJERCICIO 1.3");
if (false){
    let edad = 18;
}
try {
    console.log(edad);
}catch (error){
    console.log("Error:")
    console.log("No es posible acceder a 'edad'está declarada con let dentro de un bloque if que no se ejecuta, de esta forma no existe fuera del bloque")
}

//Tipos de Datos (Primitivos y Complejos)
//Ejercicio 2.1: Declara una variable para cada uno de los siguientes tipos de datos primitivos: string, number, boolean, null y undefined. Usa typeof para verificar el tipo de cada una.
console.log("EJERCICIO 2.1");
let texto = "Bienvenida Valery";
let numero = 17;
let booleano = true;
let nulo = null;
let indefinido;

console.log (typeof texto, typeof numero, typeof booleano, typeof nulo, typeof indefinido);

//Ejercicio 2.2: Declara un objeto persona con propiedades nombre y edad, y un array hobbies con tres elementos. ¿Qué tipo de dato son el objeto y el array?
console.log("EJERCICIO 2.2");
let persona = {nombre: "Valery", edad: 18};
let hobbies = ["bailar", "pintar", "comer"];

console.log("Tipo de persona:", typeof persona);
console.log("Tipo de hobbies:", typeof hobbies);

//Conversión de Tipos (Implícita y Explícita)
//Ejercicio 3.1 (Implícita):
//-Crea una variable numero1 = 10 (number) y numero2 = "5" (string).
//-Muestra el resultado de numero1 + numero2. ¿Qué sucedió?
//-Muestra el resultado de numero1 * numero2. ¿Qué sucedió ahora?
console.log("EJERCICIO 3.1");
let numero1 = 10;
let numero2 = "5";
console.log ("numero1 + numero2:", numero1 + numero2); 
console.log ("numero1 + numero2", numero1 * numero2);

//Ejercicio 3.2 (Explícita):
//-Usa String() para convertir el número 25 a un string.
//-Usa Number() para convertir el string "100" a un número.
//-Usa Boolean() para convertir el string vacío "" y el string "hola" a booleanos.
console.log("EJERCICIO 3.2");
console.log(String(25));
console.log(Number("100"));
console.log(Boolean(""), Boolean ("hola"));

//Operadores, Condicionales, Ciclos y Excepciones
//Ejercicio 4.1: Usa operadores de comparación para verificar si 10 === "10" y 10 == "10". Explica la diferencia.
console.log("EJERCICIO 4.1");
console.log("10 === '10':", 10 ==="10");
console.log("10 == '10':", 10 == "10");

//Ejercicio 4.2: Crea un if/else que verifique si una variable numero es par o impar. Usa el operador %.
console.log("EJERCICIO 4.2");
let numeroCheck = 10;
if (numeroCheck % 2 === 0){
    console.log(numeroCheck, "número par");
}else{
    console.log(numeroCheck, "número impar");
}

//Ejercicio 4.3: Usa un ciclo for para imprimir en la consola los números del 1 al 5.
console.log("EJERCICIO 4.3");
for (let i = 1; i <= 5; i++){
    console.log(i);
}

//Ejercicio 4.4: Usa un bloque try...catch para intentar ejecutar un código que genere un error (throw new Error("Este es un error.")) y captura el error para mostrar un mensaje amigable.
console.log("EJERCICIO 4.4");
try {
    throw new Error ("Esto es un error.");
}catch (error){
    console.log("El error ha sido capturado:", error.messager);
}

//unciones y Arrow Functions
//Ejercicio 5.1: Escribe una función tradicional llamada multiplicar que reciba dos parámetros y retorne su producto. Llama a la función y muestra el resultado.
console.log("EJERCICIO 5.1");
function multiplicar(a,b){
    return a * b;
}

console.log("Multiplicar:", multiplicar(3, 6));

//Ejercicio 5.2: Convierte la función multiplicar del ejercicio anterior en una arrow function de una sola línea.
console.log("EJERCICIO 5.2");
const multiplicarArrow = (a,b) => a * b;
console.log("Multiplicar con arrow:", multiplicarArrow(5, 5));

//Ejercicio 5.3: Escribe una arrow function llamada saludar que no reciba parámetros y retorne el texto "¡Hola a todos!".
console.log("EJERCICIO 5.3");
const saludar = () => "¡Hola a todos!";
console.log(saludar());

// Scope y Contextos
//Ejercicio 6.1: Declara una variable global en el ámbito global. Luego, dentro de una función, declara una variable local. Intenta acceder a ambas variables dentro y fuera de la función, y explica qué funciona y qué no.
console.log("EJERCICIO 6.1");
let globalVar = "Global";
function testScope(){
    let localVar = "Local";
    console.log(globalVar);
    console.log(localVar);
}
testScope();
console.log(globalVar);

//Ejercicio 6.2: Crea un objeto coche con una propiedad marca y un método mostrarMarca que use this. Llama al método y explica qué representa this.
console.log("EJERCICIO 6.2");
let coche = {
    marca: "Audi",
    mostrarMarca: function(){
        console.log("La marca es:", this.marca);
    }
};
coche.mostrarMarca();

//Arrays
//Ejercicio 7.1 (Mutables):
//-Crea un array frutas = ["Manzana", "Banana"].
//-Usa push() para agregar "Naranja" y pop() para eliminar el último elemento. Muestra el array en cada paso.
console.log("EJERCICIO 7.1");
let frutas = ["Manzana", "Banana"];
console.log("Inicial:", frutas);
frutas.push("Naranja");
console.log("Despues del push:", frutas);
frutas.pop();
console.log("Despues del pop:", frutas);

//Ejercicio 7.2 (Inmutables):
//Crea un array numeros = [1, 2, 3].
//Usa map() para crear un nuevo array con cada número multiplicado por 2.
//Usa filter() para crear un nuevo array con solo los números mayores a 1.
console.log("EJERCICIO 7.2");
let numeros = [1, 2, 3];
let numerosPorDos = numeros.map(n => n * 2);
let mayoresQueUno = numeros.filter(n => n > 1);
console.log("Multiplicados por 2:", numerosPorDos);
console.log("Mayores a 1:", mayoresQueUno);

//Ejercicio 7.3 (Iteración):
//Usa forEach() para iterar sobre el array frutas y mostrar cada fruta en la consola.
//Usa find() para encontrar la fruta que sea "Banana".
//Usa findIndex() para encontrar el índice de la fruta "Manzana".
console.log("EJERCICIO 7.3");
frutas.forEach(f => console.log("Frutas:", f));
console.log("Encontrar Banana:", frutas.find(f => f === "Banana"));
console.log("Indice de Manzana:", frutas.findIndex (f => f === "Manzana"));

//Objetos y Clases
//Ejercicio 8.1 (Métodos en Objetos):
//-Crea un objeto libro con propiedades titulo y autor.
//-Añade un método mostrarInfo que use this para imprimir la información del libro.
console.log("EJERCICIO 8.1");
let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Marquez",
    mostrarInformacionLibro: function(){
        console.log(`Libro: ${this.titulo}, Autor: ${this.autor}`);
    }
}
libro.mostrarInformacionLibro();

//Ejercicio 8.2 (Clases):
//Crea una clase llamada Animal con un constructor que reciba un nombre.
//Agrega un método saludar que retorne un saludo usando el nombre.
//Crea una instancia de la clase y llama al método saludar.
console.log("EJERCICIO 8.2");
class Animal {
    constructor(nombre){
        this.nombre = nombre;
    }
    saludar(){
        return `Holi, soy ${this.nombre}`;
    }
}
let animal1 = new Animal ("Romina");
console.log (animal1.saludar());

//Ejercicio 8.3 (Herencia de Clases):
//Crea una clase Perro que herede de Animal.
//Añade una propiedad raza al constructor de Perro y usa super() para llamar al constructor de la clase padre.
//Crea una instancia de Perro y muestra su saludo.
console.log("EJERCICIO 8.3");
class Perro extends Animal{
    constructor(nombre, raza){
        super(nombre);
        this.raza = raza;
    }
}

let perro1 = new Perro("Tadeo", "Golden");
console.log(perro1.saludar(), "y soy un", perro1.raza);















