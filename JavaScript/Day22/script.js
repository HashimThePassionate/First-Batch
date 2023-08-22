// Objecta is the collection of properties using key and value pairs
// Object Literal
// var Person1 = {
//     Name:"Muhammad Hashim",
//     age:23,
//     "eye color":"Brown",
//     programming:{ 
//         highLevel:"Python",
//         highBeg:"Java"
//     },
//     eating:function() {
//         return "Eating";
//     }    
// }
// var Person2 = {
//     Name:"Muhammad Yunus",
//     age:36,
//     "eye color":"Black",
//     programming:{ 
//         highLevel:"Python",
//         highBeg:"JavaScript"
//     },
//     eating:function() {
//         return "Hardworking";
//     }    
// }
// console.log(Person1.age);
// console.log(Person1.eating());
// console.log(Person1["eye color"]);
// console.log(Person1.programming.highBeg);
// console.log(Person1.programming.highLevel);

// console.log(Person2.age);
// console.log(Person2.eating());
// console.log(Person2["eye color"]);
// console.log(Person2.programming.highBeg);
// console.log(Person2.programming.highLevel);
// Object Literal Different Version
// let Person = {};
// Person.height = "6.5";
// Person['Eye Color'] = "Brown";
// console.log(Person.height);
// console.log(Person['Eye Color']);

// Object Constructor 
// // an object constructor is a function that is used to create and initialize objects using new keyword
// function Mobile(model,ram,rom,camera,battery){
//     this.model = model,
//     this.ram = ram,
//     this.rom = rom,
//     this.camera = camera,
//     this.battery = battery,
//     this.show = function() {
//         console.log(`Model Name is ${this.model}`);
//         console.log(`Ram size  is ${this.ram}`);
//         console.log(`Internal memory is ${this.rom}`);
//         console.log(`Battery Power is ${this.battery}`);
//         console.log(`Pixel size is ${this.camera}`);
//     }
// }
// var model = prompt("Please Enter Your Model Name");
// var ram = prompt("Please Enter Your Ram size");
// var rom = prompt("Please Enter Your Internal Memory");
// var camera = prompt("Please Enter Your Camera Pixel");
// var battery = prompt("Please Enter Your Battery Health in mah");
// var s22 = new Mobile(model,ram,rom,camera,battery)
// var iphone = new Mobile(model,ram,rom,camera,battery)
// // var ProMax = new Mobile("Iphone Promax","4GB","64GB","20","5000mh")
// // console.log();
// s22.show();
// iphone.show();
function Person(Name, Age, EyeColor, FavProgramming)
{
    this.Name = Name,
    this.Age = Age,
    this.EyeColor = EyeColor,
    this.FavProgramming = FavProgramming,
    this.display = function() {
        console.log(`Name is ${this.Name}`);
        console.log(`Age is ${this.Age}`);
        console.log(`Eye Color is ${this.EyeColor}`);
        console.log(`Favourite Programming is ${this.FavProgramming}`);
    };
}
var yunus = new Person("Muhammad Yunus",36,"Black","JavaSceipt");
var hashim = new Person("Muhammad Hashim",23,"Black","TypeScript");
yunus.display();
hashim.display();
console.log("==11111111111111111111111111111111111111111");
console.log(yunus.Name);
console.log(yunus.Age);
// //Task
