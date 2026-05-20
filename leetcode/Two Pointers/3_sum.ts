function twoSum(arr: number[], t: number): number[][] {
  let left: number = 0;
  let right: number = arr.length - 1;

  let res_output: number[][] = [];

  while (left < right) {
    if (left > 0 && arr[left] === arr[left - 1]) {
      left++;
      continue;
    }
    if (right < arr.length - 1 && arr[right] === arr[right + 1]) {
      right--;
      continue;
    }
    if (arr[left] + arr[right] + t === 0) {
      res_output.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (arr[left] + arr[right] + t > 0) right--;
    else left++;
  }

  return res_output;
}

function threeSum(arr: number[]): number[][] {
  arr.sort((b, a) => b - a);
  let res_output: number[][] = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let possible_lists = twoSum(arr.slice(i + 1, arr.length), arr[i]);
    if (possible_lists.length === 0) continue;
    for (let j = 0; j < possible_lists.length; j++) {
      res_output.push([arr[i], ...possible_lists[j]]);
    }
  }

  return res_output;
}

console.log(threeSum([0, 1, 1]));
