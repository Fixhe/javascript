//Switch = can be an efficient replacement to many else if 
//         statements;

let testScore=40;
let testGrade;
switch(true){
    case testScore>=50:
        testGrade="pass";
         break;
    case testScore<50:
        testGrade="fail";
        break;
    default:
        testGrade="Absent";
}
console.log(`Result is ${testGrade}`);