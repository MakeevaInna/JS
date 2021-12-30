document.querySelector("#btn").onclick = (event) => {
  let num = document.querySelector("#number").value;
  let min = document.querySelector("#num-min").value;
  let max = document.querySelector("#num-max").value;
  let numReserve = [];
  let rand = 0;

  if (num == "" || min == "" || max == "") {
    document.querySelector("#res").innerHTML = "Введите все данные!";
  } else if (+max < +min) {
    document.querySelector("#res").innerHTML = "Неправильный диапазон!";
  } else {
    while (numReserve.length < num) {
      rand = Math.floor(Math.random() * (+max - +min + 1) + +min);
      numReserve.push(rand);
    }
    document.querySelector("#res").innerHTML = numReserve.join(", ");
  }
};
