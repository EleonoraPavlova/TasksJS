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


//Everything Be True
function truthCheck(collection, pre) {
  let count = 0;
  collection.forEach((el) => {
    if (el[pre]) {
      count++
    }
  })
  return count === collection.length ? true : false
}

truthCheck([{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }], "data") // true


//Arguments Optional каррирование 2 аргумента
function addTogether(f) {
  return function curry(...arg) {
    if (arg.length >= f.length) {
      return f.call(this, ...arg)
    }
    return curry.bind(this, ...arg)
  }
}

function sum(a, b) {
  return a + b;
}

let sumTwoAnd = addTogether(sum);
sumTwoAnd(2, 4);

//второй вариант:
function addTogethe() {
  const [first, second] = arguments;

  if (typeof (first) === "number") {
    if (typeof (second) === "number") return first + second;
    if (arguments.length === 1) return (second) => addTogether(first, second);
  }
}



//Make a Person 
const Person = function (firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };

  this.getLastName = function () {
    return fullName.split(" ")[1];
  };

  this.getFullName = function () {
    return fullName;
  };

  this.setFirstName = function (name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function (name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function (name) {
    fullName = name;
  };
};

const bob = new Person("Bob Ross");
// console.log(bob.getFullName());
// console.log(Object.keys(bob)) // 6 методов, выводит  6 длину!
// console.log(bob.getFullName());
// console.log(bob.getFirstName());
// console.log(bob.getLastName());
// console.log(bob.getFullName());
// bob.setFirstName(first);
// bob.setLastName(last);
// bob.setFullName(firstAndLast);



//Map the Debris 
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map((el) => {
    el.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + el.avgAlt, 3) / GM))
    delete el.avgAlt
    return el
  });
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])); //[{name: "sputnik", orbitalPeriod: 86400}].
