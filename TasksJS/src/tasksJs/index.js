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

console.log(sumPrimes(10)); //17  



