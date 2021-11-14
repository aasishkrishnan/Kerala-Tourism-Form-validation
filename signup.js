

function checksignupnew(){
    var email1 = document.getElementById("inputEmailtest");
    var password1 = document.getElementById("inputPassword4");
    var password = document.getElementById("errorpass");
    var phone = document.getElementById("inputPhoneNumber");
    var emailcheck = document.getElementById("emailcheck");
    var errorphone = document.getElementById("errorphone");
    let regexpEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    let regexpPass = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
    let regexPhonecheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/    
    var address = document.getElementById("inputAddress");
   
    if(email1.value.trim()==""){
        alert("Email field empty");
        return false;
    }

    else if(regexpEmail.test(email1.value.trim())==false){
        emailcheck.innerHTML = "Invalid Email"
        emailcheck.style.color = "red";
        return false;

    }
    

    else if(password1.value.trim()==""){
        alert("Password field empty");
        return false;
    }

    else if(address.value.trim()==""){
        alert("Address field is empty");
        return false;
    }


   
    else if(regexpPass.test(password1.value.trim())==false){
        password.innerHTML = "Invalid Password"
        password.style.color = "red";
        return false;
    }         
     
  
    else if(phone.value.trim()==""){
        alert("Phone field cannot empty");
        return false;
    }

    
    if(regexPhonecheck.test(phone.value)==false){
        errorphone.innerHTML = "Invalid Phone Number Format"
        errorphone.style.color = "red";
        return false;
    }

     else{
         alert("Sign Up Successfull");
         return true;
     }
}

 function strengthdetector(){
    var password1 = document.getElementById("inputPassword4");
    var password = document.getElementById("errorpass");

    if(password1.value.length<=8){
        password.innerHTML = "Poor password"
        password.style.color = "red";
       

    } 

    else if(password1.value.length>=9 && password1.value.length<=12){
        password.innerHTML = "Medium Password"
        password.style.color = "orange";
        
        
    }

    else if(password1.value.length>=12){        
        password.innerHTML = "Strong Password"
        password.style.color = "Green";
       

             
    } 

      else{
          return true;
      }
       
       
 }

    



