// para declarar un objeto plano/literal

const miObjeto = {
  color: "rojo",
  edad: 25,
  peso: 89,
  nombre: "gru"
}

// acceder al valor de una propiedad de mi objeto

// console.log(miObjeto.nombre)

//modificar el valor de una propiedad

/* miObjeto.color = "azul"
console.log(miObjeto) */

//agregar una nueva propiedad a mi objeto

/* miObjeto.nacionalidad = "Mexicana"
console.log(miObjeto) */

// crear un objeto desde cero, donde algunas de sus propiedades no sean mutables

const carro = {}

Object.defineProperties(carro, {
  marca:{
    enumerable: true,
    value: "toyota",
    writable: true
  },
  modelo: {
    enumerable: true,
    value: 2022,
    writable: false
  },
  color: {
    enumerable: true,
    value: "blanco",
    writable: false
  }
})

// carro.marca = "Mazda"
console.log(carro) 

//***************************************

//arreglo de objetos

const mascotas = [
  {
    especie: 'perro',
    nombre: 'gypsi',
    edad: 2,
    color: 'blanco',
    hobbies: ['comer', 'jugar']
  },
  {
    especie: 'perro',
      nombre: 'gru',
      edad: 3,
      color: ['blanco', 'con', 'negro'],
      hobbies: ['comer', 'jugar']
  },
  {
    especie: 'gato',
      nombre: 'ruffus',
      edad: 1,
      color: 'amarillo',
      hobbies: ['comer', 'dormir']
  }
]

// console.log(mascotas[1])

// acceder a jugar ( en hobiies pero en la segunda pocisión)
//console.log(mascotas[1].hobbies[1])