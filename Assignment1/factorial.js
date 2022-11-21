//Question2

//Factorial of a number.

function factorialOfNumber(num){
   
   if(num<0){
    console.log("no factorial for negative numbers");
    return;
   }
   else if(num==0){
    console.log(`factorial for 0 is 1`);
   }
   else{
    let fact=1;
    for(i=1;i<=num;++i){
        fact*=i;
    }
    console.log(`factorial of given ${num} is ${fact}`);
   }
}

factorialOfNumber(5);//120