function findValidPalindrom(val: string): boolean {
  const final_val: string = val.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left: number = 0;
  let right: number = final_val.length - 1;

  while (left < right) {
    if (final_val[left] !== final_val[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(findValidPalindrom("Was it a car or a cat I saw?"));
