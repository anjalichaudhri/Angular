// introduction to classes
// for naming convention pascal case
class Employee {
    // class properties
    private empId: number;
    protected empName: string;
    empAddress: string;

    // constructor
    constructor(id: number, name: string, address: string) {
        this.empId = id,
        this.empName = name,
        this.empAddress = address
    }

    getNameWithAddress(): string {
        return `${this.empName} stays at ${this.empAddress}`;
    }
}

// let Jake = new Employee();

// Jake.id = 1;
// Jake.name = 'Jake';
// Jake.address = 'New Jersey';

// instance of class
let Jake = new Employee(1, 'Jake', 'New Jersey');
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
class Manager extends Employee {
    gender: string;
    static teamName: string;
    constructor(id: number, name: string, address: string, gender: string, teamName: string){
        super(id, name, address);
        gender = gender,
        teamName = teamName
    }

    getManagerName() {
        // these `` code is called string interpolation.
        return `${this.empName}`;
    }

    static getManagerTeamName() {
        // you wont get access to inherited properties or the properties in the current class but only static one i.e. teamName in this class.
        return `${this.teamName}`;
    }
}

let managerOne = new Manager(2, 'Rex', 'Florida', 'Male', "X102");

let managerName = managerOne.getManagerName();
let managerNameWithAddress = managerOne.getNameWithAddress();

console.log(managerName);
console.log(managerNameWithAddress);

// create static methods - they can be called with classnames only e.g.
let managerTeamName = Manager.getManagerTeamName();

console.log(managerTeamName);
