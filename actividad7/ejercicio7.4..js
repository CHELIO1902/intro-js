/* --Escriba un programa para calcular el precio total de la compra de su teléfono. Usted continuará comprando teléfonos (sugerencia: loop!) Hasta que se quede sin dinero en su cuenta bancaria. También comprará accesorios para cada teléfono, siempre y cuando su cantidad de compra esté por debajo de su umbral de gasto mental.
--Después de haber calculado el importe de su compra, agregue el impuesto y, a continuación, imprima el importe de compra calculado, correctamente formateado.
Por último, compruebe la cantidad en contra del saldo de su cuenta bancaria para ver si se lo puede permitir o no.
--Debe establecer algunas constantes para la "tasa de impuesto", "precio de teléfono", "precio de accesorio" y "umbral de gasto", así como una variable para su "saldo de cuenta bancaria". "
--Debe definir funciones para calcular el impuesto y para formatear el precio con un "$" y redondear a dos decimales.
--Desafío de bonificación: Trate de incorporar la entrada a este programa, tal vez con el prompt(..) cubierto en la "Entrada" anterior. Por ejemplo, puede solicitar al usuario el saldo de su cuenta bancaria. ¡Diviértase y sea creativo! */

//declarando los valores constantes
const tax = 0.16
const precioAccesorio = 249.99
const telefono = 5999.99
const saldoBancario = 20000
const presupuesto = 8000

//al total de la compra vamos a calcular el impuesto
function calcularImpuestoSobreCompra () {
  // al total de la compra vamos a calcularle el impoesto
  var totalConTax = compra * tax
  return totalConTax
}

// funcion para formatear el precio con los decimales
function format () {

}


/* function sacarBalanceCuenta () {
    var balance = saldoBancario - compra
    return balance
} */

//decrementer el saldo de la cuenta bancaria
//agregar articulos
function agregarMercancia () {
        var counter = 0
        while (total < saldoBancario){ //arreglar
            var totalCarrito = telefono + precioAccesorio 
            var totalConTax = calcularImpuestoSobreCompra (totalCarrito)
            counter++
        }
}