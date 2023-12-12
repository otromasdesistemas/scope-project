/*******************************************************************************
Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback.

Do not use the built in Array#every.

Examples:

let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false
*******************************************************************************/

let myEvery = function(array, cb) {
    for (let i = 0; i < array.length; i++) {
      if (!cb(array[i])) {
        return false; // Si al menos un elemento no cumple la condición, devuelve false.
      }
    }
    return true; // Si todos los elementos cumplen la condición, devuelve true.
  };



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myEvery;
