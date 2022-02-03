/* Leer capitulo 3 de libro de Eloquent JavaScript
Crea una function que reciba dos valores como parámetros y retorne la suma de estos dos valores como resultado, imprime el resultado en pantalla */

var suma = function(num1, num2){
    console.log(num1 + num2)
}

suma(9, 9)

/* Crea una función que reciba un número de 5 digitos como parametro y lo revierta: ejemplo
numero = 87943
salida esperada: 34978 */

var numero = 56789

function ivertirNumero (xNumero){
    var revertir = xNumero.toString().split("").reverse().join("")
    console.log(revertir)
}

ivertirNumero(numero)

/* 4. Escribe una función que reciba una cadena como parámetro (ejemplo: "soy una cadena de texto" y que convierta la primera letra de cada palabra en mayúscula */


/* 5. Crear una función que retorne los primeros 20 caracteres de un texto. Ejemplo:
ejemplo:  si yo mando a llamar dicha función y mandó 
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit,

 Entonces la función tendrá que retornar los primeros 20 caracteres, 
 es decir: "Lorem ipsum dolor si"
 */

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit" // acorte un poco la palabra
var texto = lorem.slice(0, -35) 


function letrasPorImprimir(lorem2){
    console.log(texto)
}
letrasPorImprimir(texto)

/* 6. Escriba una función que acepte dos argumentos, una cadena y una letra, y la función contará el número de ocurrencias de la letra especificada dentro de la cadena. (editado)  */