const primeFactors = n => {
  let factors = []
  let divisor = 2
  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor)
      n = n / divisor
    }
    else divisor++
  }
  return factors
};

// Useful to do a object
let arrayPriFact = primeFactors(n)
    let objPriFact = {}
    arrayPriFact.forEach(function(el) {
      objPriFact[el] ? objPriFact[el] = objPriFact[el] +1 : objPriFact[el] = 1
    });