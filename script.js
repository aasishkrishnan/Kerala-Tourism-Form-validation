

function validate(){
    let email = document.getElementById("exampleInputEmail1");
    let password = document.getElementById("exampleInputPassword1");
    var emailcheck = document.getElementById("emailcheck");
    var password1 = document.getElementById("errorpass");
    let regexpEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    let regexpPass = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/



    if(email.value==""||password.value==""){
        alert("Fields cannot be empty");
        return false;
    }

    else if(regexpEmail.test(email.value.trim())==false){
        emailcheck.innerHTML = "Invalid Email"
        emailcheck.style.color = "red";
        return false;

    }

    else if(regexpPass.test(password.value.trim())==false){
        password1.innerHTML = "Invalid Password"
        password1.style.color = "red";
        return false;
    } 
    
    
    else{
        return true;
    }
}


function strengthdetector(){
    let password = document.getElementById("exampleInputPassword1");
    var password1 = document.getElementById("errorpass");

    if(password.value.length<=8){
        password1.innerHTML = "Poor password"
        password1.style.color = "red";
       

    } 

    else if(password.value.length>=9 && password.value.length<=12){
        password1.innerHTML = "Medium Password"
        password1.style.color = "orange";
        
        
    }

    else if(password.value.length>=12){        
        password1.innerHTML = "Strong Password"
        password1.style.color = "Green";
       

             
    } 

      else{
          return true;
      }
       
       
 }




