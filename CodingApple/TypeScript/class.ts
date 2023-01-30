class Person {
    name :string;

    constructor(name :string) {
        this.name = name;
    }

    함수(a : string) :void {
        console.log('ㅎ' + a)
    }
}


let 사람1 = new Person('kim');
let 사람2 = new Person('park');
사람1.함수('하이');

class Car {
    car :string;
    price :number;

    constructor(car :string, price :number) {
        this.car = car;
        this.price = price;
    }

    tax() :number {
        return this.price * 0.1;
    }
}

let car1 = new Car('소나타', 3000);

class Word {
    num :number[];
    str :string[];

    constructor(...params :(number | string)[]) {
        this.num = [];
        this.str = [];

        params.forEach((param)=>{
            if (typeof param === 'number') {
                this.num.push(param);
            }
            else {
                this.str.push(param);
            }
        })
    }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num)
console.log(obj.str)