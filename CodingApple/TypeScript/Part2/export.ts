export type 이름 = string;
export let 나이 = 20;

namespace 네임스페이스 {
    export type Name = string;
}

export type Car = {
    wheel : number,
    model : string
}

export interface Usefunc {
    (obj? :object): void;
}

namespace stringDog {
    export type Dog = string;
}
namespace objDog {
    export interface Dog { name : string; }
}

let dog1 :stringDog.Dog = 'bark';
let dog2 :objDog.Dog = { name : 'paw' };
