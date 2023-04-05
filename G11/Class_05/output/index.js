console.log("Hello from ts file.");
// **** BASIC TYPES ****
// STRING
var firstName;
var lastName;
firstName = "John";
// lastName = 4;  // Oops error =) cannot assign number type to string 
//NUMBERS
var result = 5 * 3;
// const second_result: number = 10 + "3" //error =)
var valueOne = 10;
var valueTwo = "20";
var third_result = valueOne + valueTwo;
console.log(third_result);
console.log(typeof third_result);
//BOOLEAN
var isWinter;
// isWinter = "Yes" // error =)
isWinter = true;
isWinter = false;
var isGreaterThen = 20 < 100;
// ANY not recommended;
var value = "This is any value";
console.log(value);
value = 22;
console.log(value);
value = { firstName: "John" };
console.log(value);
//TYPE INFERENCE
//is when typescript recongise what is the data type of the variable
var fullName = "John Doe";
//fullName = 2023 // error
var multiplyResult = 20 * 33;
// Unknown => safe any
var someResponse;
// Symbol
var MY_SYMBOL = Symbol("MY_COSTUM_SYMBOL");
console.log(MY_SYMBOL);
// FUNCTIONS
console.log('**** FUNCTION ****');
var addition = function (numberOne, numberTwo) {
    return numberOne + numberTwo;
};
console.log(addition(10, 2));
var multiplication = function (numberOne, numberTwo) {
    var result = numberOne * numberTwo;
    return result;
};
var returnFullName = function (firstName, lastName, age) {
    var fullName = "Fullname is: ".concat(firstName, " ").concat(lastName, " is ").concat(age, " years old.");
    // return 1000 //error 
    return fullName;
    // return '1000'
};
console.log(returnFullName("Bob", "Bobski", 28));
var greaterNumber = function (numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return "".concat(numberOne, " is greater then ").concat(numberTwo);
    }
    return "".concat(numberOne, " is less then ").concat(numberTwo);
};
console.log(greaterNumber(20, 10));
/**
 * void means, that the function/method does not return any value
 */
var myCalculation = function (number) {
    console.log(number);
};
// ARRAYS
console.log('**** ARRAYS ****');
// const bucketList: Array<string> = ["Banans", "Strawberries"];
var bucketList = ["Bread", "Milk", "Cheese"]; // array of strings
var mixedList = ["String value", 20, false, undefined];
var numbersAndStringsArray = [2, "hello world", 123, false];
var mixedArrayOfValues = ['string vlaue', 213, true];
// UNION
console.log('**** UNION ****');
var generated_id = "someId";
var generated_second_id = 123;
var currentYear;
currentYear = 2023;
currentYear = "2023";
// MORE COMPLEX DATA TYPES
// INTERFACE
console.log('**** INTERFACE ****');
;
var personOne = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function () {
        return "Full name is: ".concat(this.firstName, " ").concat(this.lastName);
    },
};
console.log(personOne);
console.log(personOne.fullName());
;
var bananas = {
    name: "Banana",
    price: 75,
    origin: "Ecuador"
};
var productTwo = {
    name: "Strawberries",
    price: 100
};
console.log(bananas, productTwo);
// ASSERTION
console.log('**** ASSERTION ****');
var productThree = {};
console.log(productThree);
// TYPE
console.log('**** TYPE ****');
var carOne = {
    model: "Lada Niva",
    yearOfProduction: 2008
};
console.log(carOne);
// interface MyCostumNumberInterface = number; // error, we cannot do that using interfaces
var myNumber = 25;
//let mySecondNumber: MyCostumNumber = "123"; //error
var dateToday = new Date();
console.log(dateToday);
var myVehicle = {
    model: "Yamaha",
    yearOfProduction: 2010,
    color: "red",
    // engine: ""  // error, because engine does not exist in Car on MotorBike
};
console.log(myVehicle);
// EXTENDING
console.log('**** EXTENDING ****');
;
;
var movieOne = {
    name: "John Wick",
    releaseYear: "2010"
};
console.log(movieOne);
var movieTwo = {
    name: "Mr.Bean's Holiday",
    releaseYear: "2008",
    category: "Comedy"
};
console.log(movieTwo);
// TYPE GUARDS
console.log('**** TYPE GUARDS ****');
var calculateArea = function (shape) {
    if (shape.kind === "circle" || shape.kind === "CIRCLE") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
};
var circle = {
    kind: "CIRCLE",
    radius: 5
};
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
console.log(calculateArea(circle));
console.log(calculateArea(rectangle));
// ENUMS
console.log('**** ENUMS ****');
var PlayerMove;
(function (PlayerMove) {
    PlayerMove["MOVE_UP"] = "w";
    PlayerMove["MOVE_DOWN"] = "S";
    PlayerMove["MOVE_LEFT"] = "A";
    PlayerMove["MOVE_RIGHT"] = "D";
})(PlayerMove || (PlayerMove = {}));
var playerMove = PlayerMove.MOVE_UP;
console.log(playerMove);
