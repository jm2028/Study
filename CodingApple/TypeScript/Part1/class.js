var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.함수 = function (a) {
        console.log('ㅎ' + a);
    };
    return Person;
}());
var 사람1 = new Person('kim');
var 사람2 = new Person('park');
사람1.함수('하이');
var Car = /** @class */ (function () {
    function Car(car, price) {
        this.car = car;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
var Word = /** @class */ (function () {
    function Word() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var _this = this;
        this.num = [];
        this.str = [];
        params.forEach(function (param) {
            if (typeof param === 'number') {
                _this.num.push(param);
            }
            else {
                _this.str.push(param);
            }
        });
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);
