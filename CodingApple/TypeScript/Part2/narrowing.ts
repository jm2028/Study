{
type Fish = { swim: string };
type Bird = { fly: string };
function 함수(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim
  }
  return animal.fly
} 

type Car = {
    wheel : '4개',
    color : string
  }
  type Bike = {
    wheel : '2개',
    color : string
  }
  
function 함수(x : Car | Bike){
    if (x.wheel === '4개'){ // Car 타입
        console.log('이 차는 ' + x.color)
    } else {
        console.log('이 바이크는 ' + x.color)
    }
}


// nver 타입 return이 없어야함 endpoint가 없어야함
function never() :never{
    throw new Error()
}
}