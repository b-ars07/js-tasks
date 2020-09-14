function add(a, b) {
  var lenx = a.length;
  var leny = b.length;
  var x1, y1, rem, div = 0;
  let result = [];

  if (lenx > leny) len = lenx;
  else len = leny;

  for (var i = 0; i < len; i++) {
    if (i >= lenx) x1 = 0;
    else x1 = parseInt(a[lenx - i - 1]);
    if (i >= leny) y1 = 0;
    else y1 = parseInt(b[leny - i - 1]);

    rem = (x1 + y1 + div) % 10;
    div = Math.floor((x1 + y1 + div) / 10);

    result.push(rem);
  }
  if (div > 0) {
    result.push(div);
  }

  result = result.reverse().join('');


  return result;
}