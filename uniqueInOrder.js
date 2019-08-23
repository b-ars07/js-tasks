// var uniqueInOrder = function(iterable){
//   //your code here - remember iterable can be a string or an array
//   let newArr = [];
  
//  for (let item of iterable) {
//   if (item !== newArr[newArr.length-1]) {
//     newArr.push(item);
//   } 
//  }
 
//  return newArr;
// }

var uniqueInOrder = function(iterable) {
  return [...iterable].filter((a, i ) => a !== iterable[i - 1]);
}

console.log(uniqueInOrder('AAABBBBBCC'));