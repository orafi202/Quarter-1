"use strict";
/*

15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.


*/
let guestList1 = ["Arooj Rafi", "Muhammad Rohaan Rafi", "Sohaib Ikram", "Rizwan Munir", "Naeem Rizwan"];
console.log("Displaying Guest list : "); // displaying guest list on console.
for (let index = 0; index < guestList1.length; index++) {
    console.log(`${index + 1}: ${guestList1[index]}`);
}
console.log("Updating Guest Lists.\n");
for (let index = 0; index < guestList1.length; index++) {
    if (guestList1[index] == "Muhammad Rohaan Rafi") {
        let newGuest = "Muhammad Shafi";
        console.log(`Alert! ${guestList1[index]} has been replaced with ${newGuest}`);
        guestList1[index] = newGuest;
    }
    if (guestList1[index] == "Naeem Rizwan") {
        let newGuest = "Muhammad Arslan";
        console.log(`Alert! ${guestList1[index]} has been replaced with ${newGuest}`);
        guestList1[index] = newGuest;
    }
}
console.log("\nInviting the guests of Updated List");
for (let index = 0; index < guestList1.length; index++) {
    const element = guestList1[index];
    console.log(`${index + 1}: Welcome ${element}.\nPlease join us on dinner.\n`);
}
