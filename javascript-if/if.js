const age = 18;
const registered = true;
if (age > 160 || !registered) {
  console.log("you should not vote");
}
if (age >= 18 && registered) {
  console.log("You are eligible to vote.");
} else if (age >= 18 && registered==false) {
  console.log("You need to register to vote.");
} else if (age < 18 && registered) {
  console.log("You are too young to vote, even if you are registered.");
} else {
  console.log("You are too young to vote and need to register when you turn 18.");
}
let something = "asdf";
switch (something) {
  case "asdf1": 
  console.log("yeah");
  break;
  case "asdf2": 
  console.log("yeah");
  break;
  case "asdf3": 
  console.log("yeah");
  break;
  case "asdf4": 
  console.log("yeah");
  break;
  case "asdf": 
  console.log("yeah");
  break;
  
}
