/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i];
    const subDomain = domain.split('.');
    const arr = [];
    let str = '';
    for (let j = subDomain.length - 1; j >= 0; j--) {
      str += `.${subDomain[j]}`;
      arr.push(str);
    }
    for (let j = 0; j < arr.length; j++) {
      const dom = arr[j];
      if (dom in obj) {
        obj[dom]++;
      } else obj[dom] = 1;
    }
  }
  return obj;
}

module.exports = getDNSStats;
