function analyzeArray(list) {
  const {length} = list;
  const average = list.reduce((prev, curr) => prev + curr, 0) / length;
  const min = Math.min(...list);
  const max = Math.max(...list);
  return {average, min, max, length};
}

export default analyzeArray;