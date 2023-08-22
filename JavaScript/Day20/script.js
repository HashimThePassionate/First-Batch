// //Return Satatement in a function
console.log("Return Statement in JS");
function add(a,b) {
    // return a+b;
    console.log(`Hello add function ${a+b}`);
}
add(10,20)
// //Function Expression
var a = function sub(a,b) {
    console.log(`The sub is ${a-b}`);
}
a(20,10);
// console.log("Function Expression");
// //Regular Function Vs Anonymous Function
var z  = function() {
    console.log("Hi! i am anonymous function.");
}
z();
//////////////////////////////////////
function dis(anoFun)
{
    return anoFun();
}
dis(function(){
    console.log("Hi");
})
///////////////////////////////////////
function mul()
{
    return function(a,b){
        return a*b;
    }
}
var a = mul();
console.log(mul());
console.log("sum is "+a(10,20));
// console.log("Regular Function Vs Anonymous Function");

//Arrow Function
// () => {}
var z = () => {
    console.log("Hi i am arrow function");
}
z();
////////////////////////////////////
var addition = (a,b) => {
    return a*b;
} 
console.log(addition(10,20));
var z = (x,y) => {return x*y;}

(function () {
    console.log("I will run without any call");
})();