// Counter Program

 const decreasebt=document.getElementById("decreasebt");
 const resetbt=document.getElementById("resetbt")
 const increasebt=document.getElementById("increasebt")
 const countLabel=document.getElementById("countLabel");
 let count=0;
increasebt.onclick=function(){
    count++;
    countLabel.textContent=count;
}
decreasebt.onclick=function(){
    count--;
    countLabel.textContent=count;
}
resetbt.onclick=function(){
    count=0;
    countLabel.textContent=count;
}