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
multiplicationTable(3) // [[1, 2, 3], [2, 4, 6], [3, 6, 9]]



//Find the unique number
function findUniq(arr) {
  //cколько раз каждый  элемент массива повторяется
  let res = arr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  //взяла ключи из 0бъекта, нашла ключ который повторился ровно один раз
  let found = Object.keys(res).filter((el) => {
    return res[el] === 1;
  })

  return Number(found[0])
}
findUniq([0, 0, 0.55, 0, 0]) //1

//тоже рабочее решение, но не оптимальное для большого массива цифр
// let set = new Set(arr)
// let unique;
// let arrUnique = Array.from(set)
// for (let i = 0; i < arr.length; i++) {
//   for (let k = 0; k < arrUnique.length; k++) {
//     if (arr[i] === arrUnique[k]) {
//       arr.splice(i, 1)
//       if (!arr.includes(arrUnique[k])) {
//         unique = arrUnique[k]
//         break
//       }
//     }
//   }
// }
// return unique


//8, Find the Remainder
// function remainder(a, b) {
//   return (a > b ? a % b : b % a)
// }

// remainder(-60, 340)


//7,Row Weights
// function rowWeights(arr) {
//   let oneArr = [];
//   let twoArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       oneArr.push(arr[i])
//     } else {
//       twoArr.push(arr[i])
//     }
//   }

//   let sumOneArr = oneArr.reduce((acc, curr) => acc + curr, 0)
//   let sumTwoArr = twoArr.reduce((acc, curr) => acc + curr, 0)
//   return [sumOneArr, sumTwoArr]
// }

// rowWeights([50, 60, 70, 80], [120, 140])




//8,Vowel remover
//удаление лишних букв
//Создайте функцию  для удаления строчных гласных (a, e, i, o, u) в заданной строке
// function shortcut(string) {
//   return string.replace(/[\a\e\i\o\u]/gi, '')
//   /// return string.replace(/[aeiou]/g,'')
// }
// shortcut('how are you today ?')



//7, В рамках этой Ката вам нужно создать функцию, которая при наличии
//триплета возвращает индекс числового элемента, лежащего между двумя другими элементами
//ищем число, которое находится между последовательными числами
//найти среднее число и вернуть index
// function gimme(triplet) {
//   if (Array.isArray(triplet) && triplet.length === 3) {
//     let sorted = [...triplet].sort((a, b) => a - b)
//     return triplet.findIndex(item => item === sorted[1])
//   }
// }
// gimme([2, 3, 1]) // gimme([2, 3, 1]) => 0



//8, Создайте функцию, которая возвращает значение, умноженное на 50 и увеличенное на 6.
// Если введенное значение является строкой, оно должно возвращать «Ошибка»
//typeof возвращает строку, указывающую тип операнда.
// function problem(num) {
//   return typeof num !== "string" ? ((num * 50) + 6) : "Error"
// }
// problem(2)


//8,Keep up the hoop
// function hoopCount(n) {
//   return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
// }
// hoopCount(15)


//8,Is it even? 
//код определит, является ли переданное число четным (или нет)
//остаток от деления!!!!
// function testEven(n) {
//   const b = Math.abs(n)
//   return b >= 0 && b % 2 === 0 ? true : false
// }
// testEven(-2) //  true or false



//6, Parse HTML/CSS Colors  - Hex//шестнадцатеричный в десятичную!
// function parseHTMLColor(colorHex) {
//   if (!colorHex.startsWith('#')) {
//     const str = PRESET_COLORS[colorHex.toLowerCase()]
//     return convert(str.substring(1))
//   }
//   if (colorHex.length === 4) {
//     const arr = [...colorHex].splice(1, 3).map(el => el + el).join('')
//     return convert(arr)
//   }
//   return convert(colorHex.substring(1))
// }
// parseHTMLColor('#80FFA0') // =>  { r: 51, g: 187, b: 119 }
// function convert(colorHex) {
//   const rHex = colorHex.slice(0, 2);
//   const gHex = colorHex.slice(2, 4);
//   const bHex = colorHex.slice(4);
//   const r = parseInt(rHex, 16)
//   const g = parseInt(gHex, 16)
//   const b = parseInt(bHex, 16)
//   return { r, g, b }
// }


//8,The Wide-Mouthed frog!
// function mouthSize(animal) {
//   return animal.toLowerCase() === "alligator" ? "small" : "wide"
// }
// mouthSize("alligator")


//8,Area or Perimeter
//Вам даны длина и ширина четырехугольника.
//Многоугольник может быть прямоугольным или квадратным.Если это квадрат,
//вернуть его площадь.Если это прямоугольник, верните его периметр.
//для целей этой ката вы будете считать, что это квадрат,
//если его длина и ширина равны, в противном случае это прямоугольник
// function areaOrPerimeter(length, width) {
//   return length === width ? length * width : 2 * (length + width)
// }
// areaOrPerimeter(3, 3)

//8 Convert a string to an array
// function stringToArray(string) {
//   return string.split(" ")
// }
// stringToArray("Robin Singh") // ==> ["Robin", "Singh"]



//7 Predict your age!
// Составьте список возрастов, когда каждый из ваших прадедов умер.
// Умножьте каждое число само на себя.
// Добавьте их все вместе.
// Возьмите квадратный корень из результата.
// Разделить на два.
// function predictAge(...args) {
//   return Math.trunc(Math.sqrt([...args].map(n => n * n).reduce((acc, curr) => acc + curr)) / 2)
// }
// predictAge(65, 60, 75, 55, 60, 63, 64, 45)



//7 Sort Numbers 
// function solution(nums) {
//   return nums ? nums.sort((a, b) => a - b) : []
// }
// solution([1, 2, 10, 50, 5])


//6 Encrypt this!
// Ваше сообщение представляет собой строку, содержащую слова, разделенные пробелами.
// Вам необходимо зашифровать каждое слово в сообщении, используя следующие правила:
// Первая буква должна быть преобразована в код ASCII.
// Вторая буква должна быть поменяна последней буквой
// Не усложняйте: во вводе нет специальных символов.
// function encryptThis(text) {
//   let transform = text.split(" ").map(word => {
//     if (word.length > 2) {
//       return word.charCodeAt(0) + word[word.length - 1] + word.slice(2, word.length - 1) + word[1]
//     }
//     if (word.length > 1) {
//       return word.charCodeAt(0).toString() + word[1]
//     }
//     return word.charCodeAt(0).toString()
//   })
//   return transform.join(" ")
// }
// console.log(encryptThis("A wise old owl lived in an oak"))  // 65 119esi 111dl 111lw 108dvei 105n 97n 111ka



//5, Regex Password Validation
// Не менее шести символов
// содержит строчную букву
// содержит заглавную букву
// содержит цифру
// содержит только буквенно - цифровые символы(обратите внимание, что '_' не является буквенно - цифровым)
// function RegexPassword(str) {
//   return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/g.test(str)
// };
// RegexPassword("4lShsMKc3") //false


//7 Sum of odd numbers
//Учитывая треугольник последовательных нечетных чисел:
//Вычислите сумму чисел в n - й строке этого 
//треугольника(начиная с индекса 1), например: (Вход-- > Выход)
function rowSumOddNumbers(n) {
  const oddArr = [];
  let startNumbers = (n * n) - (n - 1)
  while (n > 0) {
    oddArr.push(startNumbers)
    startNumbers += 2
    n--
  }
  return oddArr.reduce((acc, curr) => acc + curr, 0)
}
console.log(rowSumOddNumbers(42))  // 74088