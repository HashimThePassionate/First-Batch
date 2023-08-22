//Arrays is the collections of data items stored in a single name
// Arrays are special type of objects 
var array = [1,"Hashim",23,];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
//Lets Check the typeof Array
console.log(typeof(array));//Return Object
//Colors Example
var Colors = ["Black","Red","Blue","White"];
console.log(Colors);
//length Property to check array length in a number
console.log(Colors.length);//4
//Array.isArray() to check it is array or not
if(Array.isArray(Colors))
{
    console.log("This is Array");
}
else{
    console.log("This is not an array");
}
//toString Convert array into string with comma operator ,
console.log(" Type =  "+typeof(array.toString())+" "+array.toString());
//join() as same as toString() but add  your own separtor
console.log(array.join('|'));//1|Hashim|23
//Push Method add new items at the end
Colors.push("Golden","Gray");
console.log(Colors);//"Black","Red","Blue","White","Golden","Gray"
//Pop delete items in the end of array
Colors.pop();
console.log(Colors);//"Black","Red","Blue","White","Golden
//unshift() add new items in the beginning
//shift() remove new items in the begining
//Do it by yourself
// Splice Method
// array.splic(start, deletecount,replacevalues)
Colors.splice(2,1,"Yellow");
console.log(Colors);//'Black', 'Red', 'Yellow', 'White', 'Golden'
//indexOf() to find the first occerence 
console.log(Colors.indexOf("Red"));//1
//includes() and lastIndexOf() do it by yourself

