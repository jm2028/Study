{
    function 함수(animal) {
        if ("swim" in animal) {
            return animal.swim;
        }
        return animal.fly;
    }
    function 함수(x) {
        if (x.wheel === '4개') { // Car 타입
            console.log('이 차는 ' + x.color);
        }
        else {
            console.log('이 바이크는 ' + x.color);
        }
    }
    // nver 타입 return이 없어야함 endpoint가 없어야함
    function never() {
        throw new Error();
    }
}
