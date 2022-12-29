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
// introduction to classes
// for naming convention pascal case
var Employee = /** @class */ (function () {
    // constructor
    function Employee(id, name, address) {
        this.empId = id,
            this.empName = name,
            this.empAddress = address;
    }
    Employee.prototype.getNameWithAddress = function () {
        return "".concat(this.empName, " stays at ").concat(this.empAddress);
    };
    return Employee;
}());
// let Jake = new Employee();
// Jake.id = 1;
// Jake.name = 'Jake';
// Jake.address = 'New Jersey';
// instance of class
var Jake = new Employee(1, 'Jake', 'New Jersey');
console.log(Jake);
// constructor - which will be responsible for creating the instance of a class
// in typescript you can have either parameterized or default constructor at a time but can have both in other 
// programming languages like java.
// create a method in the class
console.log(Jake.getNameWithAddress());
// member visibility
// why create classes?
// in your project you are going to write a lot of code for business logic. Classes comes in handy to write 
//  business logic
// in angular we are going to use classes for writing services which are going to get data from backend and displaying it on your frontend.
// we will also be using classes for writing components which is your view. it needs data from backend.
// it needs class to actually give the data back to your html.
// in short classes are going to wrap your entire business logic.
//declare private properties - using private keyword or prepend property name with # keyword e.g. #id or private id.
// won't be able to access the private property outside the class. e.g. Jake.empId will give an error.
// declare protected property - it will only only be accessible within the class and in the class which extends it. not outside the class.
// won't be able to access the protected property outside the class. e.g. Jake.empName will give an error.
// class Manager is inheriting the properties and methods of Employee class except private ones - inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, address, gender, teamName) {
        var _this = _super.call(this, id, name, address) || this;
        gender = gender,
            teamName = teamName;
        return _this;
    }
    Manager.prototype.getManagerName = function () {
        // these `` code is called string interpolation.
        return "".concat(this.empName);
    };
    Manager.getManagerTeamName = function () {
        // you wont get access to inherited properties or the properties in the current class but only static one i.e. teamName in this class.
        return "".concat(this.teamName);
    };
    return Manager;
}(Employee));
var managerOne = new Manager(2, 'Rex', 'Florida', 'Male', "X102");
var managerName = managerOne.getManagerName();
var managerNameWithAddress = managerOne.getNameWithAddress();
console.log(managerName);
console.log(managerNameWithAddress);
// create static methods - they can be called with classnames only e.g.
var managerTeamName = Manager.getManagerTeamName();
console.log(managerTeamName);
