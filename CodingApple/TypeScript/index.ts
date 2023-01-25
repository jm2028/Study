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