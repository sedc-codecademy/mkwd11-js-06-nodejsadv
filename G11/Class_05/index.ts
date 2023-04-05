console.log("Hello from ts file.");

// **** BASIC TYPES ****

// STRING

let firstName: string;
let lastName: string;

firstName = "John";

// lastName = 4;  // Oops error =) cannot assign number type to string 

//NUMBERS

const result: number = 5 * 3;
// const second_result: number = 10 + "3" //error =)

let valueOne: number = 10;
let valueTwo: string = "20";

const third_result: string = valueOne + valueTwo; 

console.log(third_result);
console.log(typeof third_result);

//BOOLEAN
let isWinter: boolean;

// isWinter = "Yes" // error =)
isWinter = true;
isWinter = false;

const isGreaterThen: boolean = 20 < 100;

// ANY not recommended;

let value: any = "This is any value";
console.log(value);

value = 22;
console.log(value)

value = {firstName: "John"};
console.log(value);

//TYPE INFERENCE
//is when typescript recongise what is the data type of the variable
let fullName = "John Doe";

//fullName = 2023 // error

let multiplyResult = 20 * 33;


// Unknown => safe any
let someResponse: unknown

// Symbol

const MY_SYMBOL = Symbol("MY_COSTUM_SYMBOL");
console.log(MY_SYMBOL);

// FUNCTIONS
console.log('**** FUNCTION ****')

const addition = (numberOne: number, numberTwo: number) => {

    return numberOne + numberTwo
}

console.log(addition(10, 2))

const multiplication = (numberOne: number, numberTwo: number): number => {
    const result = numberOne * numberTwo;

    return result;
};


const returnFullName = (firstName: string, lastName: string, age: number): string => {

    const fullName: string = `Fullname is: ${firstName} ${lastName} is ${age} years old.`;

    // return 1000 //error 
    return fullName
    // return '1000'
}

console.log(returnFullName("Bob", "Bobski", 28));

const greaterNumber = (numberOne: number, numberTwo: number): string => {
    if(numberOne > numberTwo){
        return `${numberOne} is greater then ${numberTwo}`
    }

    return `${numberOne} is less then ${numberTwo}`
}

console.log(greaterNumber(20, 10));

/**
 * void means, that the function/method does not return any value
 */
const myCalculation = (number: number): void => {
    console.log(number);
}

// ARRAYS
console.log('**** ARRAYS ****');

// const bucketList: Array<string> = ["Banans", "Strawberries"];
const bucketList: string[] = ["Bread", "Milk", "Cheese"] // array of strings

const mixedList: any[] = ["String value", 20, false, undefined]

const numbersAndStringsArray: Array<string | number | boolean> = [2, "hello world", 123, false];

const mixedArrayOfValues: (string | number | boolean)[] = ['string vlaue', 213, true]

// UNION
console.log('**** UNION ****');

const generated_id: string | number = "someId"
const generated_second_id: string | number = 123

let currentYear: string | number; 

currentYear = 2023;
currentYear = "2023";

// MORE COMPLEX DATA TYPES
// INTERFACE
console.log('**** INTERFACE ****');

/**
 * blueprint of the structure for an object
 */

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    fullName: () => string;
};

const personOne: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,

    fullName() {
        return `Full name is: ${this.firstName} ${this.lastName}`
    },
};

console.log(personOne);
console.log(personOne.fullName());

interface Product {
    name: string;
    price: number;
    origin?: string; // ? OPTIONAL, which means the property is optional
};

const bananas: Product = {
    name: "Banana",
    price: 75,
    origin: "Ecuador"
}

const productTwo: Product = {
    name: "Strawberries",
    price: 100
}

console.log(bananas, productTwo)

// ASSERTION
console.log('**** ASSERTION ****');
const productThree: Product = {} as Product;
console.log(productThree);

// TYPE
console.log('**** TYPE ****');

//similar to interfaces

type Car = {
    model: string;
    yearOfProduction: number;
}

const carOne: Car = {
    model: "Lada Niva",
    yearOfProduction: 2008
};

console.log(carOne);

type MyCostumNumber = number;
type MyCostumDate = Date;

// interface MyCostumNumberInterface = number; // error, we cannot do that using interfaces


let myNumber: MyCostumNumber = 25;
//let mySecondNumber: MyCostumNumber = "123"; //error

const dateToday: MyCostumDate = new Date();
console.log(dateToday);


type MotorBike = {
    model: string;
    color: string
};

/**
 * Every object that use the type Vehicle can be Car or Motorbike
 */
type Vehicle = Car | MotorBike;


const myVehicle: Vehicle = {
    model: "Yamaha",
    yearOfProduction: 2010,
    color: "red",
    // engine: ""  // error, because engine does not exist in Car on MotorBike
};

console.log(myVehicle);

// EXTENDING
console.log('**** EXTENDING ****');

interface Movie {
    name: string;
    releaseYear: string;
};

interface ComedyMovies extends Movie {
    category: string
};

const movieOne: Movie = {
    name: "John Wick",
    releaseYear: "2010"
}

console.log(movieOne)


const movieTwo: ComedyMovies = {
    name: "Mr.Bean's Holiday",
    releaseYear: "2008",
    category: "Comedy"
}

console.log(movieTwo);

// TYPE GUARDS
console.log('**** TYPE GUARDS ****');

interface Circle {
    kind: "circle" | "CIRCLE"; // kind can have ONLY the value 'circle' or 'CIRCLE'
    radius: number
}

interface Rectangle {
    kind: "rectangle",
    width: number,
    height: number
}

type Shape = Circle | Rectangle;

const calculateArea = (shape: Shape): number => {
    if(shape.kind === "circle" || shape.kind === "CIRCLE"){
        return Math.PI * shape.radius ** 2
    }
    else if(shape.kind === "rectangle"){
        return shape.width * shape.height
    }
}

const circle: Circle = {
    kind: "CIRCLE",
    radius: 5
}

const rectangle: Rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};

console.log(calculateArea(circle))
console.log(calculateArea(rectangle))


// ENUMS
console.log('**** ENUMS ****');

enum PlayerMove  {
    MOVE_UP="w",
    MOVE_DOWN="S",
    MOVE_LEFT="A",
    MOVE_RIGHT="D"
}

const playerMove = PlayerMove.MOVE_UP
console.log(playerMove)