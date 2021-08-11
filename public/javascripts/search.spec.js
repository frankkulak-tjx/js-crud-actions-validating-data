const expect = require('chai').expect;

describe('test test', function() {
    let commonBool;

    beforeEach(function () {
        commonBool = true;
    });

    it('should pass', function () {
        expect(commonBool).to.be.true;
    });

    it('should fail', function () {
        expect(commonBool).to.be.false;
    });
});
