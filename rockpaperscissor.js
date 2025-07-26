let userScore=0;
let compScore=0;
let ch=document.querySelectorAll(".choice"); //accessing all choices with choice class one by one
let msg=document.querySelector("#msg");
let userS=document.querySelector("#user-score");
let compS=document.querySelector("#comp-score");

function genCompChoice(){ //generating random index so it can be matched with array indexes
    let arr=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3); //math.floor removes decimal part, math.random generates random no. b/w 0 and 1
    //if we require random no. between 0 and 4, eg., multiply math.random by 5
    //we needed no. b/w 0 and 2 so multiplied random by 3
    return arr[randIdx];
}

function drawGame(){ //draw condition
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";
}

function showWinner(userWin, userChoice, compChoice){ //showing who beats who, updating score, change styling as required
    if (userWin===true){
        userScore++;
        userS.innerText=userScore;
        msg.innerText=`You win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compS.innerText=compScore;
        msg.innerText=`You lose:( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

function playGame(userChoice){
    let compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            if(compChoice==="paper"){
                userWin=false;
            }
            else{
                userWin=true;
            }
        }
        else if(userChoice==="paper"){
            if(compChoice==="scissors"){
                userWin=false;
            }
            else{
                userWin=true;
            }
        }
        else if(userChoice==="scissors"){
            if(compChoice==="rock"){
                userWin=false;
            }
            else{
                userWin=true;
            }
        }
    showWinner(userWin,userChoice,compChoice);
    }
}

ch.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
