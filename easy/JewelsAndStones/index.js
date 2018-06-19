/* https://leetcode.com/problems/jewels-and-stones/description/ */

const numJewelsInStones = (J, S) => {
  let numJewels = 0;
  
  const jewelsArray = Array.from(J),
    stonesArray = Array.from(S)

  for (let i = 0; i < jewelsArray.length; i++) {
    const jewel = jewelsArray[i]
    for (let j = 0; j < stonesArray.length; j++) {
      if (jewel === stonesArray[j]) {
        numJewels++
      }
    }
  }

  return numJewels
}


console.log(numJewelsInStones("aA", "aAAbbbb"))
console.log(numJewelsInStones("z", "ZZ"))