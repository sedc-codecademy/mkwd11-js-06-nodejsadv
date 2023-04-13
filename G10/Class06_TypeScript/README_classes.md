# Classes

## Class Members
Here’s the most basic class - an empty one:
```
class Point {}
```

This class isn’t very useful yet, so let’s start adding some members.

### Fields

A field declaration creates a public writeable property on a class:

```
class Point {
  x: number;
  y: number;
}
 
const pt = new Point();
pt.x = 0;
pt.y = 0;
```

As with other locations, the type annotation is optional, but will be an implicit any if not specified.

Fields can also have initializers; these will run automatically when the class is instantiated:

```
class Point {
  x = 0;
  y = 0;
}
 
const pt = new Point();
// Prints 0, 0
console.log(`${pt.x}, ${pt.y}`);
```

Just like with const, let, and var, the initializer of a class property will be used to infer its type:

```
const pt = new Point();
pt.x = "0";
Type 'string' is not assignable to type 'number'.
```

### Constructors

Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:

```
class Point {
  x: number;
  y: number;
 
  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Point {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}
```

There are just a few differences between class constructor signatures and function signatures:

- Constructors can’t have type parameters - these belong on the outer class declaration, which we’ll learn about later
- Constructors can’t have return type annotations - the class instance type is always what’s returned

#### Super Calls
Just as in JavaScript, if you have a base class, you’ll need to call super(); in your constructor body before using any this. members:

```
class Base {
  k = 4;
}
 
class Derived extends Base {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    console.log(this.k);
'super' must be called before accessing 'this' in the constructor of a derived class.
    super();
  }
}
```

Forgetting to call super is an easy mistake to make in JavaScript, but TypeScript will tell you when it’s necessary.

### Methods

A function property on a class is called a method. Methods can use all the same type annotations as functions and constructors:

```
class Point {
  x = 10;
  y = 10;
 
  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
```

Other than the standard type annotations, TypeScript doesn’t add anything else new to methods.

Note that inside a method body, it is still mandatory to access fields and other methods via this.. An unqualified name in a method body will always refer to something in the enclosing scope:

```
let x: number = 0;
 
class C {
  x: string = "hello";
 
  m() {
    // This is trying to modify 'x' from line 1, not the class property
    x = "world";
Type 'string' is not assignable to type 'number'.
  }
}
```


### Getters / Setters
Classes can also have accessors:

```
class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}
```

Note that a field-backed get/set pair with no extra logic is very rarely useful in JavaScript. It’s fine to expose public fields if you don’t need to add additional logic during the get/set operations.

TypeScript has some special inference rules for accessors:

- If get exists but no set, the property is automatically readonly
- If the type of the setter parameter is not specified, it is inferred from the return type of the getter
- Getters and setters must have the same Member Visibility
Since TypeScript 4.3, it is possible to have accessors with different types for getting and setting.

```
class Thing {
  _size = 0;
 
  get size(): number {
    return this._size;
  }
 
  set size(value: string | number | boolean) {
    let num = Number(value);
 
    // Don't allow NaN, Infinity, etc
 
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }
 
    this._size = num;
  }
}
```


## Class Heritage
Like other languages with object-oriented features, classes in JavaScript can inherit from base classes.

`implements` Clauses
<br>
You can use an implements clause to check that a class satisfies a particular interface. An error will be issued if a class fails to correctly implement it:

```
interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
 
class Ball implements Pingable {
Class 'Ball' incorrectly implements interface 'Pingable'.
  Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
  pong() {
    console.log("pong!");
  }
}
```

Classes may also implement multiple interfaces, e.g. `class C implements A, B `

`extends` Clauses
<br>

Classes may extend from a base class. A derived class has all the properties and methods of its base class, and also define additional members.

```
class Animal {
  move() {
    console.log("Moving along!");
  }
}
 
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}
 
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
```

### Overriding Methods

A derived class can also override a base class field or property. You can use the super. syntax to access base class methods. Note that because JavaScript classes are a simple lookup object, there is no notion of a “super field”.

TypeScript enforces that a derived class is always a subtype of its base class.

For example, here’s a legal way to override a method:

```
class Base {
  greet() {
    console.log("Hello, world!");
  }
}
 
class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
 
const d = new Derived();
d.greet();
d.greet("reader");
```

It’s important that a derived class follow its base class contract. Remember that it’s very common (and always legal!) to refer to a derived class instance through a base class reference:

```
// Alias the derived instance through a base class reference
const b: Base = d;
// No problem
b.greet();
```

## Member Visibility
You can use TypeScript to control whether certain methods or properties are visible to code outside the class.

`public`
<br>
The default visibility of class members is public. A public member can be accessed anywhere:

```
class Greeter {
  public greet() {
    console.log("hi!");
  }
}
const g = new Greeter();
g.greet();
```

Because public is already the default visibility modifier, you don’t ever need to write it on a class member, but might choose to do so for style/readability reasons.

`protected`
<br>
protected members are only visible to subclasses of the class they’re declared in.

```
class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}
 
class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // OK
g.getName();
Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.
```

