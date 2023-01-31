function 함수 (...a: number[]){
    console.log(a)
}
함수(1,2,2,2,3,34,5);

let arr = [1,2,3];
let arr2 = [4,5];
let arr3 = [...arr, ...arr2];

// destructuring
let [변수1, 변수2] = ['안녕', 100];

let { student, age } = { student : true, age : 20 };

interface 옵젝형 {
    student : boolean,
    age : number
}
function 함수({student, age}: 옵젝형){
    console.log(student, age);
}
let 옵젝 = { student : true, age : 20 };
함수(옵젝);

///

function returnMax(...num: number[]):number {
    let result :number = 0;
    num.forEach((number)=>{
        if (result < number) {
            result = number
        };
    })
    
    return result;
}

console.log(returnMax(1,5,246,37,45,87,0));