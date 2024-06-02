// let userscore = 0;
// let compscore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");

// const userscorepara = document.querySelector("#userscore");
// const compscorepara = document.querySelector("#compscore");

//  const drawgame = () => {
//     msg.innerHTML = 'game was draw'
//     msg.style.backgroundcolor = 'yellow'
//  };



// const showWinner = (userWin,userChoice,compscore)=>{

//     if(userWin){
//         userscore++;
//         userscorepara.innerText = userscore;
//         msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
//         msg.style.backgroundcolor = 'green';
//     }else{
//         compscore++;
//         compscore.innerText = compscore;
//         msg.innerText = `you lose! your ${userChoice} defeat by ${compChoice}`;
//         msg.style.backgroundcolor = 'red';
//     }
// };
// const gencompChoice = ()=>{
// const options = ["rock","paper","scissors"];
// const randidx = Math.floor(Math.random()*3);
// return options[randidx];

// }

// const playgame = (userChoice)=>{
    
//     const compChoice = gencompChoice();
//     if(userChoice===compChoice){
//         drawgame();
//     }else{
//         let userWin = true;

//         if(userChoice==="rock"){
//             userChoice=compChoice==="paper" ? false:true;
       
//         }else if (userChoice==="paper"){

//             userWin=compChoice==="scissors" ? false:true;
//         }else{
//             userWin=compChoice==="rock"?false:true;
//         }

//         showWinner(userWin, userChoice,compChoice);

//     }
// };

// choices.forEach((choice)=> { 

//     choice.addEventListener('click',()=>{
//         const userChoice = choice.getAttribute("id");
        
//         playgame(userChoice)
//     });
// });
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});