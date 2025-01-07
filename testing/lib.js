module.exports.absolute = function (number){

    return (number >= 0) ? number : -number;
    // if (number > 0 ) return number;
    // if (number < 0) return -number;
    // return 0;
}

module.exports.greet = function(name){
    return 'Welcome ' + name + '!';
}

module.exports.getCurrency =function(){
    return ['euro','birr','dollar']
}

module.exports.getProduct =function(productId){
    return {id:productId,price:10}
}