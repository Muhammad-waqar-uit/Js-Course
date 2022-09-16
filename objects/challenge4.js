const bills=[22,295,176,440,37,105,10,1100,86,52];
const calctip=(bill)=>{
    return bill>=50 && bill<=300 ? bill*0.15 : bill * 0.2; 
}

let tips=[];
let totals=[];

for (let i=0;i<bills.length;i++){
    const tip=calctip(bills[i]);
    tips.push(tip);
    totals.push(tip+bills[i]);
}

console.log(tips,totals);

const calaverage=(arr)=>{
    let sum=0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

console.log(calaverage([2,3,7]));