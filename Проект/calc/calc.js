let num1 = "";
let num2 = "";
let sign = "";
let res = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "x", "/"];

const screen = document.querySelector(".screen p");

function allClear() {
  num1 = "";
  num2 = "";
  sign = "";
  res = false;
  screen.textContent = 0;
}

document.querySelector(".ac").onclick = allClear;

document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("ac")) return;

  screen.textContent = "";
  const btnPress = event.target.textContent;
  if (digit.includes(btnPress)) {
    if (num2 === "" && sign === "") {
      num1 += btnPress;
      screen.textContent = num1;
    } else if (num1 !== "" && num2 !== "" && res) {
      num2 = btnPress;
      res = false;
      screen.textContent = num2;
    } else {
      num2 += btnPress;
      screen.textContent = num2;
    }
    return;
  }
  if (action.includes(btnPress)) {
    sign = btnPress;
    screen.textContent = sign;
    return;
  }
  if (btnPress === "%") {
    switch (sign) {
      case "+":
        num2 = (+num1 * +num2) / 100;
        console.log(num2);
        screen.textContent = num2;
        break;
      case "-":
        num2 = (num1 * num2) / 100;
        console.log(num2);
        screen.textContent = num2;
        break;
      case "x":
        num2 = num2 / 100;
        console.log(num2);
        screen.textContent = num2;
        break;
      case "/":
        if (num2 == "0") {
          screen.textContent = "Ошибка";
          num1 = "";
          num2 = "";
          sign = "";
          return;
        }
        num2 = num2 / 100;
        console.log(num2);
        screen.textContent = num2;
    }
  }
  if (btnPress === "=") {
    if (num2 === "") num2 = num1;
    switch (sign) {
      case "+":
        num1 = +num1 + +num2;
        break;
      case "-":
        num1 = num1 - num2;
        break;
      case "x":
        num1 = num1 * num2;
        break;
      case "/":
        if (num2 == "0") {
          screen.textContent = "Ошибка";
          num1 = "";
          num2 = "";
          sign = "";
          return;
        }
        num1 = num1 / num2;
        break;
    }
    res = true;
    if (String(num1).length <= 10) {
      screen.textContent = num1;
    } else {
      num1 = String(num1).substr(0, 10);
      screen.textContent = num1;
    }
  }
};
