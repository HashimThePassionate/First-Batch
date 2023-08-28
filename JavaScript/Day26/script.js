// ids
var id =  (id) => document.getElementById(id);
// classes
var classes = (classes) => document.getElementsByClassName(classes);

// get ids
var Name = id('username');
var email = id('email');
var pass = id('password');
var form = id('form');

// get classes
var error = classes('error');
var failure = classes('failure-icon');
var success = classes('success-icon');

var validation = (id,indexNo,message) => {
    if(id.value.trim() === "")
    {
        error[indexNo].innerHTML = message;
        id.style.border = "3px solid red";
        failure[indexNo].style.opacity="1";
        failure[indexNo].style.color="red";
        success[indexNo].style.opacity="0";
        error[indexNo].style.color="red";
        error[indexNo].style.fontSize="16px";
        error[indexNo].style.fontWeight="600";

    }
    else if(indexNo == 2)
    {
        if(!isValidPassword(id.value))
        {
            error[indexNo].innerHTML = "Password must contain letters, numbers,<br>and symbols and be between 10 <br>and 15 characters";
            
        }
        else 
        {
            error[indexNo].innerHTML = "";
        }
    }
    else
    {
        error[indexNo].innerHTML = "";
        id.style.border="3px solid green";
        success[indexNo].style.opacity="1";
        success[indexNo].style.color="green";
        failure[indexNo].style.opacity="0";


    }
}
function isValidPassword(pass)
{
    const letterPattern = /a-zA-Z/;
    const numberPattern = /0-9/;
    const symbolPattern = /~!@#$%^&*/;
    return (
        letterPattern.test(pass) &&
        numberPattern.test(pass) &&
        symbolPattern.test(pass) &&
        pass.length >= 10 &&
        pass.length < 15
    )
 }


form.addEventListener( 'submit', (e) =>{
    e.preventDefault();
    validation(Name,0,"Name cannot be empty!");
    validation(email,1,"Email cannot be empty!");
    validation(pass,2,"Password cannot be empty!");
} );