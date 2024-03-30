// ternary operator = a shortcut to if{} and else{} statement
//               help to assign variable based on a condition
//              condition? codeiftrue : codeiffale;

// let age=17;
// let message = age>18?`your are adult`:`you are a minor`;
// console.log(message)

// let purchamoung=200;
// let discound = purchamoung>=100? 50 : 0;
// console.log(`Payment is $${purchamoung-purchamoung*(discound/100)}`)

const myInput=document.getElementById("myInput");
const mySubmit=document.getElementById("mySubmit");
const result=document.getElementById("result");
let discount;
mySubmit.onclick=function(){
    const inputValue=parseFloat(myInput.value);
    if(!isNaN(inputValue)){
    discount=inputValue>=100? 50 : 0;
    const payment=inputValue-inputValue*(discount/100);
    result.textContent=`Payment is $${payment.toFixed(2)}`;
    }else{
        result.textContent=`Please input value `
    }

}
