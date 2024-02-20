// 1. Write a JavaScript program that takes an array of numbers as input and returns the sum of all elements in the array.
console.log("helo");
let mydate = new Date();
console.log(mydate.toDateString());
console.log(mydate.getMonth()+1);
mydate.toLocaleString('en-US', { month: 'long' }); // Outputs the long representation of the month
console.log(mydate.getUTCDate());
let arr = [1,2,3,4,5];
const arr2=[6,7,23,9,1];
arr.push(6);
arr.pop();
arr.unshift(0);
arr.shift();
console.log(arr.includes(6))
console.log(arr.indexOf(12));
console.log(arr);
const newarr=arr.join();
console.log(newarr);
let arr3=[...arr, ...arr2];
console.log(arr3);
console.log(arr2.length);
console.log(arr2.sort());
console.log(typeof arr2);
// let len=arr.length;
// let html = "<ul>";
// for (let i = 0; i <len; i++) 
// {
//     console.log(html += `<li>Element ${i} is ${arr[i]}</li>`);
// }
// html += "</ul>";

const regularuser={
    email : "abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"abc",
            lastname:"xyz"
        }
    },
    address:"ahmedabad",
    phone_no:1234567890
}
// console.log(regularuser.fullname.userfullname.firstname);
// console.log(Object.keys(regularuser));
const person={
    name:"John Doe",
    age:30,
    city:"New York"
};
function greetings(person){
   return `Hello! My name is ${person.name}, I am ${person.age} years old and live in ${person.city}.`;
}
console.log(greetings(person));

const student={
    name:"Tom Smith",
    age:18,
    major:"Computer Science",
    gpa:3.75
};
student.firstname = function(){
    return this.name +" "+this.age;
}
console.log(student.firstname().toUpperCase());
const getset ={
    name:"abc",
    age:32,
    language:"javascript",
    get lang(){
        return this.language;
    }
};
console.log(getset["name"]);
console.log(getset.lang);

const obj ={counter:0};

Object.defineProperty(obj,"reset",{
    get:function(){this.counter=0;}
});

Object.defineProperty(obj,"increment",{
    get:function(){this.counter++;}
});

Object.defineProperty(obj,"drecrement",{
    get:function(){this.counter--;}
});

Object.defineProperty(obj,"add",{
    set:function(value){this.counter+=value;}
});

obj.increment;
obj.reset;
obj.add=5;
console.log("Counter Value : " ,obj.counter); 

function persons(name,age) {
    this.name = name ;
    this.age = age ;
}
const myname=new persons("abhi",21);
myname.phone_no=12345667;
console.log(myname.phone_no);
