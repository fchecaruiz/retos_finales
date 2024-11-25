import { Point} from "./point";
import { calculateDistance } from "./calculateDistance";
import { calcularQuadrant } from "./calcularQuadrant";





let mYPoint = new Point (40,60);
let distancia_X2_Y2 = new Point(22,44);


console.log(mYPoint.getx());
console.log();
console.log(mYPoint.gety());


mYPoint.setx(100);
mYPoint.sety(200)
console.log();
console.log(mYPoint.getx());
console.log();
console.log(mYPoint.gety()); 
console.log()
    

console.log(calculateDistance(distancia_X2_Y2))
console.log();

console.log(calcularQuadrant(0, 0));  
console.log(calcularQuadrant(-5, -10)); 
console.log(calcularQuadrant(-5, 10)); 
console.log(calcularQuadrant(-5, -10)); 
console.log(calcularQuadrant(5, -10)); 

