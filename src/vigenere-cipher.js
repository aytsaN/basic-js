import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {

  constructor(isDirect) {
  this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (isDirect == false)
    this.reverse = true;
  }

  isValid(x) {
    if(!x) throw new Error('Incorrect arguments!');
  }

  processData(mes, k, mode) {
    let result = '';
    let j = 0;
    mes = mes.toUpperCase();
    k = k.toUpperCase();

    for(let i = 0; i < mes.length; i++) {
      if(this.alphabet.includes(mes[i])) {
        let mi = this.alphabet.indexOf(mes[i]);
        let ki_s = k[(j >= k.length) ? (j % k.length) : j];
        let ki = this.alphabet.indexOf(ki_s);
        let c = mode === 'encrypt' ? this.alphabet[(mi + ki) % 26] : this.alphabet[(26 + mi - ki) % 26];
        result += c;
        j++;
      }
      else result += mes[i];
    }
    return this.reverse ? result.split('').reverse().join('') : result;
  }

  encrypt(message, key) {
    this.isValid(message);
    this.isValid(key);
    return this.processData(message, key, 'encrypt');
  };

  decrypt(message, key) {
    this.isValid(message);
    this.isValid(key);
    return this.processData(message, key, 'decrypt');
  };
}
