"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularQuadrant = calcularQuadrant;
function calcularQuadrant(x, y) {
    // let x:number = 0;
    // let y:number = 0;
    if (x == 0 || y == 0)
        return 0;
    if (x > 0 && y > 0)
        return 1;
    if (x < 0 && y > 0)
        return 2;
    if (x < 0 && y < 0)
        return 3;
    if (x > 0 && y < 0)
        return 4;
    else {
        return -0;
    }
}
// console.log(calcularQuadrant(0, 0));  
// console.log(calcularQuadrant(-5, -10)); 
// console.log(calcularQuadrant(-5, 10)); 
// console.log(calcularQuadrant(-5, -10)); 
// console.log(calcularQuadrant(5, -10)); 
