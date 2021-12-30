const answer1 = document.querySelector(".answer0"),
  answer2 = document.querySelector(".answer1"),
  answer3 = document.querySelector(".answer2"),
  answer4 = document.querySelector(".answer3");

const answerElement = document.querySelectorAll(".answer"),
  clueElement = document.querySelectorAll(".buttons div");

const question = document.querySelector(".question");

const money = document.querySelectorAll(".stage");

let indexOfStage = 14;

let numberOfQuestion = 0;

let indexOfQuestion = 0;

let modal = document.querySelector("#window");

const questions = [
  {
    question: "Как в JavaScript вычислить процент от числа ?", //1
    options: [
      "Так в JavaScript нельзя делать",
      "Оператор : %",
      "Умножить на кол-во процентов и разделить на 100",
      "Вывод метода findPrecent()",
    ],
    rightAnswer: 2,
  },
  {
    question: 'Результат выражения "13" + 7 ', //2
    options: ["20", "137", "undefined", "error"],
    rightAnswer: 1,
  },
  {
    question: "На JavaScript нельзя писать :", //3
    options: ["Игры", "Скрипты для сайтов", "Десктопные приложения", "Плохо"],
    rightAnswer: 3,
  },
  {
    question: "Внутрь какого HTML-элемента вставляется JavaScript ?", //4
    options: ["script", "scriptyng", "js", "javascript"],
    rightAnswer: 0,
  },
  {
    question: "Как создать функцию в JavaScript ?", //5
    options: [
      "function : myFunction()",
      "function  myFunction()",
      "function = myFunction()",
      "function - myFunction()",
    ],
    rightAnswer: 1,
  },
  {
    question: "Как вызвать функцию в JavaScript ?", //6
    options: [
      "myFunction()",
      "call myFunction()",
      "call.myFunction()",
      "myFunction",
    ],
    rightAnswer: 0,
  },
  {
    question: "Инструмент работы и динамических изменений на странице ?", //7
    options: ["BOM", "MOM", "DOM", "TOM"],
    rightAnswer: 2,
  },
  {
    question: "Что означает CSS ?", //8
    options: [
      "Каскадные таблицы стилей",
      "Компьютерные таблицы стилей",
      "Творческие таблицы стилей",
      "Красочные таблицы стилей",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Где в HTML документе правильно ссылаться на внешнюю таблицу стилей ?", //9
    options: ["body", "header", "foter", "так нельзя делать"],
    rightAnswer: 1,
  },
  {
    question: "Как написать оператор IF в JavaScript ?", //10
    options: ["if i = 5 then", "if i == 5", "if (i == 5)", "if (i = 5)"],
    rightAnswer: 2,
  },
  {
    question:
      "Какой HTML тег используется для определения внутренней таблицы стилей ?", //11
    options: ["script", "css", "style", "div"],
    rightAnswer: 2,
  },
  {
    question: "Какой синтаксис CSS является правильным ?", //12
    options: [
      "body{color:black}",
      "body=color:black",
      "color-black=body",
      "Нет правильных ответов",
    ],
    rightAnswer: 0,
  },
  {
    question: "Как написать Привет Мир в окне оповещения JS ?", //13
    options: [
      'alertbox("Привет Мир")',
      "msg(Привет Мир)",
      "echo(Привет Мир)",
      'alert("Привет Мир")',
    ],
    rightAnswer: 3,
  },
  {
    question: "Какое из слов не является зарезервированным в JS ?", //14
    options: ["default", "throw", "finally", "undefined"],
    rightAnswer: 3,
  },
  {
    question: "В React все является ... ?", //15
    options: ["Модулем", "Компонентом", "Пакетом", "Классом"],
    rightAnswer: 1,
  },
];

window.addEventListener("load", () => {
  load();
});

const load = () => {
  question.innerHTML = questions[indexOfQuestion].question;
  answer1.innerHTML = questions[indexOfQuestion].options[0];
  answer2.innerHTML = questions[indexOfQuestion].options[1];
  answer3.innerHTML = questions[indexOfQuestion].options[2];
  answer4.innerHTML = questions[indexOfQuestion].options[3];
};

for (answer of answerElement) {
  answer.addEventListener("click", (e) => controlAnswer(e));
}
for (buttonsDiv of clueElement) {
  buttonsDiv.addEventListener("click", (e) => selectClue(e));
}

const controlAnswer = (el) => {
  console.log(el);
  if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
    el.target.classList.add("correct");
    winMoney("win");
    indexOfStage--;
    numberOfQuestion++;
    if (numberOfQuestion == 15) {
      modal.style.display = "block";
      document.querySelector(".content h1").innerHTML = "Поздравляем!";
      document.querySelector(".score").innerHTML = "Ваш выигрыш - 1000000!";
    }
    setTimeout(nextLevel, 2000);
  } else {
    el.target.classList.add("wrong");
    setTimeout(gameOver, 2000);
  }
  disabledAnswers();
};

