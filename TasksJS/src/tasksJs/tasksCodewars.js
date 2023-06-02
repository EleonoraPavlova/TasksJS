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