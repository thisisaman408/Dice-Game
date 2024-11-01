function audioPlay() {
  const audioPath = "images/sound.mp3";
  const audio = new Audio(audioPath);
  audio.play();
}
function rollDice() {
  const imageSource = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
  ];
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");

  const animationDuration = 1000;
  let startTime = Date.now();

  const interval = setInterval(() => {
    if (Date.now() - startTime < animationDuration) {
      img1.src = imageSource[Math.floor(Math.random() * 6)];
      img2.src = imageSource[Math.floor(Math.random() * 6)];
    } else {
      clearInterval(interval);

      x = Math.floor(Math.random() * 6) + 1;
      y = Math.floor(Math.random() * 6) + 1;

      img1.src = imageSource[x - 1];
      img2.src = imageSource[y - 1];

      if (x > y) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
      } else if (y > x) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
      } else {
        document.querySelector("h1").innerHTML = "DRAW!";
      }
    }
  }, 100);
}
function handleButtonClick() {
  audioPlay();
  setTimeout(() => {
    rollDice();
  }, 200);
}

document.querySelector(".btn").addEventListener("click", handleButtonClick);
