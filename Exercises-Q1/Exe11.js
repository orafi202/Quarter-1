"use strict";
/*

12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.

*/
let myArray = [1, 2, 3, 4, 5];
let names = ["Asif Ali Zardari", "Imran Khan"];
for (let index = 0; index < names.length; index++) {
    console.log("Welcome " + names[index]);
}
