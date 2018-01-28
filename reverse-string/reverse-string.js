var reverseString = function(str) {
    if (str === '') {
        return '';    
    } else {
        return str.split('').reverse().join('');
    }
    
}

module.exports = reverseString;