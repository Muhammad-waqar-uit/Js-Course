const dolphscore={
    score1:97,
    score2:112,
    score3:101
}
const koalasscore={
    score1:109,
    score2:95,
    score3:123
}

const averagedolph=(dolphscore.score1+dolphscore.score2+dolphscore.score3)/3
const averagekoala=(koalasscore.score1+koalasscore.score2+koalasscore.score3)/3
/*
if (averagedolph>averagekoala){
console.log('dolp wins');
}else if (koalasscore>dolphscore){
console.log('koalas win');
}else{
console.log("draw");
}
*/
//bonus 1

if (averagekoala>averagedolph && averagedolph>=100){
    console.log('dolp wins');
}

