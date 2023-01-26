{
    var 동물 = 'kim';
    var 동물들 = { name: 'kim', age: 20 };
    var 여친 = {
        name: '예은'
    };
    var position = { x: 10, y: 20 };
    var positionExtend = { x: 10, y: 10, z: 10 };
    // Literal types
    var 이름 = void 0;
    이름 = 123;
    이름 = '123';
    이름 = 1414;
    var 접니다 = void 0;
    접니다 = '대머리';
    function 함쑤(a) {
        return 1;
    }
    함쑤('hello');
    function 가위바위보(손) {
        return [손];
    }
    가위바위보('가위');
    var 자료 = {
        name: 'kim'
    };
    /** as const
     * object value값을 그대로 타입으로 지정해줌
     * object 속성에 모두 readonly 붙여줌
     */
    function 내함수(a) {
    }
    내함수(자료.name);
    var 하암수 = function (a) {
        return Number(a);
    };
    하암수('123');
    var 회원정보 = {
        name: 'kim',
        plusOne: function (a) { return a; },
        changeName: function () { }
    };
    회원정보.plusOne(1);
    var cutZero = function (str) {
        var result = str.replace(/^0+/, '');
        return result;
    };
    console.log('컷', cutZero('0안녕하세용/'), cutZero('하의'));
    var removeDash = function (str) {
        return parseFloat(str.replace(/\-/g, ''));
    };
    var 함수에함수 = function (string, func1, func2) {
        console.log(func2(func1(string)));
    };
    함수에함수('010-111-2222', cutZero, removeDash);
}
