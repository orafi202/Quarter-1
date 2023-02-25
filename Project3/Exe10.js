"use strict";
/*
11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

*/
let myArray = [1, 2, 3, 4, 5];
let names = ["Asif Ali Zardari", "Nawaz Sharif", "Imran Khan"];
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element);
}
