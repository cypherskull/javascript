

var DnaTranscriber = function () { 
    
 };
    
DnaTranscriber.prototype.toRna  = function(str) {
    if (!str.match(/^[ACTG]*$/)) throw new Error("Invalid input");    
var rnamap = {'C' : 'G', 'G' : 'C', 'A' : 'U', 'T' : 'A'} ; 
var newString = str.split("").map(strE=> {
    return rnamap[strE];
})

return newString.join("");
    
}

/* 
for (var i = 0 ; i <= str.length - 1; i++) { 
     // or newString = newString + str[i];
     switch (str[i]) {
        case "C" : 
        res = "G";
        break;

        case "G" : 
        res = "C";
        break;

        case "A" : 
        res = "U";
        break;

        case "T" : 
        res = "A";
        break;

        default:
        throw Error("Invalid input");
    
    }
    newString += res;
} 
    
    
    return newString;
    
} */

module.exports = DnaTranscriber;