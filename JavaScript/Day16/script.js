// document.write("<h1>This is Heading Tag <h1>");
// var a =  document.getElementById('override');
// function over() {
//     document.write("<h1>Erase Everything</h1>");
// }
// var a = 10;
// document.write(a+"<br>");
// document.write(b);
// var b = 20;

// console.log(Name);
// var a = 20;
// function Name() {
//    var a =  10;
//    let x = 20;
//    const z = 300;
//    console.log(`a = ${a} x  = ${x} z = ${z}`);
// }
// Name()
// console.log(`a = ${a}`);
// // console.log(x);
// // console.log(z);


// function dis(a,b,c=20) {
//     console.log(`A = ${a} B = ${b} C = ${c} `);
//     // console.log(`D = ${arguments[3]}  E = ${arguments[4]}`);
// }
// dis(10,20)
// dis(10,20,30)
// var result = ((4 + 1) ** 2) * (10 / 5);
// // ((5)**2)*(2)
// // (25)*(2)
// // 50
// console.log(result);
// console.log(`Calling a function before Function Declaration : ${Addition(10,20)}`);
// function Addition(a,b) {
//     return a+b;
//  }
// // console.log(`The Subtraction of two number is : ${a(10,5)}`); don't call before function expression
// var a = function Subtraction(a,b) {
//     return a-b;
// }
// console.log(`The Subtraction of two number is : ${a(10,5)}`);
// //Store Anonymous Function  in a variable
// var a = function(a,b) {
//     return a*b;
// }
// console.log(`Anonymous Function : ${a(10,2)}`);
// // Passing Anonymous Function  as a argument in a function
// function display(anonymousFun)
// {
//     return anonymousFun()
// }
// display(function()
// {
//     console.log("Hi this is Anonymous Function ");
// });

