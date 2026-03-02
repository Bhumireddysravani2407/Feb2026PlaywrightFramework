//index based for loop

let browser =['chrome','firefox','opera','safari'];

// for(let i=0;i<browser.length;i++)
//     {
//            console.log(browser[i]);

// }

//for ...of Loop

for(let ele of browser)

    {
console.log(ele);

if(ele==='opera')
{
    console.log("hello");
}
}

//for..in loop

let uderData =['ravi','abhi','sravani','deepa'];

for(let index in uderData)
{
    
    console.log(index+ '==' + uderData[index]);

}

//reverse iteration

let browser1 =['chrome','firefox','opera','safari'];

 for(let i=browser.length -1; i>=0;i--)
    {
           console.log(browser[i]);

}

//reverse with for..of
let arr=[1,2,3,4,5];
let reversed=[];
for(let a of arr)
{
reversed.unshift(a);//5,4,3,2,1
}

console.log(arr);
console.log(reversed);

let r =arr.reverse();
console.log(r);

//join elements

let words=['hello','playwright','automation'];
let sentence=words.join(' ');
console.log(sentence);
let csv=words.join(',');
console.log(csv);

//split()

let sen="java_javascript_ruby";
let m=sen.split('_');
console.log(m);




