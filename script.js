const bill = document.querySelector(".billing_amount");
const given = document.querySelector(".given_amount");
const balance = document.querySelector(".balance");
const paid = document.querySelector(".paid");
const display = document.querySelector(".p");

const span = document.querySelector(".span");

bill.addEventListener("keypress", () => {
  given.classList.remove("given_amount1");
  display.innerHTML = "";
});

balance.addEventListener("click", () => {
  if (bill.valueAsNumber < given.valueAsNumber) {
    let balaAmount = given.value - bill.value;
    console.log(balaAmount);
    let f = Math.floor(balaAmount / 500);
    console.log(Math.round(f));
    b = balaAmount % 500;
    let t = Math.floor(b / 200);
    console.log(t);
    b = b % 200;
    let h = Math.floor(b / 100);
    console.log(h);
    b = b % 100;
    let fifty = Math.floor(b / 50);
    console.log(fifty);
    b = b % 50;
    let twenty = Math.floor(b / 20);
    console.log(twenty);
    b = b % 20;
    let ten = Math.floor(b / 10);
    console.log(ten);
    b = b % 10;
    let five = Math.floor(b / 5);
    console.log(five);
    b = b % 5;
    let two = Math.floor(b / 2);
    console.log(two);
    b = b % 2;
    let one = Math.floor(b / 1);
    console.log(one);
    display.innerHTML = `500rs- ${f},   200rs- ${t},   100rs- ${h},   50rs- ${fifty},   20rs- ${twenty},   10rs- ${ten},   5rs- ${five},   2rs- ${two},   1rs- ${one}`;
  } else if (bill.valueAsNumber > given.valueAsNumber) {
    display.innerHTML = `you need to pay ${
      bill.valueAsNumber - given.valueAsNumber
    } rs more`;
  } else if (bill.valueAsNumber === given.valueAsNumber) {
    display.innerHTML = "Amount paid";
    bill.value = "";
    given.value = "";
    given.classList.add("given_amount1");
  } else {
    display.innerHTML = `Enter value in Bill Amount and Cash Given `;
  }
});

paid.addEventListener("click", () => {
  if (bill.valueAsNumber < given.valueAsNumber) {
    bill.value = "";
    given.value = "";
    display.innerHTML = "Amount paid";
    given.classList.add("given_amount1");
  } else if (bill.valueAsNumber === given.valueAsNumber) {
    display.innerHTML = "Amount paid";
    bill.value = "";
    given.value = "";
    given.classList.add("given_amount1");
  } else {
    display.innerHTML = `please Enter the Bill amount`;
  }
});
