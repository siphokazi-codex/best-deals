const assert = require('assert');
const splitQuantity = require('../splitQuantity.js');

describe('The splitQuantity function', function(){

    it('should count the registration numbers received', function(){
        assert.equal(2, splitQuantity('1 for R3, 2 for R7'));
    });
    it('should count if registration numbers received', function(){
        assert.equal(4, splitQuantity('1 for R3, 2 for R7, 3 for R10, 5 for R14.50'));
    });
});
