/* var resultado = 1
var contador = 0
while(contador < 10){
    resultado = resultado * 2;
    contador = contador + 1;
}
console.log(resultado) no entendi por completo este ejercicio de la pagina 32 de eloquent*/

/* ejercicio de eloquent pagina 39
for (var triangulo = "#"; triangulo.length < 8; triangulo+= "#")
    console.log(triangulo) */

/*Construye un código bajo las siguientes reglas:
 * Itera arreglo=[1, 4, 6, 10, 22, 55, 46, 2, 5, 0] utilizando un ciclo for
 * Imprime en consola los valores que sean mayores 3 */

var arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0]

for (var i = 0; i > 3; i++)
    console.log(arreglo.[i])


/* solución */

var arreglo=[1, 4, 6, 10, 22, 55, 46, 2, 5, 0]

for(var i = 0; i < arreglo.length; i++) {
    if(arreglo[i] > 3) { // true
        console.log(arreglo[i]) // imprime
    }   
}
