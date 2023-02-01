{
    var User_1 = /** @class */ (function () {
        function User(a) {
            this.familyName = 'kim';
            this.name = a + this.familyName;
        }
        User.prototype.이름변경함수 = function () {
            this.familyName = 'park';
        };
        return User;
    }());
    var 유저1 = new User_1('민수');
    console.log(유저1);
    유저1.이름변경함수();
    console.log(유저1);
    var Person_1 = /** @class */ (function () {
        function Person(name) {
            this.name = name;
            this.name = 'kim';
        }
        return Person;
    }());
    var 자싁 = new Person_1('팍');
    console.log(자싁);
}
