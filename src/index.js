module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  }
  const reversedMatrix = matrix.map((item, idx) => {
    if (idx % 2 !== 0) {
      return item.reverse();
    }
    return item;
  });
  return reversedMatrix.flat(Infinity);
};
