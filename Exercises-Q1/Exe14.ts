/*

14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

*/

let guestList : string[] = ["Arooj Rafi", "Muhammad Rohaan Rafi", "Sohaib Ikram", "Rizwan Munir", "Naeem Rizwan"];

for (let index = 0; index < guestList.length; index++) {
    
    if(guestList[index] == "Arooj Rafi") {

        console.log(`Welcome ${guestList[index]} ! \nPlease join our party.`);
        console.log();
    } else if(guestList[index] == "Muhammad Rohaan Rafi") {
        console.log(`Welcome ${guestList[index]} ! \nPlease join our party.`);
        console.log();
    } else if(guestList[index] == "Rizwan Munir") {
        console.log(`Welcome ${guestList[index]}! \nPlease join our party.`);
        console.log();
    } else {
        console.log(`Sorry ${guestList[index]}! \nYou are not invited. Thank you.`);
        console.log();
    }
    
}