// Basic Types
//JS Types
// String
// 'string'
// Boolean
// 'boolean'
// String
var firstName = 'Ivo';
// Boolean
var isDone = false;
// Number
var animalsCount = 3;
// let number1: bigint = 321351267531;
// Enum
var weekdays = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday'
};
console.log(weekdays.monday);
var Weekdays;
(function (Weekdays) {
    Weekdays["monday"] = "Monday";
    Weekdays["tuesday"] = "Tuesday";
    Weekdays["wednesday"] = "Wednesday";
    Weekdays["thursday"] = "Thursday";
    Weekdays["friday"] = "Friday";
    Weekdays["saturday"] = "Saturday";
    Weekdays["sunday"] = "Sunday";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays.monday);
var Colors;
(function (Colors) {
    Colors[Colors["white"] = 0] = "white";
    Colors[Colors["green"] = 1] = "green";
    Colors[Colors["yellow"] = 2] = "yellow";
    Colors[Colors["red"] = 3] = "red"; // 3
})(Colors || (Colors = {}));
console.log(Colors.green);
console.log(Colors.white === Colors.white);
// Arrays
// Option 1
var numbers = [1, 2, 3];
// Option 2
var numbersAgain = [1, 2, 3];
// Tuple
var employees = [1, 'Ivo'];
// Any - Use with caution!!!
var randomStuff = [true, [], 'nekoj string', 1];
// Interfaces
// interface Animal {
//     name: string;
//     age: number
// }
// let animal: Animal = {
//     name: 'Sparky',
//     age: 23
// }
// let newAnimal = {
//     name: 'Blacky',
//     age: 10
// } satisfies Animal;
// Types
// type Animal = {
//     name: string;
//     age: number;
// }
// type Nullish = undefined | null;
// let nothing: Nullish = undefined;
// Objects
// interface Person {
//     name: string;
//     age: number;
// }
// let emptyObject = {} as Person;
// let test = 'black' as any as Person;
// interface Employee extends Person {
//     job: string;
// }
// const newEmployee: Employee = {
//     name: 'John',
//     age: 20, 
//     job: 'teacher'
// }
// Other types
var anything = 'sdasda';
var mistery;
// void
var func = function () {
    console.log('nesto');
};
var func2 = function () {
    throw new Error('Some error');
};
var sumOfTwo = function (number1, number2) {
    return number1 + number2;
};
var sum = sumOfTwo(1, 2);
// sumOfTwo('1', '2')
console.log(sum);
var sumOfItems = function (item1, item2) {
    // console.log(typeof item1)
    // console.log(typeof item2)
    // return item1 + item2
    if (typeof item1 === 'number' && typeof item2 === 'number') {
        return item1 + item2;
    }
    return "".concat(item1).concat(item2);
};
console.log(sumOfItems(1, '2'));
