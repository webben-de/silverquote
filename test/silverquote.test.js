const silverqoute = require('../silverqoute');
const assert = require('chai').assert;



describe('Silverquote Tests', function() {
    describe('Request Test', function() {

        it('should return a valid silverqoute Object', function(done) {
            silverqoute(function(err, price) {
                if (err) {
                    assert.typeOf(err, 'String')
                    assert.equal(price, null)
                    return done(err);
                }
                assert.typeOf(price, 'object');
                done();
            });
        });
        it('should return a ounce value of number', function(done) {
            silverqoute(function(err, price) {
                if (err) {
                    assert.typeOf(err, 'String')
                    assert.equal(price, null)
                    return done(err);
                }
                assert.typeOf(price.ounce, 'Number');
                done();
            });
        });
        it('should return a gramm value of number and the 31.1034768 piece', function(done) {
            silverqoute(function(err, price) {
                if (err) {
                    assert.typeOf(err, 'String')
                    assert.equal(price, null)
                    return done(err);
                }
                assert.typeOf(price.ounce, 'Number');
                assert.equal(price.gramm, price.ounce / 31.1034768)
                done();
            });
        });
    });
});