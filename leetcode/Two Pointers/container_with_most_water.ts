function findMaxArea(arr: number[]) {
  let max_area = 0;

  let left: number = 0;
  let right: number = arr.length - 1;

  while (left < right) {
    max_area = Math.max(
      Math.min(arr[left], arr[right]) * (right - left),
      max_area,
    );

    if (arr[left] > arr[right]) right--;
    else left++;
  }
  return max_area;
}

console.log(findMaxArea([1, 7, 2, 5, 4, 7, 3, 6]));
