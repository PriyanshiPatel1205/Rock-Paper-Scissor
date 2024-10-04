let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const gencompChoice=()=>{
    //generate computer choice
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);   //to generate index between 0 to 3
    return options[randIdx];
}

const drawgame=()=>{
    console.log("Game was draw!!");
}

const showWinnwer=(userwin, userChoice, compChoice)=>{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("User choice: ",userChoice);
    const compChoice=gencompChoice();   //will give computer choice
    console.log("Computer Choice: ",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawgame();
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
           userwin = compChoice === "paper"? false:true;
        }
        else if(userChoice === "paper"){
            userwin = compChoice === "scissor"? false:true;
        }
        else{
            userwin = compChoice === "rock"? false:true;
        }
        showWinnwer(userwin, userChoice, compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    })
})