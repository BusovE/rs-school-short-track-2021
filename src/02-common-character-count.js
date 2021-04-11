/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0;
  let min;
  let max;
  let sum;
  if (s1.length >= s2.length) {
    min = s2;
    max = s1;
    sum = s1;
  } else {
    max = s2;
    min = s1;
    sum = s2;
  }
  for (let i = 0; i < min.length; i++) {
    max = max.replace(min[i], '');
  }
  return sum.length - max.length;
}

module.exports = getCommonCharacterCount;
