module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let arrayFromString = str.split('');
  let result = true;
  for (let i = 0; i < arrayFromString.length; i++) {
    let currentBracket = arrayFromString[i];
    bracketsConfig.forEach((configSet) => {
      if (configSet.includes(currentBracket)) {
        if (configSet[0] === configSet[1]) {
          stack[stack.length - 1] === currentBracket ? stack.pop() : stack.push(currentBracket);
        } else if (configSet[0] === currentBracket) {
          stack.push(currentBracket);
        } else {
          if (stack[stack.length - 1] === configSet[0]) {
            stack.pop();
          } else {
            result = false;
          }
        }
      }
    })
  }
  if (stack.length > 0) { result = false }
  return result;
}
