//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {
//
// YOUR CODE GOES HERE
//  

this.val = input;
};

Year.prototype.isLeap = function () {
//
// YOUR CODE GOES HERE
//
var num = this.val;

if (num%400 === 0 && num%100 === 0) {
    return true;
} else if (num%4 === 0 && num%100 !== 0) {
    return true;
} else return false;
};
 
module.exports = Year;
