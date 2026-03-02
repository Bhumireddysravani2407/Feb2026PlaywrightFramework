let user={

    username:'Anu',
    age:25,
    salary:34.45,

    coding: function code(){
        console.log(`${this.name} is writing code`);
    },

    printing(ctc)
    {
        console.log('your current ctc is '+ctc);
            let finalsal= ctc+this.salary;
            return finalsal;
    }
};

console.log(user.username);
let sal=user.printing(20);
console.log('final sal is'+sal);

let loginPage ={

    emailIdXpath: `//input[@id='username']`,
    PasswordXpath: `//input[@id='password']`,
    loginBtnPath: `//input[@id='login']`,

    loginToApp(username,password){
        console.log(`entering ${username} into element :${this.emailIdXpath}`);
         console.log(`entering ${password} into element :${this.PasswordXpath}`);
          console.log(`clicking on login button :${this.loginBtnPath}`);
          console.log(user.username+ 'age is '+user.age);
    }

};
loginPage.loginToApp('anu@gmail.com','password123');