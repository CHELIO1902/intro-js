/* 
const arr = [2, true, "hola"]

//forEach

arr.forEach(function (element){
  console.log(element)
}) */

//   MAP

const transformers = [
  {
    nombre: "dinobot",
    forma: "velociraptor",
    equipo: "maximal"
  },
  {
    nombre: "megatron",
    forma: "T-rex",
    equipo: "predacons"
  },
  {
    nombre: "bumblebee",
    forma: "leopardo",
    equipo: "maximal"
  },
  {
    nombre: "galbatron",
    forma: "bombero",
    equipo: "maximal"
  }
]

//obtener los nombres de los transformers
const nombres = []
for(let i = 0; i < transformers.length; i++) {
  nombres.push(transformers[i].name)
}

console.log(nombres)

// resolver con un map 

/* const transfNames = transformers.map((transformers) => {
    return transformers.name
})

console.log(transfNames) */
 

/* const nombres = []
for(let i = 0; i < transformers.length; i++) {
  if (transformers[i].equipo == "predacons"){
    equipo.push(transformers[i])
  }
}
 */
//console.log(nombres)


// metodo filter

/* const showTeam = transformers.filter((transformers) =>{
    return transformers.team == 
}) */