/*1. Write a Javascript function to check whether a triangle is equilateral,
isosceles or scalene*/

function triangle(side1,side2,side3){
    if((side1 == side2) && (side1 == side3)){
        console.log(`Equilateral triangle.`)
    }
    else if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
        console.log(`Isosceles triangle.`)
    }
    else{
        console.log(`Scalene triangle.`)
    }
}

triangle(60,60,60);
triangle(60,50,70);
triangle(50,50,80);