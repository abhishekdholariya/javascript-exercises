let btn=document.querySelectorAll('.button');
let body=document.querySelector('body');
btn.forEach(function (btn){
    console.log(btn);
    btn.addEventListener('click',function () {
        console.log(this)
        if(this.id=='grey'){
            body.style.backgroundColor='grey';
        }else if(this.id=='red'){
            body.style.backgroundColor='red';
        }else if(this.id=='green'){
            body.style.backgroundColor='#98FB98';
        }else if(this.id=='blue'){
            body.style.backgroundColor='#ADD8E6';
        }
        else{
            body.style.backgroundColor='#fff'
        }
    }); 
});
