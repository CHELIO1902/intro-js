// 1*
/*  * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundonúmeros más bajos y segundos más altos, respectivamente
 * del siguiente arreglo: */

const arr = [3,4,6,1,5,2,9,10,23,12] //ciclo for de tres lineas, for almacena el numero mas alto y luego hacemos otro for para buscar el numero anterior

function encontrarNumeros(x){ //parametro va dentro de los parentesis
    for(let i = 0; i < x.length; i++){ 
      console.log(x[i])
    }
}

encontrarNumeros(arr) //mandar a ejecutar una función

// 2*
/* Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
al String "name" para que devuelva algo así:  */

//             ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]

 const coleccion = [
     {
       a: 11, 
       b:224, 
       name: "M48 Bulldog"
     },
     {
       a:23, 
       b:56, 
       name: "Object 140"
     },
     {
       a: 32, 
       b:75, 
       name: "T57 Heavy"
     }
 ];

  for(var i=0; i<coleccion.length; i++){
    var suma;
    var name;
    console.log(suma = coleccion[i].a + coleccion[i].b)
    this.name = coleccion[i].name
    console.log(suma. + name)
  }

/*const suma = [] 
let resultado = 0
for(let i = 0; i < coleccion.length; i++){
  if(coleccion)
}
 
console.log(suma) */



// 3*
   /* * Dadas dos matrices de enteros,
   * encuentra qué elementos faltan en la segunda matriz
   * de la primera matriz.

 Ejemplo

 La matriz es la lista original. Los números que faltan son
      matriz = [7,2,5,3,5,3]
      br = [7,2,5,4,6,3,5,3]

      Los números que faltan en arr son [4,6]
 */



 /*********************  ELOQUENT JS CHAP 4******************************* */

// 4*  
  /* * La suma de un rango:
  
  * Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array 
  * que contenga todos los números desde inicio hasta (e incluyendo) final. 
  * Luego, escribe una función suma que tome un array de números y retorne 
  * la suma de estos números */
  


// 5*  
/*   * Revirtiendo un array:
  * 
  * Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que 
  * aparecen sus elementos. Para este ejercicio, escribe dos funciones, revertirArray y 
  * revertirArrayEnSuLugar. El primero, revertirArray, toma un array como argumento y 
  * produce un nuevo array que tiene los mismos elementos pero en el orden inverso. 
  * El segundo, revertirArrayEnSuLugar, hace lo que hace el métodoreverse: 
  * modifica el array dado como argumento invirtiendo sus elementos. 
  * Ninguno de los dos puede usar el método reverse estándar. */
  