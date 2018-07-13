String.prototype.hasVowel = function () {
    return /[aeiou]/ig.test(this);
};


String.prototype.toUpper = function () {
    var uc = '';
    for (i = 0; i < this.length; i++) {
        uc += String.fromCharCode(this.charCodeAt(i) & 223);
    }
    return uc;
};

String.prototype.toLower = function () {
    // create a result variable
    var lc = '';

    for (var i = 0; i < this.length; i++) {
        // get the code of the current character
        var code = this.charCodeAt(i);

        //if character is within the range of the capital letter
        //add to 'lc' the uppercase of the character (by adding 32 to its code)
        //else just add the character
        lc += (code > 64 && code < 91) ? String.fromCharCode(code + 32) : this.charAt(i);
    }
    return lc;
};

String.prototype.ucFirst = function () {
    //the substr function outputs the substring from the first argument 
    //index to the last argument index
    return this.charAt(0).toUpper() + this.substr(1, this.length);
};

String.prototype.isQuestion = function () {
    //first trim the sting to remove white space(s)
    //then run the test of '?' at the end of the string if
    //the string lenght is greater than 1 to prevent approving '?' as a question
    return (this.trim().length > 1) ? /\?$/.test(this) : false;
};

String.prototype.words = function () {
    return this.split(/\s/);
};

String.prototype.wordCount = function () {
    return this.words().length;
};

//extra function
//commaFormat
String.prototype.commaFormat = function () {
    var first = this.substr(0, this.length % 3);
    
    if (this.length > 3) { //if it need the ','
        for (var i = this.length % 3; i < this.length; i += 3) {
            first += ',' + this.substr(i, 3);
        }
    }
    //check for ',' at the begining of string
    return (first.charAt(0) == ',') ? first.substr(1, first.length) : first;
};

//reverseString
String.prototype.reverseString = function () {
    return this.split('').reverse().join('');
};

//ucCount() to return the number of uppercases in a string
String.prototype.ucCount = function () {
    return this.match(/[A-Z]/g).length;
}
//end extra function

String.prototype.toCurrency = function () {
    var str = this.split('.')[0]; //the string before the any available ','

    //concatenate currency with remain part of string
    return str.commaFormat() + '.' + this.split('.')[1];
};

String.prototype.fromCurrency = function () {
    return Number(this.split(',').join(''));
};

String.prototype.isDigit = function () {
    return (this.trim().length == 1) ? /\d/.test(this) : false;
};
