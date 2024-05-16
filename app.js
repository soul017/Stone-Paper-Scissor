let user = 0;
let comp = 0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userparascore=document.querySelector("#user");
const compparascore=document.querySelector("#comp");
//computer choice
const getcompchoice = () => {
  const comchoice = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  return comchoice[random];
};
const draw = () => {
  console.log("draw");
  msg.innerText="Draw, Play Again";
        msg.style.backgroundColor="rgba(58, 61, 146, 0.812)";
};
//To show winner on screen
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        user++;
        userparascore.innerText=user;

        // console.log("YOU WIN");
        msg.innerText=`You Win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comp++
compparascore.innerText=comp;

        // console.log("COMUTER WIN");
        msg.innerText=`Computer Win! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame = (userchoice) => {
  console.log("user choice is: ", userchoice);
  const compchoice = getcompchoice();
//   console.log("computer choice is: ", compchoice);
  if (userchoice === compchoice) {
    //Draw.
    draw();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      //scissor, paper
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock,scissor
      userwin = compchoice === "scissor" ? false : true;
    } else {
      //rock,paper
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin,userchoice,compchoice);
  }
};

//user choice.
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");

    playgame(userchoice);
  });
});
