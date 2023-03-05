"use strict";
/*
13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

*/
let tList = ["Cycle", "Motorcycle", "Car", "Truck"];
for (let index = 0; index < tList.length; index++) {
    console.log("I would like to drive " + tList[index]);
}
console.log("In reverse order: ");
for (let index = tList.length; index > 0; index--) {
    console.log(`I would like to drive ${tList[index]}`);
}
