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
function smallEnough(arr, limit) {
  return arr.every((el) => el <= limit) ? true : false
}
smallEnough(([78, 117, 110, 99, 104, 117, 107, 115], 100)) //false