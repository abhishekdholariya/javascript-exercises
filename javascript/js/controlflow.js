// for(let i=1;i<=5;i++){
//     if(i==2){
//         console.log(i+" is the second number");
//     }
//     console.log(i);
// }

// for(let i=1;i<=10;i++){
//     console.log(`The table of I is ${i}`);
//     for(let j=1;j<=RTCPeerConnectionIceEvent;j++){
//         console.log(`${i} x ${j}= ${i*j}`);
//     }
// }

// for(let i=1;i<10;i++)
// {
//     if(i==3){
//         console.log("detected 3");
//         break;
//     }
//     console.log(`Value of i: ${i}`);
// }
// for(let i=1;i<10;i++)
// {
//     if(i==3){
//         console.log("detected 3");
//         continue;
//     }
//     console.log(`Value of i: ${i}`);
// }

// let  arr=[5,6,7];
// let i=0;
// while (i<arr.length) {
//     console.log(arr[i]);
//     i++;
// }
// let score=0;
// do{
//     console.log(score);
//     score++;
// }while(score<5);

// let num=[12,32,45,12];
// for (const Val of num) {
//     console.log(Val);
// }
// let name="abhishek";
// for (const str of name) {
//     console.log(str);
// }

// //map
// const mapdemo = new Map();
// mapdemo.set('name','Abhi');
// mapdemo.set('age',28);

// for (const [key,Value] of mapdemo) {
//     console.log(key+':='+Value);
// }
let nums=[1,2,3,4,5,6,7,8];
let numaad=nums.map((nums)=>nums+10)
                .map((nums)=>nums+1)
                .filter((nums)=>nums>=15);

console.log(numaad);
console.log(nums);

const myobject={
    js:'javscript',
    cpp:'c++',
    py:'python'
}
// for (const key in myobject) {
//     if (myobject.hasOwnProperty(key)) {
//         console.log(`${key}:=${myobject[key]}`);
//     }
// }


// for (const key in myobject) {
//     console.log(`${key} is for ${myobject[key]}`);
// }

// const cod=["js", "cpp","py"];
// cod.push("java");

// cod.forEach(function(val){
//     console.log(val);
// })

// cod.forEach( (items)=>{
//     console.log(items);
// })

// const manyonject=[
//     {
//         langname:"javscript",
//         langfilename:"js"
//     },
//     {
//         langname:"python",
//         langfilename:"py"
//     }
// ]
// manyonject.forEach((items)=>{
//     console.log(items.langname +" is used to create "+ items.langfilename+" files");
// })

//const mynums=[1,2,3,4,5,5,6,7,8,9];
    // const  newarr = [...new Set(mynums)]; // remove duplicates  using set
// const newdata=mynums.filter((item)=>{
//     return item>5;
// })
// console.log(newdata);
// const newnum=[];
// mynums.forEach((num) => {
//     if(num>5){
//         newnum.push(num);
//     }    
// });
// console.log(newnum);

//filter
const books=[
    {
        title : "book one",
        pages: 100,
        gerne:"history",
    },
    {
        title : "book two",
        pages: 78,
        gerne:"science",
    },
    {
        title : "book three",
        pages: 70,
        gerne:"history",
    },
    {
        title : "book four",
        pages: 78,
        gerne:"science",
    }
]

let userbook = books.filter((bk)=>bk.gerne=='history');
userbook=books.filter((bk)=>bk.pages > 80 && bk.gerne == 'history') ;
console.log(userbook);


//reduce
const numbers=[1,2,3,4,5];
const total=numbers.reduce(function(acc,cur){
    console.log(`acc ${acc} ,is currect value ${cur}`);
    return acc + cur;
},0)
console.log(total);
const newtotal = numbers.reduce((acc,cur)=>acc+cur ,0)
console.log(newtotal);
