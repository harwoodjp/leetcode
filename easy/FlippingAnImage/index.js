/* https://leetcode.com/problems/flipping-an-image/description/ */

const flipAndInvertImage = A => {
  let invertedImage = []

  const reverseRow = row => {
    let reversedRow = []
    for (let i = row.length - 1; i > -1; i--) {
      reversedRow.push(row[i])
    }
    return reversedRow
  }

  const invertRow = row => {
    return row.map(el => el === 1 ? 0 : 1)
  }

  A.forEach(row => {
    invertedImage.push(invertRow(reverseRow(row)))
  })

  return invertedImage
}

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))