"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = isEven;
require("colors");
function isEven(num) {
    if (num % 2 == 0) {
        console.log("El numero introducido es numero par".blue);
    }
    else {
        console.log("El numero introducido es numero impar".red);
    }
}
//isEven(28)
