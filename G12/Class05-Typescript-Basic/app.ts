let firstName: string = "Borche";

firstName = "Ivche";

console.log(firstName);

// Primitive data types in typescript

const lastName: string = "Borisovski";

const age: number = 30;

const isActive: boolean = true;

// If we don't explicitly set the type of a variable but we initialize with a value typescript will take the type of that value and add it as a type to that variable
const empty = null;

// When we don't initialize a variable with a value we should always set the type beforehand
let academyName: string;

// Any is forbidden by law of Borche the trainer
let dontUseMe: any = "i can cause you headache";

dontUseMe = ["I really can make you hurt"];

dontUseMe = undefined;

// Objects

const user: {
  firstName: string;
  title: string;
  age: number;
} = {
  firstName: "Ivche",
  title: "The Assistant",
  age: 20,
};

type User = {
  firstName?: string;
  title?: string;
  age: number;
};

const userTwo: User = {
  firstName: "Borche",
  title: "The Trainer",
  age: 30,
};

// Arrays

const fruits: string[] = ["apples", "oranges", "lemons"];

const numArray: number[] = [];

numArray.push(1, 3, 2, 2, 2);

const usersArray: User[] = [user, userTwo];

// Union types

// If overused union types are the same as any and can only reduce all the benefits that you gain from typescript
let academyNameTwo: string | number = "SEDC";

// Be extremely careful when mixing types in arrays because usually in 99% of development situations we don't need to mix different types of data in an array
const mixedArray: (string | number)[] = [1, 2, 3, "4", "5", "Six"];

academyNameTwo = 1320;

// Enums

enum Classic {
  TYPE_ONE,
  TYPE_TWO,
  TYPE_THREE,
}

enum Status {
  ACTIVE = "active",
  ON_HOLD = "on-hold",
  CANCELLED = "cancelled",
}

// Example of how this would be done in vanilla javascript
// const taskStatus = {
//   ACTIVE: "active",
//   FINISHED: "finished",
// };

type Device = {
  title: string;
  status: Status;
};

const newDevice = {
  title: "Washing machine",
  status: Status.ACTIVE,
};

// Functions
//All arguments in functions need to be given a type and after the argument list you can add the return type yourself or you can let typescript use type inference for you and guess the return type
const addTwoNumbers = (numOne: number, numTwo: number): number => {
  return numOne + numTwo;
};

// Functions in typescript must be called with the exact number and type of arguments
const result = addTwoNumbers(10, 25);

// Functions or methods that don't return a value have a default return type of void which is also present in other languages and it means empty return
const printFullName = (firstName: string, lastName: string): void => {
  console.log(`${firstName} ${lastName}`);
};

// ?:  is used to declare some arguments to be optional and they do not need to be provided
const sayHello = (name?: string) => {
  console.log(`${name || "User"}says hello`);
};

sayHello();
sayHello("Risto");

// Interfaces

interface Product {
  title: string;
  stock: number;
  description: string;
  category: string;
  price: number;
  //   Using ?: for an interface property or a type property makes it optional and it doesn't have to be provided when objects are created
  rating?: number;

  //   Methods in interface are rarer than properties
  //   printInfo: () => void;
}

const shoes: Product = {
  title: "Shoes",
  stock: 110,
  description: "shiny new shoes, what did you expect",
  price: 1299,
  category: "footwear",

  //   printInfo() {
  //     console.log(`${this.title} : ${this.description}`);
  //     return 200;
  //   },
};

// This is the classic or vanilla way of working with constructors
export class WashingMachine implements Product {
  title: string;
  stock: number;
  description: string;
  category: string;
  price: number;

  constructor(
    title: string,
    stock: number,
    description: string,
    price: number,
    category: string
  ) {
    this.title = title;
    this.stock = stock;
    this.description = description;
    this.price = price;
    this.category = category;
  }

  printTest() {
    console.log("test");
  }
}

// Modern typescript way of working with classes
class Laptop implements Product {
  readonly productionYear = 2017;
  // Private can only be accessed by the class meaning constructor function and methods
  private serialCode: string = "123123j123j123jh123hj1";

  constructor(
    // Field accessors allow us to skip a lot of typing when using constructors
    public title: string,
    public stock: number,
    public description: string,
    public price: number,
    public category: string
  ) {}

  changeSerialCode(newCode: string) {
    if (newCode.length !== 10) return;

    this.serialCode = newCode;
  }

  getSerialCode() {
    return this.serialCode;
  }
}

const dellAlienware = new Laptop(
  "Dell Alienware",
  102,
  "It is a fancy laptop, what did you expect",
  1500,
  "Computers"
);

dellAlienware.title = "Hacked by RUSKI";
// dellAlienware.serialCode = "random";
dellAlienware.changeSerialCode("1234567890");

console.log(dellAlienware.getSerialCode());

dellAlienware.productionYear;

// Exercise using typescript write a small javascript program that will have the following functionality

/*
    1. Create an array that will contain objects of type Student ( create interface with properties by your choice)
    2. Create methods for creating, printing, updating or deleting students ( add type safety to all of them )
    3. Whenever possible use typescript to help you catch errors before they happen
*/
