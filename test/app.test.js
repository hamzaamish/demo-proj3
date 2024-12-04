const chai = require('chai');
const expect = chai.expect;

describe('App', () => {
    it('should return Hello World', () => {
        const result = 'Hello World';
        expect(result).to.equal('Hello World');
    });
});

