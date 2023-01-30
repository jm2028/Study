// & 기호 intersection type - 두 타입을 전부 만족하는 타입
type Cat = { age : number } & Animal & Student;

interface Student {
    name :string
}
interface Student {
    score :number
}
// 인터페이스는 중복선언 되면 합쳐짐 Student = {name :string, score: number}

type Animal = { owl : string }
type Animal = { name : string }
// type은 중복선언 불가


interface Teacher extends Student {
    age :number
}

let 학생 :Student = { name : 'kim' }
let 선생 :Teacher = { name : 'kim', age : 20 }


interface Item {
    brand :string,
    serialNumber :number,
    model: string[]
}
let 상품 :Item = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

interface Cart {
    product: string,
    price: number,
}
let 장바구니 :Cart[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

interface Cart2 extends Cart {
    card: boolean;
}
let 장바구니2 :Cart2 = { product : '청소기', price : 7000, card : false };

interface Calc {
    plus :(a: number, b: number) => number;
    minus :(a: number, b: number) => number;
}

let calc :Calc = {    
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    }
}