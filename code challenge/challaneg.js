'use strict';
const calcaverage=(a,b,c)=>{
    return (a+b+c)/3
}
let dolphavg=calcaverage(44,23,71);
let Koalaavg=calcaverage(65,54,49);

console.log(dolphavg,Koalaavg);

const checkwinner=(a,b)=>{
    if (a>=2*b){
        console.log(`The Dolphins wins {${a}vs${b}}`);
    }else if(b>=2*a){
        console.log(`The Koalas wins {${a}vs${b}}`);
    }else{
        console.log('No team wins!.')
    }
}


console.log(checkwinner(dolphavg,Koalaavg));