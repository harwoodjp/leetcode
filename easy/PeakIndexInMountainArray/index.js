/* https://leetcode.com/problems/peak-index-in-a-mountain-array/description/ */

const peakIndexInMountainArray = A => {
  let peakIndex = 0
  for (let i = 1; i < A.length - 1; i++) {
    console.log(i)
    if (A[i] > A[peakIndex]) {
      peakIndex = i
    }
  }
  return peakIndex
}

console.log(peakIndexInMountainArray([0, 2, 1, 0]))