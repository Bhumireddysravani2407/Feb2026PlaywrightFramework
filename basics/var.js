var a=10;//global
function test()//functional scope
{
    var a=20;
    console.log(a);
    if(true){
        var a=30;
        console.log(a);
    }
    console.log(a);
}
test();
console.log(a);
//redeclaration
//functional scope

//hoisting
console.log(b);
var b=20;




