//JavaScript Algorithms and Data Structures

//Sum All Primes
function sumPrimes(num) {
  let primes = [];
  isPrime: for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        continue isPrime;
      }
    }
    primes.push(i);
  }
  return primes.reduce((acc, curr) => acc + curr);
}

sumPrimes(10); //17  



//Smallest Common Multiple
function smallestCommons(arr) {
  var range = [];
  let sorted = arr.sort((a, b) => a - b)
  for (let i = sorted[0]; i <= sorted[1]; i++) {
    range.push(i);
  }

  var lcm = range[0];
  for (let i = 1; i < range.length; i++) {
    let GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {
    if (y === 0)
      return x;
    else
      return gcd(y, x % y);
  }
}

console.log(smallestCommons([1, 5]));