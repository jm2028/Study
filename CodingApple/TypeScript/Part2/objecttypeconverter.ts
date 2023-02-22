interface Persons {
    [key :string] : number,
}

type PersonKeys = keyof Persons;
let testa :PersonKeys = 'name'

type Caar = {
    color : boolean,
    modle : boolean,
    price : boolean | number
}

type TypeChanger<MyType> = {
    [key in keyof MyType] : string | number
}

type 새로운타입쓰 = TypeChanger<Car>


//////
type Bus = {
    color : string,
    model : boolean,
    price : number
}

type changerTypes<needType> = {
    [key in keyof needType] : string | number
}

type newBus = changerTypes<Bus>;

type allChanger<T, P> = {
    [key in keyof T] : P
}

type newBus2 = allChanger<newBus, boolean>;
type newBus3 = allChanger<newBus, string[]>;