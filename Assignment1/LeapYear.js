//Assignment1 
//Question1

//LeapYear Function
function checkLeapYear(year){
    if((year%4==0)&&(year%100!=0)||(year%400==0)){
        console.log(`The given year ${year} is a leap year`);
    }
    else{
        console.log(`The given year ${year} is not a leap year`);
    }
}

checkLeapYear(2000);//leap year
checkLeapYear(2019);//Not a leapYear