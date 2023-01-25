var 이름 = 'kim';
var 나이 = 30;
var 출생지역 = '경기도';
var 좋아하는 = { 크러쉬: "SOFA" };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
// union타입
var 회원들 = [1, '2', 3];
var 오브젝 = { a: 123 };
var 애니타입;
애니타입 = 123;
애니타입 = [];
애니타입 - 1;
// 애니타입은 타입해제와 같음 모든 타입검사를 하지않게됨
var 언노운타입;
언노운타입 = 123;
언노운타입 = [];
// 언노운타입 - 1;
// 숫자 연산은 숫자 타입에만 가능
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function 함수(x) {
    return x * 2;
}
함수(20);
function 안녕하세요(name) {
    if (name) {
        console.log("\uC548\uB155\uD558\uC138\uC694 + ".concat(name));
    }
    else {
        console.log('입력왜안해여');
    }
}
안녕하세요();
function 숫자또는문자자릿수(x) {
    return x.toString().length;
}
