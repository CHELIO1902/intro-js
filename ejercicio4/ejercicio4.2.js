// usando Do-while, crea un programa que pregunte al usuario un número. mostrar los numeros que son multiplos de 5 desde 1 hasta el numero introducido por el usuario.

var num = prompt("Ingrese un número")
var i = 0
 do {
     i++;
     if (i % 5 === 0)
     console.log(i)
 } while (i <= num)