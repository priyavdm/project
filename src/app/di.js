// class Engine{
//    constructor(public hp:number){}
// }
// class Engine{
//     constructor(public hp:number,public stroke:number){}
//  }
var Engine = /** @class */ (function () {
    function Engine(hp, stroke, rpx) {
        this.hp = hp;
        this.stroke = stroke;
        this.rpx = rpx;
    }
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(e) {
        this.e = e;
    }
    return Car;
}());
var e = new Engine(25, 24, 22);
var c = new Car(e);
console.log(c);
// class car{
//     e:Engine=new Engine(400)
//     constructor(){}
// }
