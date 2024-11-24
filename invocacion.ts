import { isEven } from "./funcion_is_even";
import { add } from "./buclesFor";
import "colors";

let array1 = ["casa","coche","ciudad","cesta"];
let array2 = ["Barco","Baca","bicicleta","Balon","Bisiesto","Brasil"];
let array3 = ["Venezuela", "Veneno","Voltaje"];



let total_array1 = add(array1);
console.log(`El numero de textos de array1 es de => ${total_array1}`.yellow);
isEven(total_array1);

let total_array2 = add(array2);
console.log(`El numero de textos de array1 es de => ${total_array2}`.yellow);
isEven(total_array1);

let total_array3 = add(array3);
console.log(`El numero de textos de array1 es de => ${total_array3}`.yellow);
isEven(total_array1);






