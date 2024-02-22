let form = document.querySelector('form');
console.log(form)
form.addEventListener( 'submit', function (event) {
    event.preventDefault();
    let height=parseInt(document.querySelector('#height').value);
    let weight=parseInt(document.querySelector('#weight').value);
    let result=document.querySelector('#result');

    if(isNaN(height) || isNaN(weight) || height<=0 || weight <= 0){
        alert("Please enter valid numbers for both Height and Weight");
        
    }else{
        var bmi=(Math.round(weight /(height*height)/10000),2);
        if(bmi < 18.5){
            result.style.color='orange';
            result.innerHTML+= `You are underweight ${bmi}`;
        } else if(bmi >= 18.5 && bmi < 25 ){
            result.style.color='green';
            result.innerHTML+= `Your ideal weight ${bmi}`;
        } else if(bmi >= 25 && bmi <30){
            result.style.color='orange';
            result.innerHTML += `You have overweight ${bmi}`;
        } else {
            result.style.color='red';
            result.innerHTML += `Obesity risk ${bmi}`;
        }
    }
})