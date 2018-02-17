var Pangram = function (input) {
    this.val = input;
};

Pangram.prototype.isPangram = function () {

    const alph = "abcdefghijklmnopqrstuvwxyz";
    var str = this.val.toLowerCase();
    if (str === "" || str === undefined) {
        return false;
    } else {
        var a = str.split("").filter(e => alph.includes(e));
        var c = a.filter(e => !alph.includes(e));
        var b = alph.split("").filter(l => !str.includes(l));
        if (c.length === 0 && b.length === 0) {
            return true;
        } else {
            return false;
        }
    }

}

module.exports=Pangram;