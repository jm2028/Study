type Age<T> = T extends string ? T : unknown;

let ages :Age<string>;
let ages2 :Age<number>;

type FirstItem<T> = T extends any[] ? T[0] : any;

let firstType :FirstItem<[boolean, string, number]>

// infer
type Personsss<T> = T extends (infer R)[] ? R : unknown

type zzz = Personsss<string[]>;

///