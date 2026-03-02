function doSomething(funcname,url){
console.log('entering the url'+url);
funcname();
}

doSomething(()=>{
    console.log("hello App");
},'https://www.google.com');

