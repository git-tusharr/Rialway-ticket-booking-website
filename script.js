let Signup=()=>{
    let Name=document.querySelector("#signname").value.trim();
    let Number=document.querySelector("#signnumber").value.trim();
    let Email=document.querySelector("#signemail").value.trim();
    let Password=document.querySelector("#signpass").value.trim();
    let Confirmpassword=document.querySelector("#signcpass").value.trim();

    let errname=document.querySelector("#errname")
    let errnumber=document.querySelector("#errnumber")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")

    errname.innerHTML = "";
    errnumber.innerHTML = "";
    erremail.innerHTML = "";
    errpass.innerHTML = "";
    errcpass.innerHTML = "";

       // Errors of Name
    if (Name=="") {
        errname.innerHTML="*Please enter your name";
        return false;
    }

    // Errors of Number
    else if(Number==""){
        errnumber.innerHTML="*Please enter you number";
        return false;
    }

    else if(Number.length!=10){
        errnumber.innerHTML="*Please enter 10 digits"
        return false;
    }

    else if(isNaN(Number)){
        errnumber.innerHTML="*Please enter numbers only";
        return false;
    }


    // Errors of Email
    else if(Email==""){
        erremail.innerHTML="*please enter you email";
        return false;
    }

    else if(!(Email.includes('@') && Email.includes('.com'))){

        erremail.innerHTML="*please enter valid email";
        return false;

    }


    // Errors of Password

    else if(Password==""){
        errpass.innerHTML="*please enter you password";
        return false;
    }


    else if(!( Password.match(/[0-9]/) 
        && Password.match(/[!@#$%^&*]/) 
        && Password.match(/[a-z]/) 
        && Password.match(/[A-Z]/))){
         errpass.innerHTML="*Create a strong password";
        return false;

    }

    else if(Password.length<8){
        errpass.innerHTML="*Your password must contain 8 character";
        return false;
    }

    // Errors of Confirm password
    else if(Confirmpassword==""){
        errcpass.innerHTML="*please confirm your password";
        return false;
    }

    else if(Password!=Confirmpassword){
        errcpass.innerHTML="*Password did not matched";
        document.querySelector("#cpass").value="";
        document.querySelector("#cpass").focus();
        return false;
    }



    localStorage.setItem("name",Name)
    localStorage.setItem("number",Number)
    localStorage.setItem("email",Email)
    localStorage.setItem("password",Password)

    location.href="login.html"
    return false

}


let Login=()=>{
    let loginEmail=document.querySelector("#loginemail").value.trim();
    let loginpass=document.querySelector("#loginpassword").value.trim();

    let localemail=localStorage.getItem("email");
    let localpass=localStorage.getItem("password")

    if (loginEmail==localemail && loginpass==localpass ) {
        
        location.href="home.html";
        return false;

    }

    else{
        alert("please enter correct credentials")
    }
}


