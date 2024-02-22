let submitbtn=document.getElementById('submitbtn');
let canvas=document.getElementById('canvas');
let reloadbtn=document.getElementById("reloadbtn");
let text="";

//generate text

var generatedCaptcha = '';
    function generateCaptcha() {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var length = 6; // Number of characters in the CAPTCHA
        generatedCaptcha = '';

        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * chars.length);
            generatedCaptcha += chars.substring(randomIndex, randomIndex + 1);
        }
        return generatedCaptcha;
    }

//ganerate random number
const randomNumber=(min,max)=>
    Math.floor(Math.random()*(max-min+1)+min);

function onCanvas(string){
    let ctx=canvas.getContext("2d");
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    const textcolor=["rgb(120,0,0),rgb[120,120,120]"];
    const letterspace=150/string.length;
    for(let i=0;i<string.length;i++){
        const xspace=20;
        ctx.font="20px Roboto Mono";
        ctx.fillstyle=textcolor[randomNumber(0,1)]
        ctx.fillText(string[i],xspace+i*letterspace,randomNumber(25,40),100);
    }
}
const triggerFunction=()=>{
    text = generateCaptcha();
    // console.log(text);
    onCanvas(text);
};

//call for reload button
reloadbtn.addEventListener('click',triggerFunction);

//call for page load
window.onload = () => triggerFunction();

//validate
function validate(){
let userinput=document.getElementById('user-input').value;
    if (userinput === text) {
        alert('Captcha is valid!');
    } else {
        alert('CAPTCHA is not valid! Please try again.');
        triggerFunction();
    }
}