const {calculateMaxTotal} = require("./index");

describe("CalculateMaxTotal", () => {
  it("should match initial test case", () => {
    expect(calculateMaxTotal()).toEqual(26);
  });
});