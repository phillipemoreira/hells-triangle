const calculateMaxTotal = require('./index').calculateMaxTotal;

console.log(calculateMaxTotal());

describe('CalculateMaxTotal', () => {
  it('should match initial test case', () => {
    expect(calculateMaxTotal()).toEqual(26);
  });
});
