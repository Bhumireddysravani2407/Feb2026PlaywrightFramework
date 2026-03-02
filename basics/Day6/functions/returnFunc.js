//function expression

let openbrowser= function launchBrowser(browsername){
    console.log('Browser is '+browsername);

    
switch(browsername){
        case 'chrome':
        console.log('chrome');        
        return true
    case 'firefox':
        console.log('firefox');
        return true;
    case 'edge':
        console.log('edge');
         return true;
    case 'safari':
        console.log('safari');
        return true;

    default:
        console.log("invalid browser");
        return false;
        
   
}
 }

 //launchBrowser('chrome123');

// console.log( launchBrowser('chrome'));

openbrowser('chrome');
console.log(openbrowser('chrome'));

