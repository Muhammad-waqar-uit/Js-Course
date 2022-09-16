const mark={
    fullname:'mark miller',
    mass:78,
    height:1.69,
    calcBMI:function(){
        this.bmi=this.mass/this.height **2;
        return this.bmi;
    }
};

const john={
    fullname:'john',
    mass:92,
    height:1.95,
    calcBMI:function(){
        this.bmi=this.mass/this.height **2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.calcBMI(),john.calcBMI());

