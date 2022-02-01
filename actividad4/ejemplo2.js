// guarda un arreglo de valores introducidos
//si el usuario no introduce un valor, termina el ciclo
var arreglo = [];
var userInput;
while (!(userInput=="")){
    userInput = prompt ("Ingresa cualquier caracter");
    arreglo.push(userInput);
}
console.log("Introduciste estos valores: " + arreglo);