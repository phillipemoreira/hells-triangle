exports.calculateMaxTotal = function (triangle = []) {
  let maxGlobal = 0;
  let upperIndex = -1;

  triangle.forEach((row) => {
    if (row.length === 1) {
      [maxGlobal] = row;
      upperIndex = 0;
    } else if (row[upperIndex + 1] > row[upperIndex]) {
        maxGlobal += row[upperIndex + 1];
        upperIndex += 1;
      } else {
        maxGlobal += row[upperIndex]
      }
  });

  return maxGlobal;
}