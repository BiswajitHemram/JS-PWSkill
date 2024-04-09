const passwordCheck = (password,confirmPassword)=>{
    if(password === confirmPassword){
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful");
    }
}

passwordCheck("myPassword123", "myPassword123");
passwordCheck("password123", "differentPassword");