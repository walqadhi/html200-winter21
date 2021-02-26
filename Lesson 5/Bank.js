let Still_Using = true;
let balance = 5000;

while (Still_Using) {
  const userInput = prompt(
    "Please select from one of the optins below? Q: Quit, B: Balance, D: Deposit, W: Withdrawl");

  if (userInput.toUpperCase() === "Q") {
    Still_Using = false;
  } else if (userInput.toUpperCase() === "B") {
    alert(balance);
  } else if (userInput.toUpperCase() === "D") {
    deposit();
  } else if (userInput.toUpperCase() === "W") {
    takeout();
  }

}

function takeout() {
  const Money_they_want = prompt("How much you want?");

  if (balance - Number(Money_they_want) > 0) {
    balance = balance - Number(Money_they_want);
  } else if {
    alert("overdraft");
  }
}

function deposit() {
  const Money_To_Put_In = prompt("How much to Deposit?");
  balance = balance + Number(Money_To_Put_In);
}
