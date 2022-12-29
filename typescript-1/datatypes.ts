// declare string variable
let lname: string;
let age: number;
let isMale: boolean;
let purchases: any;
// declare arrays
let employeeList: string[];
let employeeIdList: number[];
// generics
let customersList: Array<string>; 
let customerIdsList: Array<number>; 

lname = 'abc';
age = 19;
isMale = false;
purchases = {
    lname,
    age,
    isMale,
};

employeeList = ["abc", "bcd", "asd"];
employeeIdList = [1, 2, 3, 4, 5];
employeeIdList.concat(6);
employeeIdList.copyWithin(6, 2, 4);
let filteredEmployeeIds = employeeIdList.filter((num) => num > 3);
let findEmployeeId = employeeIdList.find((num) => num > 12);
let findEmployeeIdTwo = employeeIdList.find((num) => num === 2);
employeeIdList.concat([12, 13]);
console.log(employeeIdList);

employeeIdList.flat();
console.log(employeeIdList);

employeeIdList.flatMap(num => num + 1);
console.log(employeeIdList);

employeeIdList.forEach(num => console.log(num));
console.log(employeeIdList);

employeeIdList.forEach(num => num * 2);
console.log(employeeIdList);

customersList = ['a', 'b'];

console.log(lname.charAt(0));
console.log(lname.includes('b'));
console.log(purchases.lname, purchases);
console.log(filteredEmployeeIds);
console.log(findEmployeeId);
console.log(findEmployeeIdTwo);
console.log(employeeIdList.entries());
console.log(employeeIdList.every(num => num > 5));
employeeIdList.fill(-1, 2, 4);
console.log(employeeIdList);

// reduce function
let resultOfEmployeeIds = employeeIdList.reduce((prev, curr) => prev * curr);
console.log(resultOfEmployeeIds);

// declare enums - with const prepend to it
const enum Role {
    student = -1,
    Teacher,
    Coach,
    Administrator,
    Manager
};

let harsh: Role = Role.student;
let aasha: Role = Role.Administrator;

console.log(harsh);
console.log(aasha);

// tuples - to swap two numbers 

// usage - lets say you have two tables employee and department. and you want to return it. we can simply do it by taking first type as 
// employee type and second as department type. and send it as tuple.
// advantage - one advantage over array is that if we access array index out of bound it will not give an error when writing code but in case of tuples we get an
// error.

// declare tuple
let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);

console.log(swapNumbs[0]);
console.log(swapNumbs[1]);

let employeeDetails: any;

employeeDetails = {
    cName: lname,
    cAge: age,
    cRole: Role.Coach
};

console.log(employeeDetails);
// any - lets try to avoid using any type because it can give an error on production if it infers type wrong than required one.
// instead you can try the approach given below.
interface NewInterfaceTry {
    cName: string,
    cAge: number,
    cRole: Role
}

let customerDetails: NewInterfaceTry;

customerDetails = {
    cName: lname,
    cAge: age,
    cRole: Role.Coach
};

console.log(customerDetails);