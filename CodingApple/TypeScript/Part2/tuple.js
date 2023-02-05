var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
{
    // tuple 순서대로
    // tuple에 옵셔널 사용가능하지만 논리적으로 마지막부분에만 사용가능함
    var 멍멍 = ['dog', true];
    function 함수() {
        var x = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            x[_i] = arguments[_i];
        }
    }
    함수('abd', 123);
    var arr_1 = [1, 2, 3];
    var arr2_1 = __spreadArray([4, 5], arr_1, true);
    ///////
    var tasty = ['치킨', 18000, false];
    var tuple2 = ['동서녹차', 4000, true, false, true, true, false, true];
    function 함수tuple(x, y, z) {
    }
    function 문자문자숫자숫자() {
        var x = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            x[_i] = arguments[_i];
        }
        var arrString = [];
        var arrNumber = [];
        x.forEach(function (val) {
            if (typeof val === 'string') {
                arrString.push(val);
                return;
            }
            arrNumber.push(val);
        });
        return [arrString, arrNumber];
    }
}
