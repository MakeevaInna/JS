/*Задание No1. Дочерние элементы в DOM
Для страницы:
<html>
<body>
 <div>Пользователи:</div>
 <ul>
  <li>Джон</li>
  <li>Пит</li>
 </ul>
</body>
</html>
Как получить:
• Напишите код, который получит элемент <div>?
• Напишите код, который получит <ul>? 
• Напишите код, который получит второй <li> (с именем Пит)?*/

1) document.body.firstChild.nextSibling;    или    document.body.firstElementChild;
2) document.body.firstElementChild.nextElementSibling;   или   document.body.lastElementChild;
3) document.body.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling; или
document.body.lastElementChild.lastElementChild;

/*Задание No2. Выделите ячейки по диагонали
Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
Вам нужно получить из таблицы <table> все диагональные <td> и выделить их,
используя код:
// в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red';
Результат:*/

let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
  for (let j = 0; j < table.rows[i].cells.length; j++) {
    table.rows[i].cells[j].innerText = j + 1 + ":" + (i + 1);
    if (i == j) {
      table.rows[i].cells[j].style.backgroundColor = "red";
    }
  }
}

/*Задание No3. Поиск элементов
Вот документ с таблицей и формой. Как найти?...
• Таблицу с id="age-table".
• Все элементы label внутри этой таблицы (их три).
• Первый td в этой таблице (со словом «Age»).
• Форму form с именем name="search".
• Первый input в этой форме.
• Последний input в этой форме.
Используйте код файла table.html и браузерные инструменты разработчика:
<html>
<body>
<form name="search">
<label>Search the site:
<input type="text" name="search">
</label>
<input type="submit" value="Search!">
</form>
<hr>
<form name="search-person">
Search the visitors:
<table id="age-table">
<tr>
<td>Age:</td>
<td id="age-list">
<label>
<input type="radio" name="age" value="young">less than
18</label>
<label>
<input type="radio" name="age" value="mature">18-50</label>
<label>
<input type="radio" name="age" value="senior">more than
50</label>
</td>
</tr>
<tr>
<td>Additionally:</td>
<td>
<input type="text" name="info[0]">
<input type="text" name="info[1]">
<input type="text" name="info[2]">
</td>
</tr>
</table>

<input type="submit" value="Search!">
</form>
</body>
</html>*/

1) document.body.children[2].firstElementChild;
   document.querySelector("#age-table");
2) document.querySelector("#age-list");
   document.querySelectorAll("#age-list label");
3) document.querySelectorAll("#age-table td")[0];
   document.querySelector("#age-table td");
4) document.querySelector("form[name = 'search']");
   forms = document.querySelectorAll("form")[0];
   forms = document.querySelector("form");
5) document.querySelectorAll("form[name = 'search'] input")[0];
   document.querySelectorAll("form[name = 'search'] input:first-child");
   document.querySelector("form input");
6) document.querySelectorAll("form[name = 'search'] input")[1];

/*Задание No4. Очистите элемент
Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
<ol id="elem">
<li>Привет</li>
<li>Мир</li>
</ol>*/

function clear(elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}
clear(elem);

/*Задание No5. Создайте список
Напишите интерфейс для создания списка.
Для каждого пункта:
1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
2. Создавайте элемент <li> и добавляйте его к <ul>.
3. Процесс прерывается, когда пользователь нажимает Esc или вводит пустую
строку.
Все элементы должны создаваться динамически.
Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный
текст.*/

let ul = document.createElement("ul");
document.body.prepend(ul);
let div = document.createElement("div");
document.body.prepend(div);
div.textContent = "Shopping list";
div.style.fontSize = "30px";

function showList() {
  let arr = [];
  while (true) {
    let buy = prompt("Что нужно купить?");
    if (buy == null || buy == "") {
      break;
    }
    let li = document.createElement("li");
    li.append(buy);
    arr.push(li);
  }
  return arr;
}
ul.append(...showList());

/*Задание No6. Вставьте HTML в список
Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
<ul id="ul">
<li id="one">1</li>
<li id="two">4</li>
</ul>*/

one.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");
//или
two.insertAdjacentHTML("beforebegin", "<li>2</li><li>3</li>");

/*Задание No7. Создать уведомление
Напишите функцию showNotification(options), которая создаёт уведомление: <div
class="notification"> с заданным содержимым. Уведомление должно автоматически
исчезнуть через 1,5 секунды.*/

function showNotification(options) {
  let div = document.createElement("div");
  div.className = "notification";
  document.body.prepend(div);
  div.style.position = "absolute";
  div.style.backgroundColor = "red";
  div.style.color = "yellow";
  div.style.padding = "5px";
  div.style.border = "1px solid black";
  div.style.top = options.top + "px";
  div.style.right = options.right + "px";
  div.textContent = options.html;
  setTimeout(() => div.remove(), 1500);
}
showNotification({
  top: 20,
  right: 20,
  html: "Hello!",
});
