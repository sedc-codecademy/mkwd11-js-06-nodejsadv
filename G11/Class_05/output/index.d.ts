declare let firstName: string;
declare let lastName: string;
declare const result: number;
declare let valueOne: number;
declare let valueTwo: string;
declare const third_result: string;
declare let isWinter: boolean;
declare const isGreaterThen: boolean;
declare let value: any;
declare let fullName: string;
declare let multiplyResult: number;
declare let someResponse: unknown;
declare const MY_SYMBOL: unique symbol;
declare const addition: (numberOne: number, numberTwo: number) => number;
declare const multiplication: (numberOne: number, numberTwo: number) => number;
declare const returnFullName: (firstName: string, lastName: string, age: number) => string;
declare const greaterNumber: (numberOne: number, numberTwo: number) => string;
/**
 * void means, that the function/method does not return any value
 */
declare const myCalculation: (number: number) => void;
declare const bucketList: string[];
declare const mixedList: any[];
declare const numbersAndStringsArray: Array<string | number | boolean>;
declare const mixedArrayOfValues: (string | number | boolean)[];
declare const generated_id: string | number;
declare const generated_second_id: string | number;
declare let currentYear: string | number;
/**
 * blueprint of the structure for an object
 */
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    fullName: () => string;
}
declare const personOne: Person;
interface Product {
    name: string;
    price: number;
    origin?: string;
}
declare const bananas: Product;
declare const productTwo: Product;
declare const productThree: Product;
type Car = {
    model: string;
    yearOfProduction: number;
};
declare const carOne: Car;
type MyCostumNumber = number;
type MyCostumDate = Date;
declare let myNumber: MyCostumNumber;
declare const dateToday: MyCostumDate;
type MotorBike = {
    model: string;
    color: string;
};
/**
 * Every object that use the type Vehicle can be Car or Motorbike
 */
type Vehicle = Car | MotorBike;
declare const myVehicle: Vehicle;
interface Movie {
    name: string;
    releaseYear: string;
}
interface ComedyMovies extends Movie {
    category: string;
}
declare const movieOne: Movie;
declare const movieTwo: ComedyMovies;
interface Circle {
    kind: "circle" | "CIRCLE";
    radius: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
type Shape = Circle | Rectangle;
declare const calculateArea: (shape: Shape) => number;
declare const circle: Circle;
declare const rectangle: Rectangle;
declare enum PlayerMove {
    MOVE_UP = "w",
    MOVE_DOWN = "S",
    MOVE_LEFT = "A",
    MOVE_RIGHT = "D"
}
declare const playerMove = PlayerMove.MOVE_UP;
