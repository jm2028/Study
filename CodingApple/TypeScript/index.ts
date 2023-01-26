{
let 이름 :string = 'kim';
let 나이 :number = 30;
let 출생지역 :string = '경기도';
let 좋아하는 :{ [key :string] :string } = { 크러쉬 : "SOFA" }

type TProject = { member: string[], days: number, started :boolean };

let project :TProject = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}

// union타입
let 회원들 :(number | string)[] = [1, '2', 3];
let 오브젝 :{ a: string | number } = { a : 123 };

let 애니타입 :any;
애니타입 = 123;
애니타입 = [];
애니타입 - 1;
// 애니타입은 타입해제와 같음 모든 타입검사를 하지않게됨

let 언노운타입 : unknown;
언노운타입 = 123;
언노운타입 = [];
// 언노운타입 - 1;
// 숫자 연산은 숫자 타입에만 가능

let user :string = 'kim';
let age :(number | undefined) = undefined;
let married :boolean = false;
let 철수 :(string | number | undefined | boolean)[] = [user, age, married];

let 학교 :{ score :(number | boolean)[], teacher :string, friend :string | string[] } = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]


function 함수 (x :number) :number {
    return x * 2;
}

함수(20);

function 안녕하세요 (name? :string) :void {
    if (name) {
        console.log(`안녕하세요 + ${name}`);
    }
    else {
        console.log('입력왜안해여');
    }
}
안녕하세요();

function 숫자또는문자자릿수 (x : number | string) :number {
    return x.toString().length;
}

function 결혼확률 (pay :number, home :boolean, loveable :string) :string | void {
    let total :number;
    total += pay;
    if (home) {
        total += 500;
    };
    if (loveable === '상') {
        total += 100;
    };
    if (600 <= total) {
        return '결혼 가능';
    }
}
결혼확률(500, true, '상');


// Narrowing 현재 변수의 타입을 특정지어주면 인정됨
function 내로윙 (x : number | string) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else if (typeof x === 'number') {
        return x + 1;
    }
}

// Assertion 타입 덮어쓰기 (타입을 변경하기 위해 쓰는게 아니라 내로윙 용도로 사용, 들어올 타입을 100% 확실할때 사용, if문 씁시다)
function 내로윙2 (x : number | string) {
    let array : number[] = [];
    array[0] = x as number;
}

function 클리닝함수(x : (number | string)[]) : number[] {
    return x.map((val)=> Number(val));
}

//console.log('클리닝함수', 클리닝함수([1,'2',3,4,'5656', '이건과연']));

let 철수쌤 = { subject : 'math' };
let 영희쌤 = { subject : ['science', 'english'] };
let 민수쌤 = { subject : ['science', 'art', 'korean'] };

function 과목리턴(쌤 : { subject: string | string[]}) :string {
    if (Array.isArray(쌤.subject)) {
        return 쌤.subject[쌤.subject.length - 1];
    }
    else if (typeof 쌤.subject === 'string') {
        return 쌤.subject;
    }
    else {
        return '없';
    }
}

console.log(과목리턴({ subject: 'hello'}));

}