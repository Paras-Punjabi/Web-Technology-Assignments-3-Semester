//*Question-1

console.log("Hello World From External Js File");

//*Question-2

let b = 90;
console.log("Scope of this 'b' is bounded under this Js File or this variable is a Global Variable");
console.log("b = " + b.toString());

function func1(){
    let a = 100;
    console.log("Scope of this 'a' is bounded under func1");
    console.log("a = " + a.toString());
}
func1()

//*Question-3

let variable = undefined;

if(variable === undefined){
    console.log("Variable is undefined");
}
else{
    console.log("Variable is defined and its value is " + variable.toString());
}