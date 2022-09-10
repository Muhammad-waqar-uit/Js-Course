/*
const MASSMARK=78;
const heighmark=1.69;
const massjohn=92;
const heightjohn=1.95;
*/

const MASSMARK=95;
const heighmark=1.88;
const massjohn=85;
const heightjohn=1.76;

let bmimark=MASSMARK/(heighmark*heighmark);  
let bmijohn=massjohn/(heightjohn*heightjohn);

const markbmiheigher=bmimark>bmijohn;


console.log(markbmiheigher,bmijohn,bmimark)