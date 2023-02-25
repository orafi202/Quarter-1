"use strict";
let number1 = 11;
let number2 = 2;
let result = number1 % number2;
console.log("Result is : " + result);
let str = "Jahanzaid is a smart boy.";
console.log("Spliting in ascending order");
for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
        continue;
    }
    console.log(str[i]);
}
console.log("Spliting in desending order");
let tempstr = "";
for (let j = str.length; j >= 0; j--) {
    if (str[j] == " ") {
        continue;
    }
    console.log(str[j]);
}
let Astr = str.split(" ").sort();
let RStr = str.split(" ").sort().reverse();
console.log(Astr);
console.log(RStr);
