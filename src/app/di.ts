// class Engine{
//    constructor(public hp:number){}
// }
// class Engine{
//     constructor(public hp:number,public stroke:number){}
//  }
class Engine{
    // constructor(public hp:number,public stroke:number,rpx:number){}
    hp:number;
    stroke:number;
    rpx:number;
    constructor(hp:number,stroke:number,rpx:number){
        this.hp=hp;
        this.stroke=stroke;
        this.rpx=rpx;
    }
 }
 class Car{
    e:Engine;
    constructor(e:Engine){
        this.e=e;
    }
    // constructor(public e:Engine){}
}
let e=new Engine(25,24,22);
let c=new Car(e);
console.log(c);

// class car{
//     e:Engine=new Engine(400)
//     constructor(){}
// }

