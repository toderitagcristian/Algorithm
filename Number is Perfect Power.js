
// @import Greatest Common Divisor, Prime Factorization

function perfPow(n) {
  let isPerfectPower = null
  let arrayPrimeFactorization = primeFactors(n)
  
  let gcdObject = {}
  arrayPrimeFactorization.forEach(function(el) {
    gcdObject[el] ? gcdObject[el] = gcdObject[el] +1 : gcdObject[el] = 1
  });

  let gcdValue = gcd_more_than_two_numbers(Object.values(gcdObject))
  gcdValue > 1 ? isPerfectPower = true : isPerfectPower = false

  // n = Math.pow(x, gcdValue)
  // log (base x) n =  gcdValue
  // Calculate base and output pairs IF ONLY isPerfectPower = true
  
  let pairs = []
  if ( isPerfectPower ) {
    let base = Math.pow(n, 1/gcdValue)
    pairs.push(Math.round(base), gcdValue)
    return pairs
  } else {
    return null
  }
}

// Perfect Power for Array - Test
function arrayPerfPow(arr) {
  let results = {}
  arr.forEach(function(el) { 
    results[el] = perfPow(el)  
  });
  return results
}