### Exposure of protected members
Derived classes need to follow their base class contracts, but may choose to expose a subtype of base class with more capabilities. This includes making protected members public:
```
class Base {
  protected m = 10;
}
class Derived extends Base {
  // No modifier, so default is 'public'
  m = 15;
}
const d = new Derived();
console.log(d.m); // OK
```

Note that Derived was already able to freely read and write m, so this doesn’t meaningfully alter the “security” of this situation. The main thing to note here is that in the derived class, we need to be careful to repeat the protected modifier if this exposure isn’t intentional.


`private`
<br>
private is like protected, but doesn’t allow access to the member even from subclasses:
```
class Base {
  private x = 0;
}
const b = new Base();
// Can't access from outside the class
console.log(b.x);
Property 'x' is private and only accessible within class 'Base'.
Try
class Derived extends Base {
  showX() {
    // Can't access in subclasses
    console.log(this.x);
Property 'x' is private and only accessible within class 'Base'.
  }
}
```

Because private members aren’t visible to derived classes, a derived class can’t increase its visibility:
```
class Base {
  private x = 0;
}
class Derived extends Base {
Class 'Derived' incorrectly extends base class 'Base'.
  Property 'x' is private in type 'Base' but not in type 'Derived'.
  x = 1;
}
```

### Cross-instance private access
Different OOP languages disagree about whether different instances of the same class may access each others’ private members. While languages like Java, C#, C++, Swift, and PHP allow this, Ruby does not.

TypeScript does allow cross-instance private access:
```
class A {
  private x = 10;
 
  public sameAs(other: A) {
    // No error
    return other.x === this.x;
  }
}
```


## Static Members

Classes may have static members. These members aren’t associated with a particular instance of the class. They can be accessed through the class constructor object itself:
```
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();
```

Static members can also use the same public, protected, and private visibility modifiers:

```
class MyClass {
  private static x = 0;
}
console.log(MyClass.x);
Property 'x' is private and only accessible within class 'MyClass'.
```

Static members are also inherited:
```
class Base {
  static getGreeting() {
    return "Hello world";
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting();
}
```

## Generic Classes
Classes, much like interfaces, can be generic. When a generic class is instantiated with new, its type parameters are inferred the same way as in a function call:

```
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}
 
const b = new Box("hello!");
     
const b: Box<string>
```

Classes can use generic constraints and defaults the same way as interfaces.

### Type Parameters in Static Members
This code isn’t legal, and it may not be obvious why:
```
class Box<Type> {
  static defaultValue: Type;
Static members cannot reference class type parameters.
}
```

## Abstract Classes and Members
Classes, methods, and fields in TypeScript may be abstract.

An abstract method or abstract field is one that hasn’t had an implementation provided. These members must exist inside an abstract class, which cannot be directly instantiated.

The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members. When a class doesn’t have any abstract members, it is said to be concrete.

Let’s look at an example:

```
abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}
 
const b = new Base();
Cannot create an instance of an abstract class.
```

We can’t instantiate Base with new because it’s abstract. Instead, we need to make a derived class and implement the abstract members:

```
class Derived extends Base {
  getName() {
    return "world";
  }
}
 
const d = new Derived();
d.printName();
```

Notice that if we forget to implement the base class’s abstract members, we’ll get an error:

```
class Derived extends Base {
Non-abstract class 'Derived' does not implement inherited abstract member 'getName' from class 'Base'.
  // forgot to do anything
}
```

### Abstract Construct Signatures
Sometimes you want to accept some class constructor function that produces an instance of a class which derives from some abstract class.

For example, you might want to write this code:

```
function greet(ctor: typeof Base) {
  const instance = new ctor();
Cannot create an instance of an abstract class.
  instance.printName();
}
```

TypeScript is correctly telling you that you’re trying to instantiate an abstract class. After all, given the definition of greet, it’s perfectly legal to write this code, which would end up constructing an abstract class:

```
// Bad!
greet(Base);
```

Instead, you want to write a function that accepts something with a construct signature:

```
function greet(ctor: new () => Base) {
  const instance = new ctor();
  instance.printName();
}
greet(Derived);
greet(Base);
Argument of type 'typeof Base' is not assignable to parameter of type 'new () => Base'.
  Cannot assign an abstract constructor type to a non-abstract constructor type.
```

Now TypeScript correctly tells you about which class constructor functions can be invoked - Derived can because it’s concrete, but Base cannot.

## Relationships Between Classes
In most cases, classes in TypeScript are compared structurally, the same as other types.

For example, these two classes can be used in place of each other because they’re identical:

```
class Point1 {
  x = 0;
  y = 0;
}
 
class Point2 {
  x = 0;
  y = 0;
}
 
// OK
const p: Point1 = new Point2();
```

Similarly, subtype relationships between classes exist even if there’s no explicit inheritance:

```
class Person {
  name: string;
  age: number;
}
 
class Employee {
  name: string;
  age: number;
  salary: number;
}
 
// OK
const p: Person = new Employee();
```

This sounds straightforward, but there are a few cases that seem stranger than others.

Empty classes have no members. In a structural type system, a type with no members is generally a supertype of anything else. So if you write an empty class (don’t!), anything can be used in place of it:

```
class Empty {}
 
function fn(x: Empty) {
  // can't do anything with 'x', so I won't
}
 
// All OK!
fn(window);
fn({});
fn(fn);
```
