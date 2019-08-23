function narcissistic(value) {
  let number = String(value).split('');
  let result = 0;

  for (let v of number) {
    result += v ** number.length; 
  }  
  
  if (result === value) return true;
  
  return false;
}

narcissistic(371);


