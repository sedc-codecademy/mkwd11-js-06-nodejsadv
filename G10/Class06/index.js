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
// colors = white is 0
console.log(Colors.white === Colors.white);
