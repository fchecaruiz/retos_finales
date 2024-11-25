import { Point} from "./point";
import { calculateDistance } from "./calculateDistance";
console.log('El código está corriendo');





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
    

console.log(calculateDistance(distancia_X2_Y2))
