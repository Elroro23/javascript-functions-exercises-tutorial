let names = ["John", "Kenny", "Tom", "Bob", "Dilan"]; //Definimos una variable global(accesible en cualquier lugar del código) con un array de strings.

function sortNames(arr) { //Definimos una función con un "array" desordenado como parámetro.
  return arr.sort() //Retornamos el array y le aplicamos la propiedad ".sort()" (ordena alfábeticamente).
}

console.log(sortNames(names)); //Imprimimos la función con la variable "names" como argumento.
