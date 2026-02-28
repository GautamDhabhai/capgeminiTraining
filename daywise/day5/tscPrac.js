console.log("Hello World!");
console.log("hey there");
var a = 10;
a = 20;
// a = "Hello"; // This will cause an error because 'a' is inferred to be of type 'number'
// -----> explicitly declaring a variable as a type (boolean, string, number etc..) is called type annotation <-----
var x = true;
var nullValue = null;
var undefinedValue = undefined;
// nullValue = undefined; // This will cause an error because 'nullValue' is explicitly declared as 'null'
// undefinedValue = null; // This will also cause an error because 'undefinedValue' is explicitly declared as 'undefined'
//nullValue = 10; // This will cause an error because 'nullValue' is explicitly declared as 'null' and cannot be assigned a number
// undefinedValue = "Hello"; // This will also cause an error because 'undefinedValue' is explicitly declared as 'undefined' and cannot be assigned a string
var b = 30;
b = 40;
// b = "World"; // This will also cause an error because 'b' is explicitly declared as a number
var c = "hey";
// c = 40; // This will cause an error because 'c' is inferred to be of type 'string'
var d = "hello";
d = 50; // This is allowed because 'd' is of type 'any'
d = true; // This is also allowed because 'd' is of type 'any'
var undef;
undef = 10; // This is allowed because 'undef' is of type 'any' (implicitly)
undef = "hello"; // This is also allowed because 'undef' is of type 'any' (implicitly)
//console.log(undef); // Output: "hello" because the last assigned value to 'undef' is "hello"
//array and tuples
var arr = [1, 2, 3, true, "hey"]; // homogeneous array of numbers we can add other data types to this array
var arr1 = [1, 2, 3]; // homogeneous array of numbers we cannot add a string to this array
var arr2 = ["hello", 10, true]; // tuple of string, number and boolean
// arr2[0] = 10; // This will cause an error because the first element of the tuple is explicitly declared as a string
// arr2[1] = "world"; // This will also cause an error because the second element of the tuple is explicitly declared as a number
// arr2[2] = "false"; // This will also cause an error because the third element of the tuple is explicitly declared as a boolean
arr2.push("new vale"); // This is allowed because tuples in TypeScript are not strictly enforced and can have additional elements added to them, even if they were defined with a specific length and types.
var arr3 = [1, "hello", true]; // array of any type we can add any data type to this array
arr3.push(10); // This is allowed because 'arr3' is an array of type 'any'
//console.log(arr3); // Output: [1, "hello", true, 10];
var tple = ["hello", 10];
tple.push(34);
tple.push("world");
console.log(tple); // Output: ["hello", 10, 34, "world"] because tuples in TypeScript are not strictly enforced and can have additional elements added to them, even if they were defined with a specific length and types.
var stud = {
    name: "JID",
    age: 20
}; //this is explicitly declaring an object with specific properties and their types
// function greet(name, age){
//     console.log(`Hello ${name}, you are ${age} years old!`);
// }
//greet("JID", 20); // Output: Hello JID, you are 20 years old!
//explicitly declaring the types of the parameters of the function
function greet2(name, age) {
    if (age === void 0) { age = 20; }
    console.log("Hello ".concat(name, ", you are ").concat(age, " years old!"));
}
greet2("JID"); // This will not cause an error because the second parameter 'age' has a default value of 20, so it is optional when calling the function. If you do not provide a value for 'age', it will default to 20. Output: Hello JID, you are 20 years old! you can also put ? after the parameter name to make it optional like this: function greet2(name: string, age?: number) and then you can call the function like this: greet2("JID") and it will work without any errors.
function add(a, b) {
    return a + b;
}
console.log("add function -> ".concat(add(10, 20))); // Output: 30
//function with return type annotation
function multiply(a, b) {
    return a * b;
}
console.log("multiply function -> ".concat(multiply(10, 20))); // Output: 200
//function with void return type annotation
function logMessage(message) {
    console.log(message);
}
logMessage("Hello World!"); // Output: Hello World!
//arrow function
var minus = function (a, b) {
    return a - b;
};
console.log("minus function -> ".concat(minus(20, 10))); // Output: 10
//arrow function with implicit return
var arrowGreet = function (nameVar) { return "Hello ".concat(nameVar, "!"); };
console.log("arrowGreet function -> ".concat(arrowGreet("JID"))); // Output: Hello JID!
var unionArr = [234, "gautam", "hello", 245];
unionArr.push("newElem");
console.log(unionArr);
// let unionArr: readonly (string | number)[] = [234,"gautam", "hello", 245];
// unionArr.push("newElem"); this will give error because its readonly so cant push
console.log(typeof (unionArr));
;
var obj = {
    id: 1,
    name: "JID",
    age: 41,
    //gender: "male" its fine to omit the gender property because it is optional (denoted by the ? in the interface definition)
};
//obj.id = 2; // This will give an error because 'id' is a readonly property and cannot be reassigned
obj.name = "J-COLE"; // This is allowed because 'name' is not a readonly property and can be reassigned
var myDog = {
    name: "Buddy",
    age: 5,
    breed: "Golden Retriever"
};
console.log(myDog); // Output: { name: "Buddy", age: 5, breed: "Golden Retriever" }
var myCar = {
    brand: "bugatti",
    color: "red",
    sunroof: function () {
        return "This car has a sunroof!";
    }
};
console.log(myCar); // Output: { brand: "bugatti", color: "red", sunroof: [Function: sunroof] }
console.log(myCar.sunroof()); // Output: This car has a sunroof!
