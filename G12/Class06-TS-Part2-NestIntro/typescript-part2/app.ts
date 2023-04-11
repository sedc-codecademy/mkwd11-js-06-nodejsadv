const serial: string | number = "100";

console.log((serial as string).length);

const testBtn = document.querySelector(".btn") as HTMLButtonElement;

// Typecasting is when we want to tell typescript exactly what the type is on a variable or when typescript is not sure or guessing incorrectly we need to typecast the varibale

// First way of typecasting
const textInput = document.querySelector(".username") as HTMLInputElement;

// Second way of typecasting
const anotherInput = <HTMLInputElement>document.querySelector(".password");

// These two will not work unless you typecast the above selectors to be of type HtmlInputElement
console.log(textInput.value);
console.log(anotherInput.value);

testBtn.addEventListener("click", () => {
  console.log("This always happens");
});

// Generics
// Generics can be used to add extra funcitonalities to existing interfaces by defining generic types which will be defined every single time we want to add a type to an object

// In this case the return type is a promise but we need to use the generic in the promise to define what kind of data the promise will resolve with
const getProducts = async (): Promise<string[]> => {
  return ["shoes", "machines", "books"];
};

const getStock = async (): Promise<number> => {
  return 150;
};

// How to manually define a generic type
interface Product<T> {
  title: string;
  stock: number;
  metaData: T;
}

interface WashingMachineMetaData {
  serialNumber: number;
  yearOfProduction: string;
}

const washingMachine: Product<WashingMachineMetaData> = {
  title: "Beco",
  stock: 52,
  metaData: {
    serialNumber: 123123123,
    yearOfProduction: "2022",
  },
};

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

// Partial makes any type or interface that you put into it have all of its properties optional, exactly like creating a new one and making everyhting optional by using ?:
const updateData: Partial<User> = {
  firstName: "Borche",
};

// npm i @nestjs/cli -g
