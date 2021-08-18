// lottery promise
const lotteryPromise = new Promise((resolve, reject) => {
  const winnerNumber = Math.trunc(Math.random() * 10) + 1;
  console.log(winnerNumber);
  if (winnerNumber <= 5) reject("You Lose!");
  else resolve("Congratulations! YOU WON!!");
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));
