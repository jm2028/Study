{
    class User {
        name :string; 
        private familyName :string = 'kim';
        constructor(a) {
            this.name = a + this.familyName;
        }

        이름변경함수() {
            this.familyName = 'park';
        }
    }
    let 유저1 = new User('민수');
    console.log(유저1);
    유저1.이름변경함수();
    console.log(유저1);


    class Person {
        constructor(public name) {
            this.name = 'kim'
        }
    }

    let 자싁 = new Person('팍');
    console.log(자싁)
}