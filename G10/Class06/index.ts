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

// Arrays

// Option 1
let numbers: number[] = [1, 2, 3]

// Option 2
let numbersAgain: Array<number> = [1, 2, 3]

// Tuple
let employees: [number, string] = [1, 'Ivo']

// Any - Use with caution!!!
let randomStuff: any[] = [true, [], 'nekoj string', 1 ]

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

let anything: any = 'sdasda';

let mistery: unknown;

// void

const func = (): void => {
    console.log('nesto')
}

const func2 = (): never => {
    throw new Error('Some error')
}

const sumOfTwo = (number1: number, number2: number): number => {
    return number1 + number2
}

const sum = sumOfTwo(1, 2)

// sumOfTwo('1', '2')

console.log(sum)

const sumOfItems = (item1: number | string, item2: number | string): any => {
    // console.log(typeof item1)
    // console.log(typeof item2)
    // return item1 + item2

    if (typeof item1 === 'number' && typeof item2 === 'number') {
        return item1 + item2
    }

    return `${item1}${item2}`
}

console.log(sumOfItems(1, '2'))