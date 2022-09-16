'use strict';
const calcage=function (birthyear){
    return `this is ${birthyear}`
}

const age=calcage(1991)

// console.log(age); //expression function 

const calcage1=birthyear=> `${birthyear}` //arrow function

const age1=calcage1(1991);
console.log(age1);