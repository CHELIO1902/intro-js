//1. Concatena los siguientes arreglos:
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
var comingSoonAnimals = ['panter', 'dragon', 'turtle'] 
var nuevosAnimales = animals.concat(comingSoonAnimals)
console.log(nuevosAnimales)



// 2. Acomoda el arreglo de menor a mayor: var arr = [ 4, 6, 1, 0, 8, 2 ]
var arr = [ 4, 6, 1, 0, 8, 2 ]
console.log(arr.sort())

// 3. Agrega un nuevo animal (‘cow’) al arreglo de animals
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
animals.push('cow')
console.log(animals)

// 4. Retira el elemento ‘eagle’ del arreglo animals
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion']
animals.shift()
console.log(animals)
