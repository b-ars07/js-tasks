// function maskify(cc) {
//   if (cc.length < 4) return cc;
  
//   let maskCC = cc.slice((cc.length - 4), cc.length);
  
//   cc = cc.slice(0, (cc.length-4));
 
//   let newCC = cc.replace(/./g, '#');

//   return newCC + maskCC;
  
// }

// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }

function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}

console.log(maskify('qwewsedtfgerwtrwey5678659868kgh'));