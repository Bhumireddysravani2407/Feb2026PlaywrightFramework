function getDevicesList(empname){
    console.log('emp name :'+empname);
    let devices=[];//macbook, ipad

    switch(empname.trim())
    {
        case 'Pradeep':
            devices.push('mcbook');
            devices.push('ipad')
            break;

        case 'Anu':
            devices.push('mcbook');
            devices.push('smsung phone')
            break;

        default:
            console.log("invalid employee");
            break;
    }
    return devices;
}

let a = getDevicesList('Pradeep');
console.log(a);


