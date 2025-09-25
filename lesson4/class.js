var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, gender, age, point) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.point = point;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var person = new Person("Alice", true, 30, 10);
person.greet();
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(name, gender, age, point, role) {
        var _this = _super.call(this, name, gender, age, point) || this;
        _this.role = role;
        return _this;
    }
    //override : ghi de
    User.prototype.greet = function () {
        console.log("xin chao ".concat(this.name));
    };
    return User;
}(Person));
var u1 = new User("ducdm", true, 22, 9, "boss");
console.log(u1);
console.log(u1.greet());
