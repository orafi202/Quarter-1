/*
18. Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its
order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

*/

let places : string[] = ["London", "New York", "Moscow", "Dehli", "Quetta"];
console.log("Favorite places i would like to visit.");
console.log(places);

console.log("Alphatical Order: ", [...places].sort()); // spread operator create shallow copy of the place to visit.
console.log("Original order: " , places);
console.log("Reversing the order without modifying original array: ", [...places].reverse());
console.log("Original order: " , places);
console.log("Reverse the order: ", places.reverse());
console.log("Current Order: ", places);
console.log("Revering the order the again.", places.reverse());
console.log("Sorting the array:" , places.sort());
console.log("Sorting the array alphabatically in reverse order", places.sort().reverse());

