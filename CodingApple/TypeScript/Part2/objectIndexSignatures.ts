interface StringOnly {
    [key : number] : string
}

let user :StringOnly= {
    0 : 'kim',
    1 : '20',
    2 : 'seoul'
}

interface MyCssType {
    'font-size' : MyCssType | number
}

let css : MyCssType = {
    'font-size' : {
        'font-size' : {
            'font-size' : 14
        }
    }
}


//////
type objindexsigs = {
    [key :string] : string | number
}

let objindexsig : objindexsigs = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
}


type objresulsives = {
    'font-size' : number,
    [key :string] : number | objresulsives
}

let objresulsive : objresulsives = {
    'font-size' : 10,
    'secondary' : {
        'font-size' : 12,
        'third' : {
        'font-size' : 14
        }
    }
}