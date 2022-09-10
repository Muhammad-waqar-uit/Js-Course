/*
const age=15;

if (age>=18){
    console.log('allowed');
}else{
    console.log('not allowed')
}


const birthyear=2000;

if(birthyear<=2000){
    let century=20;
    console.log(century);
}else{
    let century=21;
    console.log(century);
}
*/
const MASSMARK=95;
const heighmark=1.88;
const massjohn=85;
const heightjohn=1.76;

let bmimark=MASSMARK/(heighmark*heighmark);  
let bmijohn=massjohn/(heightjohn*heightjohn);

const markbmiheigher=bmimark>bmijohn;


if (markbmiheigher===true){
    console.log('mark has higher bmi');
}else{
    console.log('john has heigher bmi')
}