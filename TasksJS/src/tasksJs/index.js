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

smallestCommons([1, 5]);


//Drop it
function dropElements(arr, func) {
  let index = arr.indexOf(arr.find((n) => func(n)))
  return index >= 0 ? arr.slice(index) : [];
}

dropElements([1, 2, 3, 4], function (n) { return n > 5; }); // []



//Steamroller /without Array.prototype.flat()
function steamrollArray(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc.push(...steamrollArray(curr));
    } else {
      acc.push(curr);
    }
    return acc;
  }, [])
}

steamrollArray([1, {}, [3, [[4]]]]); // [1, {}, 3, 4]


//Binary Agents to letters
function binaryAgent(str) {
  let splitted = str.split(' ')
  let mapped = splitted.map((elem) => {
    let el = parseInt(elem, 2);
    return String.fromCharCode(el)
  });

  return mapped.join("")
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

