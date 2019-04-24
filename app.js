// TESTING COMMANDS


// const ACC_PRICE = 9.99;
// const PHONE = 99.99;
// const THRESHOLD = 200;
// const TAX = 0.08;

// var bankBal = 303.91;
// var amount = 0;

// function calcTax(amount) {
//     return amount * TAX;
// }

// function formatAmount(amount) {
//     return "$" + amount.toFixed(2);
// }

// do {
//     // buy a new phone
//     amount = amount + PHONE;

//     // can we afford ACC also?
//     if (amount < THRESHOLD) {
//         amount = amount + ACC_PRICE;
//     }
//     // tax
//     amount = amount + calcTax(amount);
//     // bal = document.getElementById("bal");
//     // balValue = bal.value;
//     // bal.innerHTML = balValue;
//     bankBal -= amount;
//     console.log("money left: " + bankBal);
// }
// while (amount < bankBal);
// console.log("Your purchased for: " + formatAmount(amount));

// if (amount > bankBal) {
//     // err = document.getElementById("err");
//     // errValue = err.value;
//     // err.innerHTML = errValue;
//     console.log("You cannot purchase this shit man!");
// }

// obj = {
//     a: "Hello World",
//     b: 42
// }

// var b = "a";

// obj[b];
// obj["b"];

// "use strict";

// var a = 40;
// var b = (a > 39) ? "true" : "false";

// console.log(a);
// console.log(b);


// function add(x) {
//     function addAgain(y) {
//         return y + x;
//     };
//     return add;
// }
// var final = add(5);








// 1- Color Changer from Selected List 

const btn1 = document.querySelector('.btn-1');
const bg = document.querySelector('body');
const num1 = document.querySelector('.num-1');
const hex1 = document.querySelector('.hex-1');



const colors = ['#1abc9c', '#f92922', '#90c9d9', '#e32345', 'green', 'dodgerblue', 'crimson', 'orangered'];

btn1.addEventListener('click', changeBg1);

function changeBg1() {
    let random = Math.floor(Math.random() * colors.length);
    bg.style.backgroundColor = colors[random];
    num1.innerHTML = random;
    hex1.innerHTML = colors[random];
}


// 2 - Color Changer - completely random

const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn2 = document.querySelector('.btn-2');
const num2 = document.querySelector('.num-2');
const hex2 = document.querySelector('.hex-2');

btn2.addEventListener('click', changeBg2);

function changeBg2() {
    let hexCol = '#';

    for (i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexNumbers.length);

        hexCol += hexNumbers[random];
        bg.style.backgroundColor = hexCol;

        num2.innerHTML = random;
        hex2.innerHTML = hexCol;
    }
}