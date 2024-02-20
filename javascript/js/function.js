function demo(){    
    console.log("demo function"); 
}
demo();

function add(a,b){
    return  a+b;
}
let  result = add(2,3);
console.log(result);

/*function logindemo(username){
    if (username == undefined){
        console.log(`${username} Hello admin!`);
        retutn;
    } else {
        return "Hello guest!";
    }
}
console.log(logindemo("abhi"));*/

/*const user={
    uname:"abhi",
    price:123
};
function addcart(anyobject){
    console.log(`user name is: ${anyobject.uname} and total price is ${anyobject.price}`);
}
addcart(user);
*/
// function sum(...args){
//     let sum=0;
//     for(let arg of args) sum += arg;
//     return sum;
// }
// let ssd =sum(12,3,43,64,23,87,98);
// console.log(ssd);

(function demo(){
    console.log('this is a demo');
})();

(function(name){
    console.log(`hello ${name}`);
})('abhishek');