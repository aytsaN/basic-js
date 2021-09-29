import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  console.log(members);
  let dreamTeamName = [];
  if(!Array.isArray(members)) return false;

  members.forEach(el => {
    let name = el;
    if(typeof name === 'string') {
      dreamTeamName.push(name.trim()[0].toUpperCase());
    }
  })
  
  return (dreamTeamName.length > 0) ? dreamTeamName.sort().join('') : false;
}
