{
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
    var 애니타입 = void 0;
    애니타입 = 123;
    애니타입 = [];
    애니타입 - 1;
    // 애니타입은 타입해제와 같음 모든 타입검사를 하지않게됨
    var 언노운타입 = void 0;
    언노운타입 = 123;
    언노운타입 = [];
    // 언노운타입 - 1;
    // 숫자 연산은 숫자 타입에만 가능
    var user_1 = 'kim';
    var age_1 = undefined;
    var married = false;
    var 철수 = [user_1, age_1, married];
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
    function 결혼확률(pay, home, loveable) {
        var total;
        total += pay;
        if (home) {
            total += 500;
        }
        ;
        if (loveable === '상') {
            total += 100;
        }
        ;
        if (600 <= total) {
            return '결혼 가능';
        }
    }
    결혼확률(500, true, '상');
    // Narrowing 현재 변수의 타입을 특정지어주면 인정됨
    function 내로윙(x) {
        if (typeof x === 'string') {
            return x + '1';
        }
        else if (typeof x === 'number') {
            return x + 1;
        }
    }
    // Assertion 타입 덮어쓰기 (타입을 변경하기 위해 쓰는게 아니라 내로윙 용도로 사용, 들어올 타입을 100% 확실할때 사용, if문 씁시다)
    function 내로윙2(x) {
        var array = [];
        array[0] = x;
    }
    function 클리닝함수(x) {
        return x.map(function (val) { return Number(val); });
    }
    //console.log('클리닝함수', 클리닝함수([1,'2',3,4,'5656', '이건과연']));
    var 철수쌤 = { subject: 'math' };
    var 영희쌤 = { subject: ['science', 'english'] };
    var 민수쌤 = { subject: ['science', 'art', 'korean'] };
    function 과목리턴(쌤) {
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
    console.log(과목리턴({ subject: 'hello' }));
}
