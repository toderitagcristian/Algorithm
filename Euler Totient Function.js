/* Euler's totient function
Euler's phi function. In other words, it is the number of integers k in the range 1 ≤ k ≤ n for which the greatest common divisor gcd(n, k) is equal to 1
  Step 1 : if n is prime => return n-1
  Step 2 : From prime factorization : 
for each of its prime factors "p", with a multiplicity "k"
phi = product of ( p^(k-1)*(p-1) )
e.g. 360 = 2^3 * 3^2 * 5
phi(360)= (2^2) * (2-1) * (3^1) * (3-1) * (5^0) * (5-1)
phi(360)= 4 * 1 * 3 * 2 * 1 * 4
phi(360)= 96
*/

const isPrime = num => {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if ( num % i === 0 ) {
			return false;
		}
	}		
    return num > 1;
}

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

function properFractions(n){
  let phi = 1;
  if ( n == 1 || isPrime(n) ) {
    return (n-1)
  } else {
    let arrayPriFact = primeFactors(n)
    let objPriFact = {}
    arrayPriFact.forEach(function(el) {
      objPriFact[el] ? objPriFact[el] = objPriFact[el] +1 : objPriFact[el] = 1
    });

    for ( let [key, value] of Object.entries(objPriFact) ) {
      phi *= Math.pow(key, value-1) * (key - 1)
    }
  }

  return phi
}