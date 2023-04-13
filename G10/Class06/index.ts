// Basic Types

//JS Types
// String
// 'string'

// Boolean
// 'boolean'

// String
let firstName: string = 'Ivo';

// Boolean
let isDone: boolean = false;

// Number
let animalsCount: number = 3;

// let number1: bigint = 321351267531;

// Enum
const weekdays = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday'
};

console.log(weekdays.monday)

enum Weekdays {
    monday = 'Monday',
    tuesday = 'Tuesday',
    wednesday = 'Wednesday',
    thursday = 'Thursday',
    friday = 'Friday',
    saturday = 'Saturday',
    sunday = 'Sunday'
}

console.log(Weekdays.monday)

enum Colors {
    white, // 0
    green, // 1
    yellow, // 2
    red // 3
}

console.log(Colors.green)
console.log(Colors.white === Colors.white)