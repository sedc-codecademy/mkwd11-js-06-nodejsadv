"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const serial = "100";
console.log(serial.length);
const testBtn = document.querySelector(".btn");
// Typecasting is when we want to tell typescript exactly what the type is on a variable or when typescript is not sure or guessing incorrectly we need to typecast the varibale
// First way of typecasting
const textInput = document.querySelector(".username");
// Second way of typecasting
const anotherInput = document.querySelector(".password");
// These two will not work unless you typecast the above selectors to be of type HtmlInputElement
console.log(textInput.value);
console.log(anotherInput.value);
testBtn.addEventListener("click", () => {
    console.log("This always happens");
});
// Generics
// Generics can be used to add extra funcitonalities to existing interfaces by defining generic types which will be defined every single time we want to add a type to an object
// In this case the return type is a promise but we need to use the generic in the promise to define what kind of data the promise will resolve with
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return ["shoes", "machines", "books"];
});
const getStock = () => __awaiter(void 0, void 0, void 0, function* () {
    return 150;
});
const washingMachine = {
    title: "Beco",
    stock: 52,
    metaData: {
        serialNumber: 123123123,
        yearOfProduction: "2022",
    },
};
// Partial makes any type or interface that you put into it have all of its properties optional, exactly like creating a new one and making everyhting optional by using ?:
const updateData = {
    firstName: "Borche",
};
// npm i @nestjs/cli -g
