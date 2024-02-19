
let user = 0;
let comp = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#computer-score")

const GameDraw = () => {
    console.log("Game was Draw")
    msg.innerText = "Game Was Draw / Play Again";
    msg.style.backgroundColor = "yellow"
    msg.style.color = "black"
}
const generateCompChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        console.log("you Won");
        msg.innerText = `Congratualtions You Won , Your ${userchoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
        user++;
        userScorePara.innerText = user;
    } else {
        comp++;
        compScorePara.innerText = comp;
        console.log("Computer Won")
        msg.innerText = `Computer Won , ${compChoice} Beats Your ${userchoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userchoice) => {
    console.log("User Choice = ", userchoice);
    const compChoice = generateCompChoice();
    console.log("Computer Choice = ", compChoice);
    if (userchoice === compChoice) {
        GameDraw()
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compChoice === "scissor" ? false : true
        } else {
            userWin = compChoice == "rock" ? false : true
        }
        showWinner(userWin, userchoice, compChoice)
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});