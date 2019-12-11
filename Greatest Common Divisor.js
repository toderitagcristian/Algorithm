function gcd(a, b) {
  //console.log("a: " + a + " b: " + b)
  if (b == 0)
    return a;
  else
    return gcd(b, (a % b));
}

function gcd2(a, b) {
  var R;
  while ((a % b) > 0)  {
    R = a % b;
    a = b;
    b = R;
  }
  return b;
}

// More numbers
function gcd_more_than_two_numbers (a) {
  return a.reduce(gcd)
}