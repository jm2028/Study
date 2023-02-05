// declare 자바스크립트로 작성된 파일에 있는 변수를 에러 내지 말라고 선언하는 명령어
declare let aaa;
console.log(aaa + 1);

// ambient module (글로벌 모듈) 타입스크립트들은 import 안해도 전 ts파일 에서 가져와서 사용함
// 로컬 모듈로 만들고 싶으면 import나 export 하면 자동으로 로컬모듈로 변해서 ambient module이 막힘