function findOutlier(integers) {

  let even = [],
    odd = [];
  for ( let n of integers) {
    if (n % 2 === 0) even.push(n);
    else odd.push(n);

    for (let item of integers) {
      if (even.length >= 2) {
        if (item % 2 !== 0) return item;
      }
  
      if (odd.length >= 2) {
        if (item % 2 === 0) return item;
      }
    }
  
  
  }
}

// function findOutlier(int){
//   var even = int.filter(a=>a%2==0);
//   var odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }

console.log(findOutlier([1,2,3,3,5]));