
// clientes disponibles

var cuentas = [
  { nombre: "Mali", saldo: 200 }
  { nombre: "Gera", saldo: 290 }
  { nombre: "Maui", saldo: 67 }
];

function displayUsuario (cliente){
 for(var = i; i < cliente.length; i++)
  if (document.getElementById("usuario").innerHTML == cliente[i].name){
    document.getElementById("output").innerHTML += "Hola " + cliente[i].name + "tu saldo es de $" + cliente[i].saldo + "pesos"
  }
}

displayUsuario(cuentas)



function muestraSaldo (){
  document.getElementById("consultarSaldo").innerHTML = displayUsuario(cuentas)
} 