function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

let SCORE = 0;
let COMPSCORE = 0;

let win = false;
function toggleButtonVisibility() {
  const button = document.getElementById("nextbtn");
  console.log(win);
  if (win) {
    button.style.display = "block"; // Show the button
  } else {
    button.style.display = "none"; // Hide the button
  }
}
let isTie = false;
function setTieState(isTie) {
  const newGameButton = document.getElementById("newGameButton");
  if (isTie) {
    newGameButton.textContent = "REPLAY";
  } else {
    newGameButton.textContent = "PLAY AGAIN";
  }
}

const handOptions = {
  rock: "./assets/Rock.png",
  paper: "./assets/Paper.png",
  scissors: "./assets/Scissors.png",
};
const pickUserHand = (hand) => {
  console.log(hand);

  //hide the current page (hands==option)
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  //show the next page with the hand user picked

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  //set the user pick
  document.getElementById("userPickImage").src = handOptions[hand];

  pickCompHand(hand);
  //   let cpHand=pickCompHand();
  //   referee(hand,cpHand);
};

const pickCompHand = (hand) => {
  let hands = ["rock", "paper", "scissors"];
  // console.log(hands[1]);
  let cpHand = hands[Math.floor(Math.random() * 3)];

  //set comp pick
  document.getElementById("compPickImage").src = handOptions[cpHand];
  referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOST AGAINST PC");
    setCompScore(COMPSCORE + 1);
    setTieState(false);
  } else if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN AGAINST PC");
    setScore(SCORE + 1);
    setTieState(false);
    win = true;
    toggleButtonVisibility();
  } else if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE AGAINST PC");
    setCompScore(COMPSCORE + 1);
    setTieState(false);
  } else if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN AGAINST PC");
    setScore(SCORE + 1);
    setTieState(false);
    win = true;
    toggleButtonVisibility();
  } else if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOST AGAINST PC");
    setCompScore(COMPSCORE + 1);
    setTieState(false);
  } else if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN AGAINST PC");
    setScore(SCORE + 1);
    setTieState(false);
    win = true;
    toggleButtonVisibility();
  } else if (userHand == "paper" && cpHand == "paper") {
    setDecision("TIE UP");
    setTieState(true); 
  } else if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN AGAINST PC");
    setScore(SCORE + 1);
    setTieState(false);
    win = true;
    toggleButtonVisibility();
  } else if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOST AGAINST PC");
    setCompScore(COMPSCORE + 1);
    setTieState(false);
  } else if (userHand == "rock" && cpHand == "rock") {
    setDecision("TIE UP");
    setTieState(true); 
  } else if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("TIE UP");
    setTieState(true); 
  } else if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOST AGAINST PC");
    setCompScore(COMPSCORE + 1);
    setTieState(false);
  } else if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN AGAINST PC");
    setScore(SCORE + 1);
    setTieState(false);
    win = true;
    toggleButtonVisibility();
  }
};

const restartGame = () => {
  let hands = document.querySelector(".hands");
  hands.style.display = "flex";

  let contest = document.querySelector(".contest");
  contest.style.display = "none";
};

const setDecision = (decision) => {
  document.querySelector(".decision h3").innerText = decision;
};

const setScore = (score) => {
  SCORE = score;
  document.querySelector(".score h3").innerText = score;
};

const setCompScore = (compscore) => {
  COMPSCORE = compscore;
  document.querySelector(".compscore h3").innerText = compscore;
};
