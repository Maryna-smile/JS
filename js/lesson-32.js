// Мінімум
// Напиши всі можливі варіанти створення функцій.

// 1. Оголошення функції з ключовим словом function:
function someFunc() {}

// 2. Функціональний вираз:
const otherFunc = function () {};

// 3. Стрілкова функція:
const thirdFunc = () => {};

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function countArgs() {
  console.log(`Кількість аргументів: ${arguments.length}`);
}

const arrowArgs = (...args) => console.log(args.length);

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

const comparisonFunc = (a, b) => {

  if (a < b) {

    return -1;
  } else if (a > b) {

    return 1;
  } else {

    return 0;
  }
};

console.log(comparisonFunc(4, 9));

// Напиши функцію, яка обчислює факторіал переданого їй числа.

const findFactorial = (number) => {
  let factorial = 1;

  for (item = 1; item <= number; item += 1) {
    factorial *= item;
  }

  return factorial;
};

console.log(findFactorial(6));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

const makeOneNumber = (num1, num2, num3) => {
  const newNum = String(num1) + String(num2) + String(num3);

  return newNum;
};
console.log(makeOneNumber(1, 4, 7));

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

const calculateArea = (size1, size2 = size1) => {
  
  return size1 * size2;
};
console.log(calculateArea(7));

// Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function isPerfectNumber(someNumber) {
  let sum = 0;

  for (let item = 1; item < someNumber; item++) {

    if (someNumber % item === 0) {
      sum += item;
    }
  }

  if (sum === someNumber) {
    console.log(someNumber, "Досконале число");
  } else {
    console.log(someNumber, "не є досконалим числом");
  }
}

isPerfectNumber(100);

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
