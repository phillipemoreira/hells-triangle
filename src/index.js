const {buildAuxiliartyArray, findMax} = require("./utils");

const findOpenedNodeWithBiggestMax = (lineToLookAt, closedNodesAtLine) => {
  let nodeIndex = null;
  let localMax = null;

  // Iterate line.
  for (let i = 0; i < lineToLookAt.length; i += 1) {
    // Check only opened nodes
    if (closedNodesAtLine[i] === 0) {
      // If node max distance is bigger than local max, use it as of now.
      if (localMax === null || lineToLookAt[i] > localMax) {
        localMax = lineToLookAt[i];
        nodeIndex = i;
      }
    }
  }

  return nodeIndex;
}

const closeNode = (nodeIndex, currentLine, closed) => {
  closed[currentLine][nodeIndex] = 1;
}

const shouldCloseLine = (currentLine, closed) => {
  let result = true;

  for (let i = 0; i < currentLine; i += 1) {
    if (closed[currentLine][i] === 0) {
      result = false;
    }
  }

  return result;
}

const updateDistanceOfChildren = (currentLine, fatherIndex, maxDistance, triangle) => {
  if (!maxDistance[currentLine + 1] || !triangle[currentLine + 1]) {
    return null;
  }

  // Since it is a triangle, alwasy two children
  const fatherMax = maxDistance[currentLine][fatherIndex];

  // Left child
  const leftNewCalc = fatherMax + triangle[currentLine + 1][fatherIndex];
  if (leftNewCalc > maxDistance[currentLine + 1][fatherIndex]) {
      maxDistance[currentLine + 1][fatherIndex] = leftNewCalc;
  }

  // Right child.
  const rightNewCalc = fatherMax + triangle[currentLine + 1][fatherIndex + 1];
  if (rightNewCalc > maxDistance[currentLine + 1][fatherIndex + 1]) {
      maxDistance[currentLine + 1][fatherIndex + 1] = rightNewCalc;
  }

  return true;
}

const calculate = (triangle = []) => {
  if (triangle.length === 0) {
    return 0;
  }

  // Auxiliary data structures.
  const closed = buildAuxiliartyArray(triangle.length);
  const maxDistance = buildAuxiliartyArray(triangle.length);

  // First node does not have to be calculated, its max value is itself.
  maxDistance[0][0] = triangle[0][0];

  // Since we know first node's value, it can start at second line
  updateDistanceOfChildren(0, 0, maxDistance, triangle);
  closeNode(0, 0, closed);
  let currentLine = 1;

  // Keep calculating until every node gets closed.
  let keepOnGoing = true;
  while (keepOnGoing === true) {
    keepOnGoing = false;

    // Opposite of Dijsktra algorithm, we ge the node with the longgest path so far.
    const currentNodeIndex = findOpenedNodeWithBiggestMax(
      maxDistance[currentLine],
      closed[currentLine]
    );

    if (currentNodeIndex !== null) {
      // It means we have not yeat calculated every route.
      keepOnGoing = true;

      // Update max path of left and right children, since it as a binary tree sort of graph.
      updateDistanceOfChildren(currentLine, currentNodeIndex, maxDistance, triangle);

      // We should close every node after calculating it.
      closeNode(currentNodeIndex, currentLine, closed);

      // If the line is completely calculated.
      if (shouldCloseLine(currentLine, closed)) {
        if (currentLine < triangle.length - 1) {
          currentLine += 1;
        }
      }
    }
  }

  return findMax(maxDistance[currentLine]);
};

exports.calculateMaxTotal = calculate;