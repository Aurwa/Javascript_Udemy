function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
}

// rollDice();
// rollDice();
// rollDice();

function table(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

table(2);
