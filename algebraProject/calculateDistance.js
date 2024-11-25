"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDistance = calculateDistance;
function calculateDistance(anotherPoint) {
    var x1 = 40;
    var y1 = 20;
    var x2 = anotherPoint.getx();
    var y2 = anotherPoint.gety();
    var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return distancia;
}
// export let mYPoint = new Point (12,33)
// export let distancia_X2_Y2 = new Point(22,44);
//console.log(calculateDistance(distancia_X2_Y2))
