export class Point{
    x:number;
    y:number;
  
    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }


    public getx():number{
       return this.x
    }
    
    public setx(x:number):void{
        this.x = x
    }

    public gety():number{
        return this.y
     }
     
     public sety(y:number):void{
         this.y = y
     }
 
     toString(): string {
        return   (" " + this.x + " " + this.y +" ");

    }

}
