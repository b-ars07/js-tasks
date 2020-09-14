function solution(input, markers) {
  let str = input.split("");
  let result = [];
  let flag = true;

  for (let i = 0; i < str.length; i++) {
    for (let marker of markers) {
      if (str[i] === marker) {
        if (str[i - 1] === ' ') {
          result.pop();
        }
        flag = false
      }
    }
    if (str[i] == '\n') {
      flag = true;
    }
    if (flag) {
      result.push(str[i]);
    }
  }
  result = result.join('');

  return result;
};

solution("Q @b\nu\ne -e f g", ["@", "-"]);