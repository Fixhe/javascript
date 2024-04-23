//String slicing = creating a substring from a portion of anotther string

//                  string.slice(start, end)


const fullName="Dre Ravin";

// let firstName=fullName.slice(0,3);
// let lastName=fullName.slice(4,9);

// console.log(firstName);
// console.log(lastName);

// let firstChar=fullName.slice(0,1);
// let lastChar=fullName.slice(-1);

// console.log(firstChar);
// console.log(lastChar);

// let firstName=fullName.slice(0,fullName.indexOf(" "));
// let lastName=fullName.slice(fullName.indexOf(" ")+1)
// console.log(firstName);
// console.log(lastName);

const email="dre@gmail.com";
let username=email.slice(0,email.indexOf("@"));
let extension=email.slice(email.indexOf("@")+1);
console.log(username);
console.log(extension);
