// protected 는 extends 된 클래스에서도 사용 가능하다 (private는 extends 에선 사용 불가함)
// static은 부모 class만 쓸수 있음
class User {
    protected x = 10;
    static z = 20;
    private static y = 30;

    example = User.z;
    //static은 this.y 사용이 안됨 (부모 클래스만 사용할수 있으므로)
}

let user1 = new User();
console.log(user1);
User.z = 2000;
// static은 부모클래스를 직접 조작해서 이후에 생성될 자식들에게 수정된 값 전달 가능 (하지만 이런 상황은 거의 없고 private 써서 직접수정은 불가능하게 하고 수정함수를 만드는게 국룰)
let user2 = new User();
console.log(user2);

class Newuser extends User {
    doThis() {
        this.x = 20;
    }
}

let newuser = new Newuser();

console.log(newuser);


////
class Work1 {
    private static x = 10; // 자식 수정 불가, 자식 읽기 불가, 부모 읽기 가능, 부모 수정 불가 (내부 함수 사용시 가능), extends 에서 사용 불가
    public static y = 20; // 부모 읽기 수정 가능
    protected z = 30; // extends 된 클래스에서 사용 가능
}

class Work2 {
    private static x = 10;
    public static y = 20;

    static addOne(num :number) :void {
        Work2.x += num;
    }
    static printX() {
        console.log(Work2.x);
    }
}

console.log(Work2.printX());
console.log(Work2.addOne(5));
console.log(Work2.printX());

class Square {
    width :number;
    height :number;
    color :string;
    constructor(w, h, c) {
        this.width = w;
        this.height = h;
        this.color = c;
    }

    draw() {
        const boxdiv = document.createElement('div');
        boxdiv.style.width = `${this.width}px`;
        boxdiv.style.height = `${this.height}px`;
        boxdiv.style.backgroundColor = `${this.color}`;
        boxdiv.style.position = 'absolute';
        boxdiv.style.left = `${Math.random() * (400 - this.width)}px`;
        boxdiv.style.top = `${Math.random() * (400 - this.height)}px`;
        document.body.insertAdjacentElement('beforebegin', boxdiv);
    }
}
let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()
네모.width = 50;
네모.height = 50;
네모.color = 'green';
네모.draw()
네모.draw()
네모.draw()
네모.draw()