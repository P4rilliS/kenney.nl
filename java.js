console.log("hola mundo desde un archivo");
// alert("hola mundo desde un alerta");

/* variables
las variables son contenedores de informacion.
var: variables globlales,
let: variables locales,
const: variables constantes.
*/

// Declaraciones
// var nombre = "Sergio"
// let edad = 25
// const PI = 3.1416 //constantes no se pueden modificar
// console.log(nombre, edad, PI)

// nombre = "Jose";
// edad = 30;
// console.log(nombre, edad, PI)

/*function saludo(){
    console.log("Hola" + nombre + "tienes" + edad + "años")
}*/

// 13. Contraseña válida

// Escribir una función llamada `contrasenaValida` que reciba un string 
// y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".
//  De lo contrario debe retornar `false`.

// código de prueba
// console.log(contrasenaValida("2Fj(jjbFsuj")) // true
// console.log(contrasenaValida("eoZiugBf&g9")) // true
// console.log(contrasenaValida("hola")) // false
// console.log(contrasenaValida("")) // false
// ----------------- Sergio ----------------

function contraseñaValida(password){
    if(password == "2Fj(jjbFsuj" || password == "eoZiugBf&g9"){
        return true
    }else{
        return false
    }
}

console.log(contraseñaValida("2Fj(jjbFsuj"))


//18. Encontrar el número máximo

// Escribir una función llamada `max` que reciba un arreglo
//  de números y retorne el número máximo:

// **Nota:** Intentarlo hacer sin el método `Math.max` de JavaScript.

// código de prueba
// console.log(max([3, 9, 6])) // 9
// console.log(max([67, 35, 54, 26])) // 67
// console.log(max([5, 9, 2, 4, 5, 7])) // 9

function max(array){
    let max = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}
console.log(max([3, 9, 6]))
console.log(max([67, 35, 54, 26]))
console.log(max([5, 9, 2, 4, 5, 7]))

// 16. Encontrar palabras que terminan en "s"

// Escribir una función llamada `terminanConS` que reciba un arreglo
//  de strings y retorne un nuevo arreglo con todas las palabras que
//  terminan con "s" (mayúscula o minúscula).

// código de prueba
// console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
// console.log(terminanConS(["beta", "delta", "gama"])) // []
// console.log(terminanConS([])) // []
// ultimo elemento -> palabra.length - 1

// ------------- Sergio ----------------

function terminanConS(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(array[i][array[i].length - 1] == "s"){
            newArray.push(array[i])
        }
    }
    return terminanConS
  }
  console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"]))
  console.log(terminanConS(["beta", "delta", "gama"]))
  console.log(terminanConS([]))


                
//   let nombre = prompt("escribe tu nombre");
//   let saludo = "Hola "+nombre;
//   console.log(saludo);