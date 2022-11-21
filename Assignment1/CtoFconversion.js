//Question3

//celcius to Fahrenheit conversion

function CtoFconversion(tempC){
    //c/5 = (f-32)/9
    let Fahrenheit=(tempC*1.8)+32;
    console.log(`the fahrenheit equivalent for given celcius temperature ${tempC} is ${Fahrenheit}`);
}

function FtoCconversion(tempF){
    //c/5 = (f-32)/9
    let celcius=((tempF-32)*5)/9;
    console.log(`the celcius equivalent for given Fahrenheit temperature ${tempF} is ${celcius}`);
}


CtoFconversion(55);//131
FtoCconversion(131);//55