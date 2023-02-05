{
    // tuple 순서대로
    // tuple에 옵셔널 사용가능하지만 논리적으로 마지막부분에만 사용가능함
    let 멍멍 :[string, boolean, number?] = ['dog', true];

    function 함수(...x :[string, number]) {

    }
    함수('abd', 123)

    let arr = [1,2,3];
    let arr2 :[number, number, ...number[]] = [4,5, ...arr];


    ///////

    let tasty :[string, number, boolean] = ['치킨', 18000, false];

    let tuple2 :[string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true]

    function 함수tuple(x, y, z :[string, boolean, ...(number | string)[]]){
  
    }

    function 문자문자숫자숫자(...x: (string | number)[]) :[string[], number[]] {
        let arrString :string[] = [];
        let arrNumber :number[] = [];

        x.forEach((val)=>{
            if (typeof val === 'string') {
                arrString.push(val);
                return;
            }
            arrNumber.push(val);
        })

        return [arrString, arrNumber];
    }
}