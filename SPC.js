let user = 0;
let computer = 0;
const userScore = document.querySelector("#user");
const compScore = document.querySelector("#computer");
const choices = document.querySelectorAll(".choice");


choices.forEach((choice) => {
    choice.addEventListener("click" , ()=> {
        const opted = choice.getAttribute("id");
        console.log("you choosed " + opted);
        playGame(opted);
    });
});


const generateChoice = () => {
    const options = ["stone" , "paper" , "scissor"];
    const index = Math.floor(Math.random()*3);
    return options[index];
};


const playGame = (opted) => {
    const computerChoice = generateChoice();
    console.log("Computer choosed " + computerChoice);
    if(opted === computerChoice){
        draw();
    }
    else{
        let win = true;
        if(opted === "stone"){
           win = computerChoice === "paper" ? false : true;
        }
        else if(opted === "paper"){
            win = computerChoice === "scissor" ? false : true;
        }
        else{
            win = computerChoice === "paper" ? true : false;
        }
        result(win);
    }
};


const draw = () =>{
    console.log("Game is draw");
    message.innerText = "Game is Draw";
    message.style.backgroundColor =" #081b31";
}


const result = (win) => {
    if(win){
        console.log("User won");
        user++;
        userScore.innerText = user;
        message.innerText = "You Win";
        message.style.backgroundColor = "green";
    }
    else{
        computer++;
        compScore.innerText = computer;
        console.log("Computer won");
        message.innerText = "You Lose";
        message.style.backgroundColor = "red";
    }
}


let message = document.querySelector(".mess");





