import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let count = 1;
  let res = '';

  for(let l in str) {
    if(str[l] === str[+l + 1]) {
      count++;
    } else {
      if (count === 1) {
        res += str[l];
      } else {
        res += count + str[l];
        count = 1;
      }
    }
  }

  return res;
}
