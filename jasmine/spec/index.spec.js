describe('String Suite', function () {
    //hasVowel() test
    it('should contain a vowel', function () {
        var test = 'HEll o';
        expect(test.hasVowel()).toBeTruthy();
    });

    //toUpper() test
    it('should return only uppercase', function () {
        var test = 'hello world';
        expect(test.toUpper()).toMatch(/[A-Z]*/g);
    });

    //toLower() test
    it('should return only lowercase', function () {
        var test = 'HELLO';
        expect(test.toLower()).toBe('hello');
        //        OR expect(test.toUpper()).toMatch(/[a-z]*/g);
    });

    //ucFirst() test
    it('should change the first character to uppercase', function () {
        var test = 'hello';
        expect(test.ucFirst()).toBe('Hello');
    });

    //isQuestion() test
    it('should be a question', function () {
        var test = 'e?';
        expect(test.isQuestion()).toBeTruthy();
    });

    //words() test
    it('should return an array of the words in the string', function () {
        var test = 'This is a good one';
        expect(test.words()).toEqual(['This', 'is', 'a', 'good', 'one']);
    });

    //wordCount() test
    it('should return the number of words in the string', function () {
        var test = 'This is a good one';
        expect(test.wordCount()).toBe(5);
    });

    //commaFormat() test
    it('should separate a string with comma(s)', function () {
        var test = '23456';
        expect(test.commaFormat()).toBe('23,456');
    });

    //reverseString() test
    it('should reverse a string', function () {
        var test = 'Hello';
        expect(test.reverseString()).toBe('olleH');
    });

    //ucCount() test
    it('should return the number of characters in uppercase', function () {
        var test = 'hElEO';
        expect(test.ucCount()).toBe(3);
    });

    //toCurrency() test
    it('should return the string separated with comma(s) in currency format', function () {
        var test = '11111.1';
        expect(test.toCurrency()).toBe('11,111.1');
    });

    //fromCurrency() test 
    it('should return a currency string to a number', function () {
        var test = '11,111.1';
        expect(test.fromCurrency()).toBe(11111.1);
    });

    //isDigit() test
    it('should true if the string is a single digit', function () {
        var test = '4';
        expect(test.isDigit()).toBeTruthy();
    });
});
