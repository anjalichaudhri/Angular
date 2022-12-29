// declare string variable
var lname;
var age;
var isMale;
var purchases;
// declare arrays
var employeeList;
var employeeIdList;
// generics
var customersList;
var customerIdsList;
lname = 'abc';
age = 19;
isMale = false;
purchases = {
    lname: lname,
    age: age,
    isMale: isMale
};
employeeList = ["abc", "bcd", "asd"];
employeeIdList = [1, 2, 3, 4, 5];
employeeIdList.concat(6);
employeeIdList.copyWithin(6, 2, 4);
var filteredEmployeeIds = employeeIdList.filter(function (num) { return num > 3; });
var findEmployeeId = employeeIdList.find(function (num) { return num > 12; });
var findEmployeeIdTwo = employeeIdList.find(function (num) { return num === 2; });
employeeIdList.concat([12, 13]);
console.log(employeeIdList);
employeeIdList.flat();
console.log(employeeIdList);
employeeIdList.flatMap(function (num) { return num + 1; });
console.log(employeeIdList);
employeeIdList.forEach(function (num) { return console.log(num); });
console.log(employeeIdList);
employeeIdList.forEach(function (num) { return num * 2; });
console.log(employeeIdList);
customersList = ['a', 'b'];
console.log(lname.charAt(0));
console.log(lname.includes('b'));
console.log(purchases.lname, purchases);
console.log(filteredEmployeeIds);
console.log(findEmployeeId);
console.log(findEmployeeIdTwo);
console.log(employeeIdList.entries());
console.log(employeeIdList.every(function (num) { return num > 5; }));
employeeIdList.fill(-1, 2, 4);
console.log(employeeIdList);
// reduce function
var resultOfEmployeeIds = employeeIdList.reduce(function (prev, curr) { return prev * curr; });
console.log(resultOfEmployeeIds);
;
var harsh = -1 /* Role.student */;
var aasha = 2 /* Role.Administrator */;
console.log(harsh);
console.log(aasha);
// tuples - to swap two numbers 
// usage - lets say you have two tables employee and department. and you want to return it. we can simply do it by taking first type as 
// employee type and second as department type. and send it as tuple.
// advantage - one advantage over array is that if we access array index out of bound it will not give an error when writing code but in case of tuples we get an
// error.
// declare tuple
var swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);
var customerDetails;
customerDetails = {
    cName: lname,
    cAge: age,
    cRole: 1 /* Role.Coach */
};
console.log(customerDetails);
