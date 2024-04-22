//String methods = allow you to mainpulate and work with text (strings)

let userName = " Ravin";
 

// console.log(userName.charAt(4))
// console.log(userName.lastIndexOf("i"))

// userName=userName.trim();
// userName = userName.toUpperCase()
// userName = userName.toLocaleLowerCase()
// userName = userName.repeat(3)
// console.log(userName);

let results = userName.startsWith(" ")
if(results){
    console.log(`you can't begin with ' '`);
}else{
    console.log(userName)
}

let phoneNumber="123-456-789"
let result=phoneNumber.padStart(15,0);
let result1=phoneNumber.padEnd(15,0);
console.log(result)
console.log(result1)

