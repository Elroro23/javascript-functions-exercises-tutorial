function renderPerson(name, date, eyescolor, age, gender) { //Definimos una función con sus parámetros.
    let description = `${name} is a ${age} years old ${gender} born in ${date} with ${eyescolor} eyes`; //Declaramos una variable que contiene una concatenación de valores y strings con template literals.
    return description; //Retornamos el resultado de la variable.
}

console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male')); //Imprimimos el resultado.
/* Otra manera de hacerlo:
function renderPerson(name, birthDate, eyeColor, age, gender) {
    return name + ' is a ' + age + ' years old ' + gender + ' born in ' + birthDate + ' with ' + eyeColor + ' eyes';
}
*/