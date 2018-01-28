module.exports = {
  "buildAuxiliartyArray": (lines) => {
    const result = [];

    for (let i = 0; i < lines; i += 1) {
        result[i] = [];
        for (let j = 0; j <= i; j += 1) {
        result[i][j] = 0;
        }
    }

    return result;
  },

  "findMax": (line = []) => {
     let max = null;

     line.forEach((element) => {
       if (max === null || element > max) {
         max = element;
       }
    });

    return max;
  }
};
