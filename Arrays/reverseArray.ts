// The idea is to use two pointers to track the leftmost and rightmost indices, and gradually close in on the array till the mid point(s) is reached and the new array is returned.

function reverseArray(a: number[]): number[] {
  const result = [...a];

  // initialize left & right pointers
  let left = 0;
  let right = result.length - 1;

  while (left < right) {
    [result[left], result[right]] = [result[right], result[left]];
    left++;
    right--;
  }

  return result;
}

const reverse = reverseArray([1, 2, 3, 4, 5]);
console.log(reverse);
