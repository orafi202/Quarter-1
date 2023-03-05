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

let guestList1 : string[] = ["Arooj Rafi", "Muhammad Rohaan Rafi", "Sohaib Ikram", "Rizwan Munir", "Naeem Rizwan"];
console.log("Present guest list : ");
for (let index = 0; index < guestList1.length; index++) {
    
    console.log(guestList1[index]);
    
}




for (let index = 0; index < guestList1.length; index++) {
    
    if(guestList1[index] == "Muhammad Rohaan Rafi") {

            guestList1[index]= "Muhammad Shafi";
    }
}

console.log("\nUpdated list of the guest is ;");

for (let index = 0; index < guestList1.length; index++) {
    const element = guestList1[index];
    console.log(element);
    
}

