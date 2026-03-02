
let loginpage={

        emailIDXpath: `//input[@id='username']`,
        passwordXpath: `//input[@id='password']`,
        loginButtonXpath: `//input[@id='login']`,

        loginToApp(username,password){
            console.log(`entering ${username} into element : ${this.emailIDXpath}`);
            console.log(`entering ${password} into element : ${this.passwordXpath}`);
            console.log(`clicking on button  : ${this.loginButtonXpath}`);
        }

}
loginpage.loginToApp('sravani','password123');