//object: physical entity --refrence name
//properties: key value pair format //eyes:2
//functionality: walk,talk

let user={
    username:'Anu',
    age:30,
    salary :34.55,

    coding : function code()
    { 
        console.log(`${this.username} is writing code in js`);
    },
    printing(ctc)
    {
        console.log(`your current CTC is`+ctc);
        let finalsal=ctc+this.salary;
        return finalsal;
    }
};

console.log(user.username);
user.coding();
let s= user.printing(55);
console.log('final package is '+ s);



let loginpage={

        emailIDXpath: `//input[@id='username']`,
        passwordXpath: `//input[@id='password']`,
        loginButtonXpath: `//input[@id='login']`,

        loginToApp(username,password){
            console.log(`entering ${username} into element : ${this.emailIDXpath}`);
            console.log(`entering ${password} into element : ${this.passwordXpath}`);
            console.log(`clicking on button  : ${loginpage.loginButtonXpath}`);
           // user.username
        }

}
loginpage.loginToApp('sravani','password123');
