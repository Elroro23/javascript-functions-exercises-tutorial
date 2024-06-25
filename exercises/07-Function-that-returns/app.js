let dollarToEuro = function (dollarValue) { //Si usas "LET" o "CONST" para declarar su alcance se limita al bloque {} en el que se declara. 
	return dollarValue * 0.89;
}
let euroToYen = function (euroValue) { //Guardamos la función en una variable ya que esta no tiene nombre (ANÓNIMA). Estas funciones tienen ventajas.
	return euroValue * 124.15; //Especificamos la operación y retornamos el resultado.
}

console.log(euroToYen(dollarToEuro(137))); //Llamamos "dollarToEuro" con su argumento(137) y pasamos este parámetro como argumento a "euroToyen" (CONCATENACIÓN). Imprimimos el resultado.
/* Así lo podemos hacer en pasos más pequeños:
let euros = dollarToEuro(137);
console.log("Euros:" + euros); //Imprime un "string" (Euros) con la conversión de dolares a euros.
let yenes = euroToYen(euros);
console.log("Yenes:" + yenes); //Imprime un "string" (Yenes) con la conversión de euros a yenes.
*/