//Задание No1. Переменные
let name;
let admin;
name = 'Инна';
admin = name;
alert(admin);

//Задание No2. Константы
const BIRTHDAY = '18.04.1982';
const age = someCode(birthday);

//Задание No3. Строки
5. let name = "Ilya";
6. alert( `hello ${1}` ); // hello 1
7. alert( `hello ${"name"}` ); // hello name
8. alert( `hello ${name}` ); // hello Ilya

//Задание No4. Преобразования типов
"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2

6 / "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 //'$45'
"4" - 2 // 2
"4px" - 2 //NaN
7 / 0 // Infinity
" -9 " + 5 //' -9 5'
" -9 " - 5 //-14
null + 1 // 1
undefined + 1 //NaN

//Задание No5. Постфиксная и префиксная формы
let a = 1, b = 1;
let c = ++a; // a = 2, c = 2
let d = b++; // b = 2, d = 1

//Задание No6. Результат присваивания
let a = 2;
let x = 1 + (a *= 2); a = 4, x = 5

//Задание No7. Операторы сравнения
5 > 4 //true
"ананас" > "яблоко" //false
"2" > "12" //true
undefined == null //true
undefined === null  //false
null == "\n0\n" //false
null === +"\n0\n" //false

//Задание No8. Операторы взаимодействия

let mes = prompt('Как вас зовут?');
alert(`Привет, ${mes}`);

//Задание No9. Условные операторы
Выведется ли alert?
if ("0") {
alert( 'Привет' );
} //да

//Задание No10. Условные операторы
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Каково
// «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае –
// отобразить: «Не знаете? ECMAScript!»

let mes = prompt('Каково «официальное» название JavaScript?');
if (mes == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}

//Задание No11. Покажите знак числа
// Используя конструкцию if..else, напишите код, который получает число через prompt, а
// затем выводит в alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

let mes = +prompt('Введите число');
if (mes > 0) {
    alert(1);
} else if (mes < 0) {
    alert(-1);
} else {
    alert(0);
}

// Задание No12. ИЛИ
alert( null || 2 || undefined ); // 2

//Задание No13. ИЛИ
alert( alert(1) || 2 || alert(3) ); // 1, потом 2

//Задание No14. И
alert( 1 && null && 2 ); // null

//Задание No15. И
alert( alert(1) && alert(2) ); // 1 потом undefined

//Задание No16.
alert( null || 2 && 3 || 4 ); // 3

// Задание No17. Проверка значения из диапазона
// Напишите условие if для проверки, что переменная age находится в диапазоне между
// 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

if (age >= 14 && age <= 90) {}

// Задание No18. Проверка значения вне диапазона
// Напишите условие if для проверки, что значение переменной age НЕ находится в
// диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого
// оператора.

if (age < 14 || age > 90) {}
if (!(age >= 14 && age <= 90)) {}

// Задание No19. 

// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?
if (-1 || 0) alert( 'first' ); // выполнится, -1
if (-1 && 0) alert( 'second' ); //
if (null || -1 && 1) alert( 'third' ); //выполнится, 1

// Задание No20. Проверка логина
// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не
// введено или нажата клавиша Esc – показать «Отменено», в противном случае
// отобразить «Я вас не знаю».
// Пароль проверять так:
// 1. Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// 2. Иначе – «Неверный пароль»,
// 3. При отмене – «Отменено».
// Блок-схема:

// Для решения используйте вложенные блоки if. Обращайте внимание на стиль и
// читаемость кода.
// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''.
// Нажатие клавиши Esc во время запроса возвращает null.

