function Cipher(key) {
    if (key !== undefined && key.toUpperCase() === key) {
        throw new Error("Bad key");
    }
    this.key = key || "aaaaaaaaaa";

    var alphabetStart = "a".charCodeAt(0);
    var alphabetCount = 26;
    var diffs = this.key.split("").map(function(letter) {
        return letter.charCodeAt(0) - alphabetStart;
    });

    this.encode = function(text) {
        return transcode(text, 1);
    };

    this.decode = function(text) {
        return transcode(text, -1);
    };

    var transcode = function(text, direction) {
        return text.split("").map(function(letter, i) {
            var normalizedChar = letter.charCodeAt(0) - alphabetStart;
            var shift = direction * diffs[i];
            var normalizedShiftedChar = (normalizedChar + shift) % alphabetCount;
            return String.fromCharCode(normalizedShiftedChar + alphabetStart);
        }).join("");
    };
}

module.exports = Cipher;