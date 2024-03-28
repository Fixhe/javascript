//check = property that determines the checked state of an 
//        HTML checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const myVisaBtn = document.getElementById("myVisaBtn");
const myMastercardBtn = document.getElementById("myMastercardBtn");
const myPaypalBtn = document.getElementById("myPaypalBtn");
const mySubmit = document.getElementById("mySubmit");
const resultSubmit = document.getElementById("resultSubmit");
const resultPayment = document.getElementById("resultPayment");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        resultSubmit.textContent = `you are subscribed`;
    }else{
        resultSubmit.textContent = `you are not subscribed`;
    }
    if(myVisaBtn.checked){
        resultPayment.textContent = `you are paying with Visa`;
    }else if(myMastercardBtn.checked){
        resultPayment.textContent=`you are paying with mastercard`;
    }else if(myPaypalBtn.checked){
        resultPayment.textContent=`you are paying with Paypal`;
    }else{
        resultPayment.textContent=`you must select one all of payment`;
    }
}