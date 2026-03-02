//arrow function =>
    let print = ()=> console.log("hello playwright");
    print();
    let even = (num)=>
        
        {
            
        num%2==0; 
    
    }

   even(11);

   //forEach
 let product =['macbook','iphone','samsung','sim','keyboard'];

 product.forEach(ele =>{
    
        console.log(ele);
        if(ele==='sim'){
            console.log('Airtel sim');
        }
    }
 )

 product.some(ele =>{
    
        console.log(ele);
        
        if(ele==='sim'){
            console.log('Airtel sim');
            return true;
        }
        return false;
    }
 )

