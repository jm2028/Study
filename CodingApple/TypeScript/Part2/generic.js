function 함수(x) {
    return x[0];
}
var a = 함수([4, 2]);
var b = 함수(['갸아악', '제네릭']);
console.log(a + 1);
function functttt(x) {
    return x.length;
}
var c = functttt(['1', '2', '3']);
/////
function 렝쓰(x) {
    return x.length;
}
렝쓰('asdf');
렝쓰(['a', 'b', 'c']);
var data = '{"name" : "dog", "age" : 1 }';
function jsonParse(data) {
    return JSON.parse(data);
}
var res = jsonParse(data);
