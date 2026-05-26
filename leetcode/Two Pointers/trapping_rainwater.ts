function measureWater(arr: number[]): number {
  let water_measure: number = 0;
  let max_left: number[] = [0];
  let max_right: number[] = [0];

  let left = 0;
  let right = arr.length - 1;

  while (left < arr.length) {
    console.log(`\n====== left = ${left} right = ${right} ======\n`);
    max_left.push(Math.max(max_left.at(-1)!, arr[left]));
    max_right.push(Math.max(arr[right], max_right.at(-1)!));
    left++;
    right--;
    console.log(`max_left = ${max_left}\nmax_right = ${max_right}`);
  }

  max_right.reverse();

  for (let i = 0; i < max_right.length; i++) {
    water_measure +=
      Math.min(max_left[i], max_right[i]) - arr[i] > 0
        ? Math.min(max_left[i], max_right[i]) - arr[i]
        : 0;
  }

  return water_measure;
}

console.log(measureWater([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]));
