module.exports.absolute = function (number){

    return (number >= 0) ? number : -number;
    // if (number > 0 ) return number;
    // if (number < 0) return -number;
    // return 0;
}

module.exports.greet = function(name){
    return 'Welcome ' + name + '!';
}