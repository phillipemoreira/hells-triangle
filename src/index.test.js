const {calculateMaxTotal} = require("./index");

describe("CalculateMaxTotal", () => {
  it("empty triangle", () => {
    expect(calculateMaxTotal()).toEqual(0);
  });

  it("initial test case", () => {
    const triangle = [
      [6],
      [3, 5],
      [9, 7, 1],
      [4, 6, 8, 4]
    ];

    expect(calculateMaxTotal(triangle)).toEqual(26);
  });

  it("when following the local max leads to the global max", () => {
    const triangle = [
      [3],
      [7, 2],
      [9, 8, 4]
    ];

    expect(calculateMaxTotal(triangle)).toEqual(19);
  });

  it("when following the local max does not lead to the global max", () => {
    const triangle = [
      [2],
      [1, 3],
      [10, 2, 4]
    ];

    expect(calculateMaxTotal(triangle)).toEqual(13);
  });
});