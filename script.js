/*jshint esversion: 6*/
// console.log("" && 6);

//Mista ibug

// for (let mistaIbug = 1; mistaIbug < 10; mistaIbug++) {
//   setTimeout(function () {
//     if (mistaIbug == 1) {
//       mistaIbug = "Добрый день! Я mista ibuuug, и я тут главный!";
//     } else if (mistaIbug == 4) {
//       mistaIbug = "Я mista ibuuug, и я тут главный!";
//     } else if (mistaIbug == 5) {
//       mistaIbug = "Денис все у меня украл... опять... ";
//     } else if (mistaIbug % 3 == 0) {
//       mistaIbug = "Че ты?";
//     } else if (mistaIbug % 2 !== 0) {
//       mistaIbug = "Я mista ibuuug, и я тут главный!";
//     } else if (mistaIbug % 2 == 0) {
//       mistaIbug = "Денис все у меня украл... опять... ";
//     }
//     console.log(mistaIbug);
//   }, 2000 * (mistaIbug + 1));
// }
// setTimeout(function () {
//   console.log("p.s. Gorgal делает больше всех, старается...");
// }, 22000);

// let a = "Я mista ibuuug, и я тут главный!",
//   b = "Денис все у меня украл... опять... ",
//   c = "Че ты?";
// for (let mistaIbug = 1; mistaIbug < 10; mistaIbug++) {
//   setTimeout(function () {
//     if (mistaIbug % 3 == 0) {
//       mistaIbug = c;
//     } else if (mistaIbug % 2 == 0 && mistaIbug !== 4) {
//       mistaIbug = b;
//     } else if (mistaIbug == 5) {
//       mistaIbug = b;
//     } else {
//       mistaIbug = a;
//     }

//     console.log(mistaIbug);
//   }, 1000 * (mistaIbug + 1));
// }
// setTimeout(function () {
//   console.log("p.s. Gorgal делает больше всех, старается...");
// }, 12000);

// //Пирамидка

// for (let i = "#"; i.length < 8; i += "#") {
//   console.log(i);
// }

// //Пирамидка ver.2

// let x = "";
// for (let i = 1; i < 8; i++) {
//   for (let j = 0; j < i; j++) {
//     x += "*";
//   }
//   x += "\n";
//   console.log(x);
// }
// //

// first: for (let i = 0; i < 3; i++) {
//   console.log(`1 Уровень: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     if (j === 1) break first;
//     console.log(`2 Уровень: ${j}`);
//     for (let k = 0; k < 5; k++) {
//       console.log(`3 Уровень: ${k}`);
//     }
//   }
// }

// //
// for (let i = 1; i <= 5; i++) {
//   console.log(Math.pow(i, 2));
// }

// //

// const arrayOfNumbers = [];

// for (let i = 5; i <= 10; i++) {
//   arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);
//

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }
// console.log(result);
//

// // const data = [5, 10, "Shopping", 20, "Homework"];
// // for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] == "string") {
// //     data[i] += " - Done";
// //   } else {
// //     data[i] *= 2;
// //   }
// // }
// // console.log(data);

// //Разобрать
// // const data = [5, 10, "Shopping", 20, "Homework"];
// // const result = [];

// // for (let i = 1; i <= data.length; i++) {
// //   result[i - 1] = data[data.length - i];
// // }
// // console.log(result);

// const lines = 6;
// let res = "";
// let k = 3;
// let col = 3;

// for (let i = 0; i <= lines / 2; i++) {
//   k--;
//   for (let j = 0; j < col - k; j++) {
//     res += "*";
//   }
//   res += "\n";
// }
// for (let i = 0; i <= lines; i++) {
//   k++;
//   for (let j = 0; j < col - k; j++) {
//     res += "*";
//   }
//   res += "\n";
//   // console.log(result);
// }
// console.log(res);
//'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных филмов?", ""),
//     b = prompt("На сколько оцените его?", "");

//   if (a != null && b !== null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// }

// let i = 0;
// while (i < 2) {
//   i++;

//   const a = prompt("Один из последних просмотренных филмов?", ""),
//     b = prompt("На сколько оцените его?", "");
//   if (a != null && b !== null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// }

// Матрешка
// function matryoshka(n) {
//   if (n == 1) {
//     console.log("Матрешечка");
//   } else {
//     console.log("Верх матрешки " + n);
//     matryoshka(n - 1);
//     console.log("Низ матрешки " + n);
//   }
// }

let i = 0;
do {
  i++;
  const a = prompt("Один из последних просмотренных филмов?", ""),
    b = prompt("На сколько оцените его?", "");
  if (a != null && b !== null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
} while (i < 2);

if (personalMovieDB.count < 10) {
  console.log("Просмотрено, довольно, мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);

let result = x;
function pow(x, n) {
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
// стрелочная функция
// let doMin = (a, b) => (a < b ? a : b);

//lesson
function sayHello(name) {
  return console.log("Привет, " + name);
}

//lesson

function returnNeighboringNumbers(number) {
  let a = [number - 1, number, number + 1];
  return a;
}

//lesson

function getMathResult(a, b) {
  let space = "---";
  let c = 0;
  if (typeof b !== "number" || b == 0 || b < 0) {
    return a;
  } else {
    for (let i = 1; i <= b; i++) {
      c += a;
      console.log(c);
    }
    return c;
  }
}
