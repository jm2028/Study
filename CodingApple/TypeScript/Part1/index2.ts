{
// type Alias
type Animal = string | number | undefined;
let 동물 :Animal = 'kim';

type Animals = { name :string, age :number }
let 동물들 :Animals = { name: 'kim', age : 20 }

type Girlfriend = {
    readonly name : string
}
const 여친 :Girlfriend = {
    name : '예은'
}

// 타입합치기
type Name = string;
type Age = number;
type Person = Name | Age;

// & 연산자로 오브젝트타입 extend 하기
type PositionX = { x : number };
type PositionY = { y : number };
type NewType = PositionX & PositionY;
let position :NewType = { x : 10, y : 20 };

// object 타입 두개를 extend 할 떄 중복된 속성은 합쳐진다
type PositionTypeA = { x : number, y : number }
type PositionTypeB = { y: number, z : number }
type NewPosition = PositionTypeA & PositionTypeB;
let positionExtend :NewPosition = { x : 10, y: 10, z: 10 }

// 숙제
type obj = { 
    color? :string, 
    size :number,
    readonly position :number[],
}

type obj2 = {
    name : string,
    phone : number,
    email : string
}

type obj3 = {
    adult : boolean
}

type obj4 = obj2 & obj3



// Literal types
let 이름 : 123;
이름 = 123;
이름 = '123';
이름 = 1414;

let 접니다 : '대머리' | '솔로';
접니다 = '대머리';

function 함쑤(a : 'hello'): 1 | 0 {
    return 1;
}
함쑤('hello');

type 가위바위보 = ('가위' | '바위' | '보');
function 가위바위보(손 : 가위바위보) : 가위바위보[] {
    return [손];
}
가위바위보('가위');

var 자료 = {
    name : 'kim'
} as const;
/** as const
 * object value값을 그대로 타입으로 지정해줌
 * object 속성에 모두 readonly 붙여줌
 */ 

function 내함수(a : 'kim') {

}
내함수(자료.name)

type 함수타입 = (a :string) => number;

let 하암수 :함수타입 = function (a) {
    return Number(a);
}
하암수('123');

let 회원정보 = {
    name : 'kim',
    plusOne: ( a :number ) :number => a,
    changeName : () :void => {}
}
회원정보.plusOne(1)

type 컷 = (str : string) => string;
let cutZero :컷 = function(str) {
    let result = str.replace(/^0+/, '');
    return result;
}
console.log('컷', cutZero('0안녕하세용/'), cutZero('하의'))

type 리뭅대시 = (str : string) => number;
let removeDash :리뭅대시 = function(str) {
    return parseFloat(str.replace(/\-/g, ''));
}

type T컷제로 = 컷;
type T리뭅대시 = 리뭅대시;
type T함수에함수 = (string :string, func1 :T컷제로, func2 :T리뭅대시 ) => void;
let 함수에함수 :T함수에함수 = function(string, func1, func2) {
    console.log(func2(func1(string)));
}
함수에함수('010-111-2222', cutZero, removeDash);
}