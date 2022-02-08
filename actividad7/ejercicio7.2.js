/* 2. Dado un arreglo de enteros var numbers = [ 1, 2, 3, 4, 10, 11 ], encuentra la suma de
sus elementos */

var numbers = [ 1, 2, 3, 4, 10, 11 ]
var total = 0

for(var i = 0; i < numbers.length; i++){
   total = total + numbers[i]
}
console.log(total)

