let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turn0=true;
    enable();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
            console.log("box was clicked");
            if(turn0){
                box.innerText="0";
                turn0=false;
            }else{
                box.innerText="X";
                turn0=true;
            }box.disabled=true;
            checkWinner();
});
});
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=()=>{
    msg.innerText='CONGRATULATIONS ,WINNER IS 0';
    msgcontainer.classList.remove("hide");
    disable();
}
const checkWinner=()=>{
for(let pattern of winPatterns){
  
    let pos1Value=boxes[pattern[0]].innerText;
    let pos2Value=boxes[pattern[1]].innerText;
    let pos3Value=boxes[pattern[2]].innerText;
    if(pos1Value!=""&& pos2Value!=""&& pos3Value!=""){
        if(pos1Value==pos2Value&&pos2Value==pos3Value){
            console.log("winner",pos1Value);
            showWinner(pos1Value);
        }
    }
}
};
newGameBtn.addEventListener("click",resetGame);
resetGameBtn.addEventListener("click",resetGame);
