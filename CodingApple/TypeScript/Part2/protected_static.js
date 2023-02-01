var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// protected 는 extends 된 클래스에서도 사용 가능하다 (private는 extends 에선 사용 불가함)
// static은 부모 class만 쓸수 있음
var User = /** @class */ (function () {
    function User() {
        this.x = 10;
        this.example = User.z;
        //static은 this.y 사용이 안됨 (부모 클래스만 사용할수 있으므로)
    }
    User.z = 20;
    User.y = 30;
    return User;
}());
var user1 = new User();
console.log(user1);
User.z = 2000;
// static은 부모클래스를 직접 조작해서 이후에 생성될 자식들에게 수정된 값 전달 가능 (하지만 이런 상황은 거의 없고 private 써서 직접수정은 불가능하게 하고 수정함수를 만드는게 국룰)
var user2 = new User();
console.log(user2);
var Newuser = /** @class */ (function (_super) {
    __extends(Newuser, _super);
    function Newuser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Newuser.prototype.doThis = function () {
        this.x = 20;
    };
    return Newuser;
}(User));
var newuser = new Newuser();
console.log(newuser);
////
var Work1 = /** @class */ (function () {
    function Work1() {
        this.z = 30; // extends 된 클래스에서 사용 가능
    }
    Work1.x = 10; // 자식 수정 불가, 자식 읽기 불가, 부모 읽기 가능, 부모 수정 불가 (내부 함수 사용시 가능), extends 에서 사용 불가
    Work1.y = 20; // 부모 읽기 수정 가능
    return Work1;
}());
var Work2 = /** @class */ (function () {
    function Work2() {
    }
    Work2.addOne = function (num) {
        Work2.x += num;
    };
    Work2.printX = function () {
        console.log(Work2.x);
    };
    Work2.x = 10;
    Work2.y = 20;
    return Work2;
}());
console.log(Work2.printX());
console.log(Work2.addOne(5));
console.log(Work2.printX());
var Square = /** @class */ (function () {
    function Square(w, h, c) {
        this.width = w;
        this.height = h;
        this.color = c;
    }
    Square.prototype.draw = function () {
        var boxdiv = document.createElement('div');
        boxdiv.style.width = "".concat(this.width, "px");
        boxdiv.style.height = "".concat(this.height, "px");
        boxdiv.style.backgroundColor = "".concat(this.color);
        boxdiv.style.position = 'absolute';
        boxdiv.style.left = "".concat(Math.random() * (400 - this.width), "px");
        boxdiv.style.top = "".concat(Math.random() * (400 - this.height), "px");
        document.body.insertAdjacentElement('beforebegin', boxdiv);
    };
    return Square;
}());
var 네모 = new Square(30, 30, 'red');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
네모.width = 50;
네모.height = 50;
네모.color = 'green';
네모.draw();
네모.draw();
네모.draw();
네모.draw();
