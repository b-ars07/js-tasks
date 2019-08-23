function tickets(peopleInLine) {

  let n25 = 0,
      n50 = 0;

  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) n25 += 1;
    if (peopleInLine[i] === 50) {
      n25 -= 1;
      n50 += 1;
    } 
    if (peopleInLine[i] === 100) {
      n25--;
      n50 > 0 ? n50-- : n25 -= 2;
    }

    if (n25 <0 || n50 < 0) return "NO"
  }
  
  return "YES";
}

console.log(tickets([25, 25, 50, 50])); // YES
console.log(tickets([25,25,50,100,25,50,25,100,25,25,25,100,25,50,25,100,25,50,25,100,100,100])); // NO

console.log(tickets([25,50,25,100,25,25,50,100,25,25,50,100,100,100])) //? Expected: 'NO'