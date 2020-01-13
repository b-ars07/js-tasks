function isThisAZipCode (candidate) {
  return /^\d{5}\-\d{4}$/.test(candidate)
}

console.log(isThisAZipCode(48275-4572));
console.log(isThisAZipCode(4825-4572));