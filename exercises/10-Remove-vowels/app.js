const rapid = (myString) => { //Cree una función que acepta un parámetro "myString". Este es el string que voy modificar.
    let result = ""; //Definimos una variable y la inicializamos como un "string" vacío. Esta variable guardará el resultado después de procesar el string de entrada.
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; //Creamos un array "vocales" que tiene las vocales en mayúsculas y  en minúsculas. Esto ayuda a verificar si un elemento es vocal o no.
    for (let i = 0; i < myString.length; i++) { //Definimos un bucle y este se ejecutará mientras que el valor de "i" sea menor que la longitud del string "mystring.length". Esto asegura que el bucle no intente acceder a un índice que no existe en el string. 
        let char = myString[i]; //Dentro del bucle, definimos una variable que guarda el elemento actual del string que se está revisando.
        if (!vocales.includes(char)) { //Utilizamos una condición "if" para verificar si el elemento actual "char" no está incluido en el array de vocales ".includes". El signo "!" significa "no", por lo que la condición se cumple si "char" NO es una vocal.
            result += char.toUpperCase(); //Si el elemento no es una vocal, lo volvemos mayúscula usando "char.toUpperCase()" y lo agregas a la cadena result.
        }
    }; 
    return result; //Después de procesar todos los elementos, retornamos el string result que ahora tiene los elementos no vocales en mayúsculas.
}

let str = "John"; //"John" es el string de entrada que dimos a la función. Este string es recibido por la función(rapid) con el nombre "mystring", y sobre el hacemos las operaciones para producir el resultado final que se guarda en la variable result.
console.log(rapid(str)); //llamamos a la función "rapid" y pasamos la variable "str" como argumento. Esto significa que el contenido de str, que es "John", es el que se enviará a la función "rapid" como el parámetro "myString".