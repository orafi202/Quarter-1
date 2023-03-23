"use strict";
/*
16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.

*/
let guestList2 = ["Arooj Rafi", "Muhammad Rohaan Rafi", "Sohaib Ikram", "Rizwan Munir", "Naeem Rizwan",];
console.log(guestList2);
guestList2.unshift("Sufiyan"); // adding new guest in the beginning of the array.
console.log("Updated list");
console.log(guestList2);
guestList2.splice(3, 0, "Ali Haider"); // adding new guest in the middle of the array using splice method.
console.log("New Guest list");
console.log(guestList2);
guestList2.push("Shazia Rizwan"); // adding new guest in the end of the list using push method.
console.log("Final Guest list");
console.log(guestList2);
