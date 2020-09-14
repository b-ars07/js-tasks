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

// function solution(input, markers) {
//   return input.split('\n').map(
//     line => markers.reduce(
//       (line, marker) => line.split(marker)[0].trim(), line
//     )
//   ).join('\n')
// }

// function solution(input, markers) {
//   //`RegExp(..)` has some reasonable utility: to dynamically define the pattern for a regular expression.
//   //https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch3.md#object-function-and-regexp
//   var pattern = new RegExp("[" + markers.join("") + "]");
//   console.log(pattern);

//   return input.split("\n").map(item => {
//     return item.split(pattern)[0].trim();
//   }).join("\n");

// }