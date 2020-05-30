function car(){
    this.color = 'green';
    this.year = '2019';
    this.brand = 'Nissan';

    this.getModel = function(){
        console.log('ready for delivery');
    };
};

module.exports = new car();
//autopark.getModel();

//console.log(autopark.brand);