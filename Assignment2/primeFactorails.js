/*4. Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).*/


function primeRanges(min,max){
    if(min<=1){
        return;
    }
    for(i=min;i<=max;++i){
        let flag=0;
        for(j=2;j<i;++j){
            if(i%j==0){
                flag=1;
            }
        }

        if(flag==0){
            factorialOfNumber(i);
        }
    }
}

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

primeRanges(2,100);
 