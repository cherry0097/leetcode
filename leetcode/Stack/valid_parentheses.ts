function validParentheses(input_string: string): boolean {
  let parentheses_stack: string[] = [];

  for (let i = 0; i < input_string.length; i++) {
    if (input_string[i] === ")") {
      if (i === 0 || parentheses_stack.at(-1) !== "(") {
        return false;
      }
      parentheses_stack.pop();
    } else if (input_string[i] === "}") {
      if (i === 0 || parentheses_stack.at(-1) !== "{") {
        return false;
      }
      parentheses_stack.pop();
    } else if (input_string[i] === "]") {
      if (i === 0 || parentheses_stack.at(-1) !== "[") {
        return false;
      }
      parentheses_stack.pop();
    } else {
      parentheses_stack.push(input_string[i]);
    }
  }

  return parentheses_stack.length === 0 ? true : false;
}

console.log(validParentheses("([{}])"));
