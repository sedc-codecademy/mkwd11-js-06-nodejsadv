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
function flatten(array, result) {
    if (result === void 0) { result = []; }
    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flatten(array[i], result);
        }
        else {
            result.push(array[i]);
        }
    }
    return result;
}
var list = [1, 2, [2, 3, [4, 5, [6, 7], [5], 12], [4, 5], 5]];
console.log(flatten(list));
// Class
var Calculator = /** @class */ (function () {
    function Calculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
        // Private property in JS
        // #name = 'Ivo'
        // Private property in TS
        this.name = 'Ivo';
        this.name;
    }
    return Calculator;
}());
var newCalc = new Calculator(1);
console.log(newCalc);
// newCalc.name
