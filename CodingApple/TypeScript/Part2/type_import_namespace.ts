import { 이름, Car, Usefunc } from './export'
///<reference path="./export.ts"/>

let 변수셈 :이름 = 'park';

let 카 :Car = {wheel : 30, model : '모델'}

let 함수 :Usefunc = (a) => {
    console.log(a);
}

함수({a : 5})