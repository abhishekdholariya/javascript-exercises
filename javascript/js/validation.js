const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pass = document.getElementById("password");
const cpass = document.getElementById("cpassword");

form.addEventListener('click', (event) => {
  event.preventDefault();
  validate();
});
const isEmail=()=>{
    var atsymbol=email.indexOf("@");
    if(atsymbol<1) return false;
    var dot=email.lastIndexOf('.');
    if(dot<=atsymbol+2)return false;
    if(dot===email.length-1)return false;
    return true;
}
const validate = () => {
  const name = name.value.trim();
  const email = email.value.trim();
  const phone = phone.value.trim();
  const pass = password.value.trim();
  const cpass = cpassword.value.trim();

  if(name===""){
    setErrormsg(name, "Please enter your name.");
  }else if(name.length<=2){
    setErrormsg(name, "name min 3 char")
  } 
  else {
    setSuccessmsg(name);
  }
  if(email===""){
    setErrormsg(email, "Please enter your name.");
  }else if(!isEmail(email)) {
    setErrormsg(email, "not valid mail");
  } 
  else {
    setSuccessmsg(name);
  }
};
function setErrormsg(input, errormsgs){
    const formcontrol=input.parentElement;
    const small=formcontrol.querySelector('small');
    formcontrol.className="form-control error";
    small.innerText=errormsgs;
}

function setSuccessmsg(input){
    const formcontrol=input.parentElement;
    formcontrol.className="form-control success";
}