// function mul()
// {
//     return function(a,b){
//         return a**b;
//     }
// }
// console.log(`The power is  : ${mul(2,3)}`);
// var a  = mul();
// console.log(`The power is  : ${a(2,3)}`);
// // Arrow Function
// // ( ) => {};
// // Normal Function
// function show()
// {
//     console.log("Hi There! Normal Function");
// }
// show();
// // Arrow Function
// var shw = () => {console.log("Hii There! Arrow Function");};
// shw();
// // Arrow Function with Arguments
// var ADDITION = (a,b) => {return a+b};
// console.log(ADDITION(10,20));
// var MULTIPLICATION = (a,b) => a*b;
// console.log(MULTIPLICATION(2,3));
// // Immediately Invoked  Function Expression (IIFE)
// (function() {
//     var a  = 10; 
//     console.log(`Square of 10 is : ${a*a}`); 
// })();
//Rest Paramter
// function restFunction(...rest)
//     {
//         console.log(rest);
//         console.log("First index value is :"+rest[0]);
//     }
// restFunction(1,2,3,4,5,6,7,8,9,10);
// //Array
// var studentDetail = [1,"Muhammad Hashim","example@gmail.com","Black","Travelling"];
// console.log(typeof(studentDetail));
// console.log(Array.isArray(studentDetail));
// //Array.isArray() function to check weather object is array or not 
// if(Array.isArray(studentDetail))
// {
//     console.log("It is Array Object");
// }
// else
// {
//     console.log("It is not an array object");
// }
// //instance of Array check weather it is an instance of array
// if(studentDetail instanceof Array)
// {
//     console.log("Yes it is instance of an array");
// }
// ////Few Methods in Array
// var studentNames = ["Hashim","Zubair","Zeeshan","Ahmed","Haris"];
// console.log(`Total Array Length is : ${studentNames.length}`);
// for(var i=0;i<studentNames.length;i++)
// {
//     console.log(studentNames[i]);
// }
// //toString Method is used to convert array into string separated by commas
// console.log(studentDetail.toString());
// //join() is used to join array into string by default with comma, b ut you can change easily
// console.log(studentDetail.join());
// console.log(studentDetail.join('|'));
// console.log(studentDetail.join(" "));
// //Push() Add new Element at the end
// studentNames.push("Ahmed","Awais");
// console.log(studentNames);
// //Pop() method to remove items from the last index
// studentNames.pop();
// studentNames.pop();
// console.log(studentNames);
// //unshift add new items in the beginning
// studentNames.unshift("Ehtisham","Umair");
// console.log(studentNames);
// //shift() to remove item  from the begining
// studentNames.shift();
// console.log(studentNames);
// //The splice() method in JavaScript is used to change the contents of an array by removing, replacing, or adding elements at a specified index or range of indices. It modifies the original array and can also return an array containing the removed elem
// //array.splice(startIndex, deleteCount, item1, item2, ...);
// var colors = ["Red","Green","Blue","Orange","Yellow","Black","Pink"];
// console.log(colors);
// colors.splice(2,2);//['Red', 'Green', 'Yellow', 'Black', 'Pink']
// console.log(colors);
// colors.splice(2,1,"Gray","violet");
// console.log(colors);//['Red', 'Green', 'Gray', 'violet', 'Black', 'Pink']
// //is used to create a new array that contains a copy of a portion of an existing array.
// var newColors = colors.slice(1,3);
// console.log(newColors);// ['Green', 'Gray']
// //delete list to delete specified index
// console.log(delete colors[2]);
// console.log(colors);//['Red', 'Green', 'violet', 'Black', 'Pink']
// //concat() combine two  arrays
// var arr1 = [1,2,3,4];
// var arr2 = [5,6,7,8];
// var arr3 = [9,10,11];
// var newArray = arr1.concat(arr2);
// var mularray = arr1.concat(arr2,arr3);
// console.log(newArray);
// console.log(mularray);
// //indexOd() method in JavaScript is used to find the first occurrence of a specified 
// //array.indexOf(searchElement, startIndex);
// console.log(colors.indexOf('Black'));
// //The lastIndexOf() method in JavaScript is similar to the indexOf() method, but instead of finding the first occurrence of a specified element within an array, it finds the last occurrence and returns its index. If the element is not found in the array, it return
// var numbers = [10,20,30,40,50];
// console.log(numbers.lastIndexOf(30));
// //includes() The includes() method in JavaScript is used to determine whether an array contains a specific element. It returns true if the element is found in the array, and false
// if(numbers.includes(30))
// {
//     console.log("Element is Present in the array");
// }

//Objecta is the collection of properties using key and value pairs
//Object Literal
// let employee = {
//     name:"Junaid",
//     scale:19
// };
// console.log(employee.name);
// console.log(employee.scale);

//Object Literal Different Version
// let student = {};
// student['name'] = "Umer";
// student['Section'] = "A";
// student.age = 16;
// console.log(student['name']);
// console.log(student['Section']);
// console.log(student['age']);

//Object Literal Nesting Complex Example
// let person = {
//     name:"Muhammad Hashim",
//     age:23,
//     height:"5'6",
//     isStudent:true,
//     address:{
//         city:"Rawalpindi",
//         street:"xyz"
//     },
//     sayHello:function(){
//         return "Hello Object Literals";
//     }
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person.address.city);
// console.log(person.sayHello());

//Object Constructor 
// an object constructor is a function that is used to create and initialize objects using new keyword
// function Person(name, age){
//     this.name =  name,
//     this.age = age,
//     this.sayHello = function(){
//         return `Hello My name is ${this.name}`
//     };
// }
// var p1 = new Person("Muhammad",20);
// var p2 = new Person("Hashim",23);
// console.log(p1.sayHello());
// console.log(p2.age);

//Task
let student =  [
    {
        name:"Muhammad Hashim",
        age:23,
        regNo:932,
        course:"Metaverse",
        favProgramming:["Python","JavaScript"],
        marks:{
            english:75,
            urdu:45,
            maths:60,
            computer:90,
            programming:90
        },

    }
];
console.log(student[0].name);
console.log(student[0].age);
console.log(student[0].course);
console.log(student[0].favProgramming[0]);
console.log(student[0].marks.english);
