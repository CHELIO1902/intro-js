// Validación de inicio de sesion

function inicioSesion(){
  event.preventDefault()
  let usuario = document.getElementById("usuario").value
  let contraseña = document.getElementById("contraseña").value

  if (usuario == "Mali" && contraseña == "123456"){
    location.href ="ca-index.html"
  }else if (usuario == "Gera" && contraseña == "234567"){
    location.href ="ca-index.html"
  }else if (usuario == "Maui" && contraseña == "345678"){
    location.href ="ca-index.html"
  }else{
    alert("Revisa tu usuario o contraseña")
  }
}

