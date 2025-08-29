// let h2=document.querySelector("h2");
// h2.innerText=h2.innerText+"from Apna College student";
// console.dir(h2.innerText);
// let divs=document.querySelectorAll(".box");
// let i=1;
// for(div of divs){
//     div.innerText=`new unique value ${i}`;
//     i++;
// }
//console.log(divs[2].innerText);
// let newButton=document.createElement("button");
// newButton.style.color="white";
// newButton.style.backgroundColor="red";
// newButton.innerText="click me";
// let body=document.querySelector("body");
// body.prepend(newButton);
// let para=document.querySelector("p");
// para.getAttribute("class");
// let mode=document.querySelector("#mode");
// let curMode="light";
// let body=document.querySelector("body");
// mode.addEventListener("click",() => {
//     if(curMode==="light")
//     {
//          body.classList.remove("light");
//       body.classList.add("dark");
//        // body.classList.remove("light");
        
//     }
//     else
//     {
//         body.classList.remove("dark");
//         body.classList.add("light");
//         //body.classList.remove("dark");
//     }
//     console.log(curMode);
// });
let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userCount=document.querySelector("#user-score");
const compCount=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was Draw,Play Again!!";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    
    if(userWin){
        userScore++;
        console.log("You Win");
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userCount.innerText=userScore;
    }
    else{
        compScore++;
        console.log("You lose");
        msg.innerText=`You Lost ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compCount.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        userWin=true;
        if(userChoice==="rock")
        {
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="rock"?true:false;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})


