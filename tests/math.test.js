// import * as chai from 'chai';
// const { expect } = chai;
const { expect } = require('chai');
const { add } = require('../math');

describe('Math functions', () => {
    it('should return the sum of two numbers', () => {
        const result = add(2, 3);
        expect(result).to.equals(5);
    });
});