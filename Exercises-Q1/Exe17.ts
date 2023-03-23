/*

17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

*/

let guestList3 = ["Arooj Rafi", "Muhammad Rohaan Rafi", "Sohaib Ikram", "Rizwan Munir", "Naeem Rizwan",];

while(guestList3.length > 2) {


console.log(`${guestList3.pop()} have been removed from guest list. Remaining guests ${guestList3.length}`);
}

console.log(guestList3);

