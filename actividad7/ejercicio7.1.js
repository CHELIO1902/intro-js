/* 1. Crear una función que recibe 2 parámetros (una oración y la palabra a buscar).
Retornar true o false en caso de que una oración contenga una palabra dada, es decir,
si yo mando "Hola mundo" y mando la palabra a buscar "perro" me debe retornar un
false. En cambio si mando "mundo" entonces debe retornar true. */

       

var valorBuscado = ["hola ", "mundo"]

function palabraDada (oracion, palabra){
    for(var i = 0; i < oracion.length; i++){
        if (oracion.includes(palabra)){
            console.log(true)
            break
        }else{
            return false
        }
    }
}

palabraDada(valorBuscado, "gato")