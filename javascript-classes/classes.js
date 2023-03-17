class ExampleClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  getAge() {
    let age = 10;
    return this.age;
  }

  getName() {
    return this.name;
  }
}

const exampleInstance = new ExampleClass("John Doe", 30);
exampleInstance.greet(); // Output: Hello, my name is John Doe and I am 30 years old.
let age = exampleInstance.getAge();