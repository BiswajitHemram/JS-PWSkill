class User{
    #password
    constructor(username,password){
        this.username = username;
        this.#password = password;
    }
    get passwordGet(){
        return "*".repeat(this.#password.length);
    }
    set passwordSet(newPassword){
        if (+(newPassword.length) >= 8 && /\d/.test(newPassword) && /[A-Z]/.test(newPassword)) {
            this.#password = newPassword;
            console.log("Password Change Successfully.");
        } else {
            console.log(`Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.`);
        }
    }
}

const user = new User("Rahul", "Password12")
console.log(user.passwordGet);
user.passwordSet = "mypassword";
user.passwordSet = "MyPassword";
user.passwordSet = "MyPassword123";
console.log(user.passwordGet);