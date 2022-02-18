//funcion para guardar el usuario en el sesion storage

function usuario (){
 let nombre = sessionStorage.getItem
} 


// clientes disponibles
//esta variable nos va a extraer el dato que el navegador guardo en su memoria para poder usarlo con las demas funciones y asi validad que usuario fue el que se logueo.
var usuarioLogueado = localStorage.getItem('usuario');

var cuentas = [
  { nombre: "Mali", saldo: 200 },
  { nombre: "Gera", saldo: 290 },
  { nombre: "Maui", saldo: 67 }
];

function displayUsuario (cliente){
for(var i = 0; i < cuentas.length; i++)
  if (cliente == cuentas[i].nombre){
    document.getElementById("output").innerHTML = "Hola " + cuentas[i].nombre + " tu saldo es de $" + cuentas[i].saldo + " pesos"
  }
}

displayUsuario(usuarioLogueado)


//obtener los datos del imput
//buscar el cliente logueado dentro de las cuentas
//sumar el valor del input a las cuentas globales
// mostrar en pantalla



function depositarSaldo (cantidad, cliente){
  for(var i = 0; i < cuentas.length; i++){
    if(cliente == cuentas[i].nombre){
      cuentas[i].saldo += Number(cantidad)
    }
  }
} 
//funcion para obtener los datos del input

function agregarSaldo(){
  let input = document.getElementById("ingresoCantidad").value
  depositarSaldo(input, usuarioLogueado)
  displayUsuario(usuarioLogueado)
  document.getElementById("ingresoCantidad").value = " "
}

//funcion para retirar saldo

function retirarSaldo(){
  let input = document.getElementById("retiroCantidad").value
  retiro(input, usuarioLogueado)
  displayUsuario(usuarioLogueado)
  document.getElementById("retiroCantidad").value = " "
}

function retiro (cantidad, cliente){
  for(var i = 0; i < cuentas.length; i++){
    if(cliente == cuentas[i].nombre){
      cuentas[i].saldo -= Number(cantidad)
    }
  }
} 

// boton cierre de cesion

function cierreSesion (){
  let cierre1 = location.href ="login.html"
  // sirve para borrar los datos almancenados en la base de datos del navegador
   localStorage.clear()
}

