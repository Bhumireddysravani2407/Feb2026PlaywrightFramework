function startMachine (fnname){
 console.log('starting the machine');

 fnname();

}

startMachine(()=>console.log('done'));

function getInfo(a,funname,funcname){
 console.log('getting some info '+a+'  '+funname);

 funcname(100);
}

getInfo(10,'sravani',(x)=>{ console.log('the x value is '+x)});

function getMarks(fnname){
console.log('getting the marks....');
fnname(200);

return 5000;
}


console.log(getMarks((num=>console.log('the provided number in call back '+num))));
