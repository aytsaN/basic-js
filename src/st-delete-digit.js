import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let resultNum = 0;
  let str = n.toString();

  for(let i = 0; i < str.length; i++) {
    str = str.split('');
    str.splice(i, 1)
    str = +str.join('');
    if(resultNum < str) {
      resultNum = str;
    }
    str = n.toString();
  }
  return resultNum;
}