const winMoney = (status) => {
  console.log(money);
  money[indexOfStage].classList.add(`${status}`);
};

const disabledAnswers = () => {
  answerElement.forEach((item) => {
    item.classList.add("disabled");
    if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
      item.classList.add("correct");
    }
  });
};

const nextLevel = () => {
  enableAnswer();
  indexOfQuestion++;
  load();
  clueFirst = document.querySelector(".answer0");
  clueFirst.style.visibility = "visible";
  clueSecond = document.querySelector(".answer1");
  clueSecond.style.visibility = "visible";
  clueFirst = document.querySelector(".answer2");
  clueFirst.style.visibility = "visible";
  clueSecond = document.querySelector(".answer3");
  clueSecond.style.visibility = "visible";
};

const enableAnswer = () => {
  answerElement.forEach((item) => {
    item.classList.remove("disabled", "correct", "wrong", "call", "help");
  });
};

const selectClue = (el) => {
  let first;
  let second;
  if (el.target.dataset.id == "fifty") {
    first = randomExp();
    second = randomExp();

    if (first == second) {
      second = randomExp();
    }
    console.log(first);
    console.log(second);

    clueFirst = document.querySelector(".answer" + first);
    clueFirst.style.visibility = "hidden";
    clueSecond = document.querySelector(".answer" + second);
    clueSecond.style.visibility = "hidden";
  } else if (el.target.dataset.id == "call") {
    first = random();
    clueFirst = document.querySelector(".answer" + first);
    clueFirst.classList.add("call");
  } else if (el.target.dataset.id == "help") {
    first = random();
    clueFirst = document.querySelector(".answer" + first);
    clueFirst.classList.add("help");
  }
};
function randomExp(
  min = 0,
  max = 3,
  exp = questions[indexOfQuestion].rightAnswer
) {
  let rand;

  while (true) {
    if ((rand = Math.floor(Math.random() * (max - min + 1)) + min) != exp)
      return rand;
  }
}

function random(min = 0, max = 3) {
  let rand = Math.floor(Math.random() * (max - min + 1) + min);
  return rand;
}

const gameOver = () => {
  modal.style.display = "block";
  if (numberOfQuestion >= 0 && numberOfQuestion < 5) {
    document.querySelector(".content h1").innerHTML = "Конец игры";
    document.querySelector(".score").innerHTML = "Ваш выигрыш - 0!";
  } else if (numberOfQuestion >= 5 && numberOfQuestion < 10) {
    document.querySelector(".content h1").innerHTML = "Конец игры";
    document.querySelector(".score").innerHTML = "Ваш выигрыш - 1000!";
  } else if (numberOfQuestion >= 10 && numberOfQuestion < 15) {
    document.querySelector(".content h1").innerHTML = "Конец игры";
    document.querySelector(".score").innerHTML = "Ваш выигрыш - 32000!";
  }
};
