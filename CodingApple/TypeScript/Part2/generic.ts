function 함수<T>(x :T[]) :T {
    return x[0]
}

let a = 함수<number>([4, 2]);
let b = 함수<string>(['갸아악', '제네릭']);
console.log(a + 1);

interface LengthCheck {
    length : number
}
function functttt<T extends LengthCheck>(x : T) {
    return x.length
}

let c = functttt<string[]>(['1', '2', '3']);

/////
function 렝쓰<T extends string | string[]>(x: T) {
    return x.length;
}
렝쓰<string>('asdf');
렝쓰<string[]>(['a','b','c']);


interface Animals {
    name : string;
    age : number 
}  
let data = '{"name" : "dog", "age" : 1 }'
function jsonParse<T>(data :string) :T{
    return JSON.parse(data);
}

let res = jsonParse<Animals>(data);
