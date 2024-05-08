// while loop= repeat some code WHILE some condition is true


let logIn=false;
let username;
let password;
while(!logIn){
    username=window.prompt(`input username`);
    password=window.prompt(`input password`);
    if(username==="Username" && password==="Password"){
        logIn=true;
        console.log("you login was sucessed");
    }else{
        console.log("Invalide credential");
    }
}