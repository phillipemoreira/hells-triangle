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

  it("when triangle is one line only", () => {
    const triangle = [[6]];

    expect(calculateMaxTotal(triangle)).toEqual(6);
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

  it("when negative numbers", () => {
    const triangle = [
      [-1],
      [-2, -3],
      [-4, -7, -2]
    ];

    expect(calculateMaxTotal(triangle)).toEqual(-6);
  });

  it("when single non numeric element", () => {
    const triangle = [["b"]];

    expect(() => calculateMaxTotal(triangle)).toThrowError("All triangle elements must be numeric.");
  });

  it("when first triangle element is not numeric", () => {
    const triangle = [
      ["b"],
      [2, "a"],
      [4, 5, 6]
    ];

    expect(() => calculateMaxTotal(triangle)).toThrowError("All triangle elements must be numeric.");
  });

  it("when any of the triangle elements is not numeric", () => {
    const triangle = [
      [5],
      [2, "a"],
      [4, 5, 6]
    ];

    expect(() => calculateMaxTotal(triangle)).toThrowError("All triangle elements must be numeric.");
  });

  it("when triangle is incomplete", () => {
    const triangle = [
      [1],
      [2, 3],
      [4]
    ];

    expect(() => calculateMaxTotal(triangle)).toThrowError("Incomplete triangle.");
  });

  it("when first triangle line has more than one element", () => {
    const triangle = [
      [1, 2, 3],
      [2, 4],
      [4, 5, 6]
    ];

    expect(() => calculateMaxTotal(triangle)).toThrowError("Wrong triangle structure.");
  });

  it("when any of the lines have more elements than they should", () => {
    const triangle = [
      [1],
      [2, 4],
      [4, 5, 6, 8]
    ];

    expect(() => calculateMaxTotal(triangle)).toThrowError("Wrong triangle structure.");
  });
});