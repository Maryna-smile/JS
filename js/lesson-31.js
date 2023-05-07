// Мінімум

// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const age = parseInt(prompt("Введіть свій вік:"));

if (isNaN(age)) {
  alert("Ви ввели некоректне значення для віку.");
} else {

  if (age < 0) {
    alert("Ви ще не народилися :)");
  } else if (age <= 11) {
    alert("Ви є дитиною.");
  } else if (age <= 17) {
    alert("Ви є підлітком.");
  } else if (age <= 59) {
    alert("Ви є дорослим.");
  } else if (age <= 120) {
    alert("Ви є пенсіонером.");
  } else {
    alert("Ви довгожитель!!!");
  }
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const number = parseInt(prompt("Введіть число від 0 до 9:"));

if (isNaN(number) || number < 0 || number > 9) {
  alert("Ви ввели некоректне число.");
} else {
  switch (number) {
    case 0:
      alert("Спецсимвол на клавіші 0 - )");
      break;
    case 1:
      alert("Спецсимвол на клавіші 1 - !");
      break;
    case 2:
      alert("Спецсимвол на клавіші 2 - @");
      break;
    case 3:
      alert("Спецсимвол на клавіші 3 - #");
      break;
    case 4:
      alert("Спецсимвол на клавіші 4 - $");
      break;
    case 5:
      alert("Спецсимвол на клавіші 5 - %");
      break;
    case 6:
      alert("Спецсимвол на клавіші 6 - ^");
      break;
    case 7:
      alert("Спецсимвол на клавіші 7 - &");
      break;
    case 8:
      alert("Спецсимвол на клавіші 8 - *");
      break;
    case 9:
      alert("Спецсимвол на клавіші 9 - (");
      break;
  }
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const num1 = parseInt(prompt("Введіть перше число діапазону: "));
const num2 = parseInt(prompt("Введіть друге число діапазону: "));

if (isNaN(num1) || isNaN(num2)) {
  alert("Ви ввели некоректні дані.");
} else {
  let sum = 0;

  for (let item = num1; item <= num2; item += 1) {
    sum += item;
  }
  alert(`Сума всіх чисел в діапазоні від ${num1} до ${num2} дорівнює ${sum}.`);
}

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const firstNumber = parseInt(prompt("Введіть перше число: "));
const secondNumber = parseInt(prompt("Введіть друге число: "));

function findGCD(firstNumber, secondNumber) {
  while (secondNumber !== 0) {
    let temp = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = temp;
  }

  return firstNumber;
}

const gcd = findGCD(firstNumber, secondNumber);
alert(
  `Найбільший спільний дільник ${firstNumber} та ${secondNumber} дорівнює ${gcd}.`
);

// Запитай у користувача число і виведи всі дільники цього числа.
const numberX = parseInt(prompt("Введіть число:"));

if (isNaN(numberX)) {
  alert("Ви ввели некоректні дані.");
} else {
  const divisors = [];

  for (let item = 1; item <= numberX; item += 1) {
    if (numberX % item === 0) {
      divisors.push(item);
    }
  }
  alert(`Дільники числа ${numberX}: ${divisors.join(", ")}`);
}
//////////////////////////////////////////////////////////////////////////////
// Норма

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const userNumber = 145;
const numberToString = String(userNumber);
const reversedString = numberToString.split("").reverse().join("");

if (numberToString === reversedString) {
  console.log("this number is a palindrom");
} else {
  console.log("this number is not a palindrom");
}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

const money = 100;
let discount;

if (money < 200) {
  discount = 0;
} else if (money >= 200 && money <= 300) {
  discount = 0.03;
} else if (money >= 300 && money <= 500) {
  discount = 0.05;
} else {
  discount = 0.07;
}

const price = money - money * discount;
console.log(`you need to pay ${price} hrn`);

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let positiveNumber = 0;
let negativeNumber = 0;
let zeroNumber = 0;
let oddNumber = 0;
let evenNumber = 0;
let generalNumbers;

for (let i = 0; i <= 10; i += 1) {
  let enteredNumber = prompt(`enter 10 number, now you have entered ${i}`);

  if (isNaN(enteredNumber)) {
    alert("Ви ввели некоректні дані.");
  } else {
    if (enteredNumber > 0) {
      positiveNumber += 1;
      if (enteredNumber % 2 === 0) {
        evenNumber += 1;
      } else {
        oddNumber += 1;
      }
    } else if (enteredNumber < 0) {
      negativeNumber += 1;
      if (enteredNumber % 2 === 0) {
        evenNumber += 1;
      } else {
        oddNumber += 1;
      }
    } else {
      zeroNumber += 1;
    }
    generalNumbers = positiveNumber + negativeNumber + zeroNumber;
  }
}

alert(
  `You were supposed to enter 10 numbers, and ${generalNumbers} attempts turned out to be successful. Out of these  ${generalNumbers}  numbers, you entered  ${positiveNumber}  positive numbers,  ${negativeNumber}  negative numbers, and  ${zeroNumber}  zeros. Also, out of the listed numbers,  ${evenNumber}  were even and ${oddNumber} were odd.`
);

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

let daysOfWeek = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
  "Неділя",
];

for (let index = 0; index <= daysOfWeek.length; index += 1) {
  let answer = confirm(daysOfWeek[index] + ". Хочеш побачити наступний день?");

  if (!answer) {
    break;
  } else if (index === daysOfWeek.length) {
    index = 0;
  }
}

// Максимум

// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").

{
  /* Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10. */
}

{
  /* Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік. */
}
