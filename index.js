//RAMDOMNUMBER GENERATOR
const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const max=100;
const min=50;
let randomNum;
myButton.onclick = function(){
    randomNum = Math.floor(Math.random() *max)+min;
    myLabel.textContent = randomNum;
}
