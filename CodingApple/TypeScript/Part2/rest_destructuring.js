var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function 함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수(1, 2, 2, 2, 3, 34, 5);
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
// destructuring
var _a = ['안녕', 100], 변수1 = _a[0], 변수2 = _a[1];
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
var 옵젝 = { student: true, age: 20 };
함수(옵젝);
///
function returnMax() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = 0;
    num.forEach(function (number) {
        if (result < number) {
            result = number;
        }
        ;
    });
    return result;
}
console.log(returnMax(1, 5, 246, 37, 45, 87, 0));
function objfunc(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
objfunc({ user: 'kim', comment: [3, 5, 4], admin: false });
function arrfunc(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
arrfunc([40, 'wine', false]);