let login = prompt('Введите логин');
if (login == 'Админ') {
    let password = prompt('Введите пароль');
    if ( password == 'Я главный') {
        alert('Здравствуйте');
    } else if (password == null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (login == null || login == '') {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}

// Задание No21. Переписать условия "if" на "switch"
// Перепишите код с использованием одной конструкции switch:
let a = +prompt('a?', '');
if (a == 0) {
alert( 0 );
}
if (a == 1) {
alert( 1 );
}
if (a == 2 || a == 3) {
alert( '2,3' );
}

let a = +prompt('a?', '');
switch (a) {
case 0:
    alert( 0 );
    break;  
case 1:
    alert( 1 );
    break;
case 2:
case 3:
    alert( '2,3' );
    break;
}

// Задание No22.
// Дано целое число. Если оно является положительным, то прибавить к нему 1; в
// противном случае не изменять его. Вывести полученное число.

let num = +prompt('Введите число');
if (num > 0) {
    num += 1;
} 
console.log (num);

// Задание No23.
// Дано целое число. Если оно является положительным, то прибавить к нему 1; в
// противном случае вычесть из него 2. Вывести полученное число.

let num = +prompt('Введите число');
if (num > 0) {
    num += 1;
} else {
    num -= 2;
}
console.log (num);


// Задание No24.
// Дано целое число. Если оно является положительным, то прибавить к нему 1; если
// отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10. Вывести
// полученное число.

let num = +prompt('Введите число');
if (num > 0) {
    num += 1;
} else if (num < 0) {
    num -= 2;
} else {
    num = 10;
}
console.log (num);


// Задание No25.
// Даны три целых числа. Найти количество положительных чисел в исходном наборе.

let num1 = +prompt('Введите число');
let num2 = +prompt('Введите число');
let num3 = +prompt('Введите число');
let counter = 0;
if (num1 > 0) {
    counter++;
}
if (num2 > 0) {
    counter++;
}
if (num3 > 0) {
    counter++;
}
console.log (counter);

// Задание No26. Даны три целых числа. Найти количество положительных и количество
// отрицательных чисел в исходном наборе.
let num1 = +prompt('Введите число');
let num2 = +prompt('Введите число');
let num3 = +prompt('Введите число');
let positiveNumbers = 0;
let negativeNumbers = 0;
if (num1 > 0) {
    positiveNumbers++;
} else if (num1 < 0) {
    negativeNumbers++;
}
if (num2 > 0) {
    positiveNumbers++;
} else if (num2 < 0) {
    negativeNumbers++;
}
if (num3 > 0) {
    positiveNumbers++;
} else if (num3 < 0) {
    negativeNumbers++;
}
console.log (`Положительных ${positiveNumbers}, Отрицательных ${negativeNumbers}`);

// Задание No27.
// Даны два числа. Вывести большее из них.

let num1 = +prompt('Введите число');
let num2 = +prompt('Введите число');
if (num1 > num2) {
    console.log(num1);
}
else if (num2 > num1) {
    console.log(num2); 
}

// Задание No28.
// Даны два числа. Вывести вначале большее, а затем меньшее из них.

let num1 = +prompt('Введите число');
let num2 = +prompt('Введите число');
if (num1 > num2) {
    alert(num1);
    alert(num2);
}
else if (num2 > num1) {
    alert(num2); 
    alert(num1);
}

// Задание No29. Даны две переменные вещественного типа: A, B. Перераспределить
// значения данных переменных так, чтобы в A оказалось меньшее из значений, а в B —
// большее. Вывести новые значения переменных A и B.

let a = +prompt('Введите число');
let b = +prompt('Введите число');
let c = 0;
if (a > b) {
    c = a;
    a = b;
    b = c;
    console.log(a, b);
} else if (a < b) {
    console.log(a, b);
}

// Задание No30.
// Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить
// каждой переменной сумму этих значений, а если равны, то присвоить переменным
// нулевые значения. Вывести новые значения переменных A и B.

let a = +prompt('Введите число');
let b = +prompt('Введите число');
let c = 0;
if (a != b) {
    c = a + b;
    a = c;
    b = c;
    console.log(a, b);
} else if (a == b) {
    a = 0;
    b = 0;
    console.log(a, b);
}

// Задание No31.
// Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить
// каждой переменной большее из этих значений, а если равны, то присвоить
// переменным нулевые значения. Вывести новые значения переменных A и B.

let a = +prompt('Введите число');
let b = +prompt('Введите число');
if (a != b) {
    if (a > b) {
        b = a;
        console.log(a, b);
    } else if (a < b) {
        a = b;
        console.log(a, b);
    }
} else if (a == b) {
    a = 0;
    b = 0;
    console.log(a, b);
}

// Задание No32.
// Даны три числа. Найти наименьшее из них.

let num1 = +prompt('Введите число');
let num2 = +prompt('Введите число');
let num3 = +prompt('Введите число');
if (num1 <= num2 && num1 <= num3) {
    console.log(num1); 
} else if (num2 <= num1 && num2 <= num3) {
    console.log(num2); 
} else if (num3 <= num1 && num3 <= num2) {
    console.log(num3);
}

// Задание No33.
// Даны три числа. Найти среднее из них (то есть число, расположенное между
// наименьшим и наибольшим).

let num1 = +prompt('Введите число');
let num2 = +prompt('Введите число');
let num3 = +prompt('Введите число');
if ((num1 < num2 && num1 > num3) || (num1 > num2 && num1 < num3)) {
    console.log(num1); 
} else if ((num2 < num1 && num2 > num3) || (num2 > num1 && num2 < num3)) {
    console.log(num2); 
} else if ((num3 < num1 && num3 > num2) || (num3 > num1 && num3 < num2)) {
    console.log(num3);
}

// Задание No34.
// Даны три числа. Вывести вначале наименьшее, а затем наибольшее из данных чисел.
let num1 = +prompt('Введите число');
let num2 = +prompt('Введите число');
let num3 = +prompt('Введите число');

if (num1 <= num2 && num1 <= num3) {
    console.log(num1); 
} else if (num2 <= num1 && num2 <= num3) {
    console.log(num2); 
} else if (num3 <= num1 && num3 <= num2) {
    console.log(num3);
}
if (num1 >= num2 && num1 >= num3) {
    console.log(num1); 
} else if (num2 >= num1 && num2 >= num3) {
    console.log(num2); 
} else if (num3 >= num1 && num3 >= num2) {
    console.log(num3);
}

// Задание No35.
// Даны три числа. Найти сумму двух наибольших из них.

let num1 = +prompt('Введите число');
let num2 = +prompt('Введите число');
let num3 = +prompt('Введите число');
let firstMax = 0;
let secondMax = 0;
if (num1 >= num2 && num1 >= num3) {
    firstMax = num1; 
} else if (num2 >= num1 && num2 >= num3) {
    firstMax = num2; 
} else if (num3 >= num1 && num3 >= num2) {
    firstMax = num3; 
}
if ((num1 <= num2 && num1 >= num3) || (num1 >= num2 && num1 <= num3)) {
    secondMax = num1;
} else if ((num2 <= num1 && num2 >= num3) || (num2 >= num1 && num2 <= num3)) {
    secondMax = num2;
} else if ((num3 <= num1 && num3 >= num2) || (num3 >= num1 && num3 <= num2)) {
    secondMax = num3;
}
console.log (firstMax + secondMax);

// Задание No36.
// Даны три целых числа, одно из которых отлично от двух других, равных между собой.
// Определить порядковый номер числа, отличного от остальных.
let num1 = +prompt('Введите число');
let num2 = +prompt('Введите число');
let num3 = +prompt('Введите число');
if (num1 == num2) {
    console.log(3); 
} else if (num2 == num3) {
    console.log(1); 
} else if (num3 == num1) {
    console.log(2);
}

