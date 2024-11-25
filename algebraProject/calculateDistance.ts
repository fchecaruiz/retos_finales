import { Point } from "./point";


export function calculateDistance(anotherPoint: Point): number {

    let x1:number = 40
    let y1:number = 20;
    // let x2: number = anotherPoint.getx();
    // let y2: number = anotherPoint.gety(); 
    let x2:number = 12;
    let y2:number = 20;
  
    let distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    return distancia;
}

// export let mYPoint = new Point (12,33)
// export let distancia_X2_Y2 = new Point(22,44);

//console.log(calculateDistance(distancia_X2_Y2))