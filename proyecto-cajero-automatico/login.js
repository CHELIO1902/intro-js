// Validación de inicio de sesion

function inicioSesion(){
  event.preventDefault()
  let usuario = document.getElementById("usuario").value
  let contrasena = document.getElementById("contraseña").value
  //se declara la variable miStorage 
  let miStorage = window.localStorage
  // se le agregan valores ("usuario" es una key, y la variable usuario ya esta delcarada que es la que nos va a dar el valor que necesitamos guardar 
      miStorage.setItem("usuario", usuario)

if (usuario == "Mali" && contrasena == "123456"){
    location.href ="ca-index.html"
  }else if (usuario == "Gera" && contrasena == "234567"){
    location.href ="ca-index.html"
  }else if (usuario == "Maui" && contrasena == "345678"){
    location.href ="ca-index.html"
  }else{
    alert("Revisa tu usuario o contraseña")
  }
}

