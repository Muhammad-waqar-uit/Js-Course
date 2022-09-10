//5 falsy values : 0 ,'',undefined,null,NAN
console.log(Boolean(0));
console.log(Boolean('waqar'));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money=10;

if(money){
    console.log('xero');
}else{
    console.log(`rich ${money}`);
}
//falsy value 
let height;
if (height){
console.log('true')
}else[
console.log('nope')
]