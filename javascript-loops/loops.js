// 1. for loop
console.log("1. For loop");
for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}

// 2. while loop
console.log("\n2. While loop");
let j = 0;
while (j < 5) {
  console.log("Iteration " + j);
  j++;
}

// 3. for..in loop (for objects)
console.log("\n3. For..in loop");
const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    console.log(`Key: ${key}, Value: ${obj[key]}`);
  }
}

// 4. for..of loop (for iterable objects like arrays)
console.log("\n4. For..of loop");
const arr = ["item1", "item2", "item3", "item4"];

for (const item of arr) {
  console.log(item);
}

// 5. Array.prototype.forEach()
console.log("\n5. Array.prototype.forEach()");
arr.forEach((item, index) => {
  console.log(`Index: ${index}, Item: ${item}`);
});
