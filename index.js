//if statement=if a condition is true, execute some code 
//              if not, do something else

const myInput=document.getElementById("myInput");
const mySubmit=document.getElementById("mySubmit");
const result=document.getElementById("result");

let age;
mySubmit.onclick=function(){
    age=myInput.value;
    if(age>100){
        result.textContent=(`you are oldder`)
    }if (age>=18) {
        result.textContent=(`you can enter this site`)
    }if(age<18){
        result.textContent=(`you can't enter this site`)
    }if(age==0){
        result.textContent=(`you have had born yet`)
    }

}