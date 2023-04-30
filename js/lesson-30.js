// Мінімум

// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

// // Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const numberOne = "1";
const numberTwo = 2;
const sum2 = +numberOne + numberTwo;

// // Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку. (1 Gb = 1024 mb)
const sizeInGigabytes = prompt("Ведди на скільки Гб флешка?");
const sizeInMegabytes = sizeInGigabytes * 1024;
const filesRound = Math.floor(sizeInMegabytes / 820);
const filesFixed = (sizeInMegabytes / 820).toFixed(2);
const files = sizeInMegabytes / 820;

alert(
  `На флешку розміром ${sizeInGigabytes} Гб влізе близько ${filesRound} файлів розміром в 820 Мб, а точніше ${filesFixed},  а ще точніше ${files} `
);

// Норма

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

const money = prompt("enter money");
const barOfShockolad = prompt("enter prise of bars of shockolades");
const quantity = (money / barOfShockolad).toFixed(0);
const costs = barOfShockolad * quantity;
const rest = money - costs;
alert(`you can bye ${quantity} bars of shockolades and get the rest ${rest} `);

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
const number = prompt("введи тризначне число");
const array = number.split("");
const reversedArray = array.reverse();
const reversedString = reversedArray.join("");
alert(`А ось воно у перевернутому вигляді ${reversedString} `);

// Максимум

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const deposit = prompt("введи суму вкладу на 2 місяці");
const rate = ((((deposit / 100) * 5) / 12) * 2).toFixed(2);
alert(`сума нарахованих відсотків становить ${rate} `);

// Що повернуть вирази:

2 && 0 && 3; // вираз поверне - 0
2 || 0 || 3; // вираз поверне - 2
(2 && 0) || 3; // вираз поверне - 3
