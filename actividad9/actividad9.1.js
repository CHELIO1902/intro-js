// Ejercicios de Objetos y sus métodos básicos:


//1
//  * Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: 'engineer',
        hobbies: ['Sky', 'football', 'walking my dog']
    };

 /*    1. Muestra en pantalla el valor de la propiedad name mediante dot notation
    2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
 */
console.log(student.name)
console.log(student["age"])
student.name = "Steve Jobs"
console.log(student.name)


// 2
 /* Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:*/

    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    
    console.log(Object.keys(student));


//3
//Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    console.log(student.hasOwnProperty('name')) //copie la soluciión de usted, es el unico ejercicio que me faltaba



//4
/*Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
/* /* /*  * Objeto para usar:*/
  var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    delete student.rollno
    console.log(student) 


//5
 //Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
 
     var student = {
        name: "David Rayy",
        age: 34,
        job: 'engineer',
        hobbies: ['Sky', 'football', 'walking my dog']
    };
//La nueva edad debe ser 35.

student.age = 35
console.log(student)




//6
 //Escriba un programa para añadir una nueva propiedad al siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: 'engineer',
        hobbies: ['Sky', 'football', 'walking my dog']
    };

//La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.
 
student.pet = "dog"
console.log(student)


//7
// Crea un código para llenar un objecto vacio:
 
 const objeto1 = {}
  
  Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    */
 Object.defineProperties(objeto1, {
  color: {
    enumerable: true,
    value: "amarillo",
    writable: false
  },
  tamaño: {
    enumerable: true,
    value: ["2", "metros"],
    writable: false
  },
  peso: {
    enumerable: true,
    value: ["25", "kilos"],
    writable: false
  },
  cantidad: {
    enumerable: true,
    value: 10,
    writable: false
  }
})

console.log(objeto1)









