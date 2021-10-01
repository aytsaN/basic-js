import { NotImplementedError } from '../extensions/index.js';

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
export default function sortByHeight(arr) {
  let arrCopy = [...arr];
  const re = /-1;/gi;

  arrCopy = arrCopy.sort((a, b) => a - b).join(';').replace(/-1;/gi,'').split(';').map(el => +el);
  if(arrCopy[arrCopy.length - 1] === -1) arrCopy.pop();

  arr.forEach((el, i) => {
    if(el === -1) {
      arrCopy.splice(i, 0, el);
    }
  });

  return arrCopy;
}
