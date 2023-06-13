//Grasshopper - Messi Goals
let laLigaGoals = 43;
let championsLeagueGoals = 10;
let copaDelReyGoals = 5;
let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;


//saleHotdogs
function saleHotdogs(n) {
  if (n < 5) {
    return n * 100
  } else if (n >= 5 && n < 10) {
    return n * 95
  } else {
    return n * 90
  }
}
saleHotdogs(1);


//Largest Number Arrangement
function largestArrangement(arr) {
  let mapped = arr.map(s => s.toString());
  let res = mapped.sort((a, b) => {
    //большeе начало строки/ меньшее начало строки
    return (b + a) - (a + b)
  })
  return res.join('')

}
largestArrangement([8, 6, 590, 70]) // 8706590



//Small enough?
// function smallEnough(arr, limit) {
//   return arr.every((el) => el <= limit) ? true : false
// }
// smallEnough(([78, 117, 110, 99, 104, 117, 107, 115], 100)) //false



//Calculate the function f(x) for a simple linear sequence (Easy)
function getFunction(sequence) {
  let add = sequence[0], mul = sequence[1] - add, linear = sequence.every(function (v, i) { return v == i * mul + add });
  return linear ? "f(x) = " + (mul ? (mul == 1 ? '' : mul == -1 ? "-" : mul) + "x" + (!add ? "" : (add > 0 ? " + " : " - ") + Math.abs(add)) : add) : "Non-linear sequence"
}

getFunction([1, 4, 7, 10, 13])  //"f(x) = x", "Nope! Try again."
//an = 2n(cтепень2) + 1 - n число которое проверяем на послед



//Multiplication table
function multiplicationTable(size) {
  let mainArr = []
  let i = 1
  while (i <= size) {
    mainArr.push(i)
    i++
  }
  return mainArr.reduce((acc, curr) => {
    let smallArr = []
    for (let i = 0; i < mainArr.length; i++) {
      smallArr.push(curr * mainArr[i]);
      if (smallArr.length === size) {
        acc.push(smallArr)
      }
    }
    return acc
  }, [])
}
multiplicationTable(3)// [[1, 2, 3], [2, 4, 6], [3, 6, 9]]