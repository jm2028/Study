interface StringOnly {
    [key : number] : string
}

let user :StringOnly= {
    0 : 'kim',
    1 : '20',
    2 : 'seoul'
}

interface MyCssType {
    'font-size' : {
        'font-size' : {
            'font-size' : number
        }
    }
}

let css : MyCssType = {
    'font-size' : {
        'font-size' : {
            'font-size' : 14
        }
    }
}

