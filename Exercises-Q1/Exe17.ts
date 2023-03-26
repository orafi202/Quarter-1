/*
17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.


*/

let guestList3 = ["Arooj Rafi", "Muhammad Rohaan Rafi", "Sohaib Ikram", "Rizwan Munir", "Naeem Rizwan",];

while(guestList3.length > 2) {


console.log(`${guestList3.pop()} have been removed from guest list. Remaining guests ${guestList3.length}`);
}

for (let index = 0; index < guestList3.length; index++) {
    const element = guestList3[index];
    console.log(`${element} are still invited for the dinner.`);   
}

console.log();

for (let i = guestList3.length; i > 0; i--) {
    
    console.log(`${guestList3.pop()} have been removed from guest list. Remaining guests ${guestList3.length}`);
    
}

console.log(`Guestlist size is : ${guestList3.length} `);

console.log(guestList3);

