/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = [];
  const result = [];
  let count = 0;
  let count2 = 0;
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    if (newArr[i] === -1) count++;
  }
  newArr = newArr.sort((a, b) => a - b).slice(count);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(arr[i]);
      count2++;
    } else result.push(newArr[i - count2]);
  }
  return result;
}

module.exports = sortByHeight;
