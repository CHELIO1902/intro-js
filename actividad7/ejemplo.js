/**
 * Funcion de ejemplo:
 * 
 * Crear una funcion que reciba una lista de elementos numericos,
 * y que reciba un numero como segundo parametro, y que busque dentro de la lista
 * ese numero y si esta lo retorne el index.
 */

/* var lista = [1, 55, 3, 10, 7, 99]

function buscarNumero (array, numero){
    for (var i = 0; i < array.length; i++){
        if (lista[i] === numero)
        console.log("El número ingresado fue: ", + numero, "y se encuentra en la index: ", i)
        }
}

buscarNumero(lista, 99) */

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 600;
var amount = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed( 2 );
}

// keep buying phones while you still have money
while (amount < bank_balance) {
	// buy a new phone!
	amount = amount + PHONE_PRICE;

	// can we afford the accessory?
	if (amount < SPENDING_THRESHOLD) {
		amount = amount + ACCESSORY_PRICE;
	}
}

// don't forget to pay the government, too
amount = amount + calculateTax( amount );

console.log(
	"Your purchase: " + formatAmount( amount )
);
// Your purchase: $334.76

// can you actually afford this purchase?
if (amount > bank_balance) {
	console.log(
		"You can't afford this purchase. :("
	);
}
// You can't afford this purchase. :(