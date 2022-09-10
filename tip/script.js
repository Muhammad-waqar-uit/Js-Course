//coding challenge

const tip=275;

if (tip>=50 && tip<=300){
    let tipvalue=((tip)*15)/100;
    console.log(`The tip is ${tipvalue} and total value is ${tip+tipvalue}`);
}else{
    tipvalue=((tip)*20)/100;
    console.log(`The tip is ${tipvalue} and total value is ${tip+tipvalue}`);
}