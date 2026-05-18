function findTwoIntegerSum(arr: number[], t: number): number[] {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === t) return [left + 1, right + 1];
    if (t > arr[left] + arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

console.log(findTwoIntegerSum([-1, 0], -1));
