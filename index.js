let username;;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("inputText").value;
    document.getElementById("name").textContent=`Name is ${username}`;
}