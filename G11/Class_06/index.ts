// Classes In Typescript

class SimpleClass {
    propertyOne: string;
    propertyTwo: number;
 
    constructor(
        propertyOne: string, 
        propertyTwo: number,
        /**
         * public => the public modifier assigned the value for us (private, protected)
         * this.simplePropThree = simplePropThree;
         */
        public simplePropThree: string,
        ){
        this.propertyOne = propertyOne;
        this.propertyTwo = propertyTwo;
     
    }

}


const simpleObj = new SimpleClass("Simple value", 2000, "Simple three");

console.log(simpleObj);


console.log("**** EXTENDING / INHERITING ****");

class ParentClass {
    description = "I am property of parent class"
}

class ChildClass extends ParentClass {
    constructor(){
        // console.log(this.description) //error
        super()
        console.log(this.description) // OK => we must use super() in order to use props from the parent in the child's constructor
    }

    describeYourSelf(){
        console.log(this.description)
    }
};

const childObject = new ChildClass();

console.log(childObject);
childObject.describeYourSelf();


console.log("**** IMPLEMENTS ****");

interface IAnimal {
    name: string;
    category: string
}

const animalObject: IAnimal = {
    name: "Animal Name",
    category: "Animal Category"
};

console.log(animalObject);

// * We can implement 1 or more Intefaces
class Dog implements IAnimal {
    // # WAY 1

    // name: string;
    // category: string;

    // constructor(name: string, category:string){
    //     this.name = name;
    //     this.category = category
    // }

    // # WAY 2 => Same as above but shorter, using TS class's modifier
    constructor(public name:string, public category: string){}

    bark(){
        console.log(`${this.name} is barking!`);
    }
}

const dog = new Dog("Bubi", "mammal");
console.log(dog)
dog.bark();


class Labrador extends Dog {
    constructor(
        public name: string, 
        public category: string,
        public color: string,
        public breed: string
        ){
        super(name, category);
    }

    play(personName: string): string{
        return `${personName} is playing fetch with ${this.name}!`
    }
};

const labrador = new Labrador("Aron", "Mammal", "Black", "Very Happy Labrador");

console.log(labrador)
labrador.bark()
console.log(labrador.play("John"))

console.log("**** Private Props & getters and setters ****");

class Person {
    constructor(
        public firstName: string,
        private _age: number
    ){}

    showAge(){ // our costum getter method ;)
        //Private props are only available inside the class
        console.log(this._age)
        return this._age
    }

    //getters
    get age(){
        console.log("We are in getter")
        return this._age
    }


    //setters
    set age( ageValue: number ){
        console.log("WE ARE IN SETTER")
        console.log("VALUE ", ageValue)

        if(ageValue <= 0){
            throw new Error(" WRONG VALUE FOR AGE ")
        }
        this._age = ageValue
    }
}

const personOne = new Person("John", 23);
console.log(personOne);
console.log(personOne.firstName);
// console.log(personOne._age) // error => cannot access private property outside the class
personOne.showAge();
console.log('getter', personOne.age)
console.log("CHANGE THE AGE")
personOne.age = 30; // INVOKING THE SETTER
console.log(personOne)

// personOne.age = 0 // SETTER WILL THROW AN ERROR

const personTwo = new Person("Bob", 0);
console.log(personTwo);

// EXAMPLE TWO: 

enum EngineType {
    DIESEL = "DieselEngine",
    GAS = "GAS",
    ELECTRIC = "ELECTRIC",
    LPG = "LPG"
}

console.log(EngineType.DIESEL)
class Car {
    private _supportedEngines = [
        EngineType.DIESEL, EngineType.GAS
    ]

    constructor(private _model: string, private _engineType: EngineType){
        this.engineType = _engineType; // will trigger the setter when we create new object
    }

    //getters
    // when we acess just the prop. the getter is called
    get model () {
        return this._model
    }

    get engineType(){
        return this._engineType
    }

    //setters
    // when we assign new value with " = " the setter is called
    set engineType(engine: EngineType){
        if( !this._supportedEngines.includes(engine) ){
            throw new Error("Unsupported engine type")
        }

        this._engineType = this.engineType
    }
};

const car = new Car("Fiat Punto", EngineType.GAS);
console.log(car)
console.log(car.model)
console.log(car.engineType)

// const ladaNiva = new Car("Lada Niva", EngineType.ELECTRIC); // Error: Unsupported Engine
// console.log(ladaNiva)

console.log("**** PUBLIC, PRIVATE, PROTECTED, READONLY ****");

class BaseClass {
    someProp = "Some prop" // by default it is public
    public publicProp = "Public Property"
    private _privateProp = "Private Property"
    readonly readonlyProp = "Readonly Property"
    protected protectedProp = "Proptected Property"

    privateProps(){
        console.log(`The private props are only accessable in the class such as: ${this._privateProp}  ${this.protectedProp}`)
    }

    changeReadonly(){
        // this.readonlyProp = "qwe"
    }

  
}

const baseObject = new BaseClass()
// Public properties are accessable outside of the class
console.log(baseObject.someProp)
console.log(baseObject.publicProp)
// Private props
// console.log(baseObject.privateProp) // error => cannot access private props outside of the class
baseObject.privateProps()
// Protected
// console.log(baseObject.protectedProp) // error => cannot access protected props outside of the class
// Readonly 
console.log(baseObject.readonlyProp)
// baseObject.readonlyProp = "Some new value" // error => cannot assign new value to read only prop.

console.log("** SUB CLASS **")
class SubClass extends BaseClass {

    //We cannot access the private props from the parent in the child
    showPrivate(){
        // console.log(this.privateProp)
    }

    //We can access the protected props from the child =)
    showPublic(){
        console.log(this.protectedProp)
    }

  

}

const subClassObj = new SubClass();

console.log(subClassObj)
subClassObj.showPublic()


console.log("**** ABSRACT CLASSES ****");

abstract class Shape {

    abstract area(): number 

}
// const shape = new Shape() error: we cannot create new instance out of abstract classes

class Rectangle extends Shape {
    constructor(private width: number, private height: number){
        super()
    }

    area(): number {
        return this.width * this.height
    }
}

const rectangle = new Rectangle(10 ,5);
console.log(rectangle.area());

class Circle extends Shape {

    constructor(private radius: number){
        super()
    }

    area(): number {
        return Math.PI * this.radius ** 2
    }
}

const circle = new Circle(5)
console.log(circle.area())


console.log("**** GENERICS ****");

// Interface
interface Person {
    fullName: string;
    age: number;
}

interface Pair<T, U> {
    first: T,
    second: U
}

const pairOne: Pair<string, string | number > = {
    first: "Hello world",
    second: 123  
}

console.log(pairOne);


const pairTwo: Pair<number, number> = {
    first: 100,
    second: 200
}

console.log(pairTwo)

const pairThree: Pair<string, boolean> = {
    first: "Hello world",
    second: true
}
console.log(pairThree)
const pairFourth: Pair<number, string> = {
    first: 110,
    second: "I am second and i am string"
}
console.log(pairFourth)


// Functions

function toArray<T>(params: T): T[] {
    return [params]
}
const arrOne = toArray<number>(40)
console.log(arrOne)

const arrTwo = toArray<string>("Pineapples")
console.log(arrTwo)