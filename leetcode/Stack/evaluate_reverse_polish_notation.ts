function solve(arr: string[]): number {
  let stack: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(Number(arr[i])) === false) {
      stack.push(Number(arr[i]));
      continue;
    }
    let num1 = stack.pop()!;
    let num2 = stack.pop()!;

    if (arr[i] === "/") stack.push(Math.trunc(num2 / num1));
    if (arr[i] === "+") stack.push(num2 + num1);
    if (arr[i] === "*") stack.push(num2 * num1);
    if (arr[i] === "-") stack.push(num2 - num1);
  }

  return stack[0];
}

console.log(solve(["1", "2", "+", "3", "*", "4", "-"]));
