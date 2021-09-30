import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {

  function getStrValue(val) {
    if(val === null) {
      return 'null';
    }
    if(!val && typeof val !== 'boolean') {
      return '';
    }
    return '' + val;
  }

  let separator, additionSeparator;
  let originalString = getStrValue(str);
  let additionalStr = getStrValue(options.addition);
  let repeatCount = options.repeatTimes || 1;
  let addRepeatCount = options.additionRepeatTimes || 1;
  let result = originalString;
  
  !options.separator ? separator = '+' : separator = options.separator;
  !options.additionSeparator ? additionSeparator = '|' : additionSeparator = options.additionSeparator;

  function repeatStr(str) {
    for(let i = 1; i < repeatCount; i++) {
      result += separator + str;
    }
    return result;
  }

  function repeatStrWithAddValue(res) {
    repeatCount -= 1;
    for(let j = 1; j < addRepeatCount; j++) {
      res += additionSeparator + additionalStr;
    }
    if(repeatCount) {
      res += separator + originalString + additionalStr;
      return repeatStrWithAddValue(res);
    } else {
      return res;
    }
  }

  if(additionalStr) {
    result += additionalStr;
    return repeatStrWithAddValue(result);
  } else {
    return  repeatStr(originalString);
  }
}
