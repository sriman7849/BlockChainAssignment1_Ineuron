/*2.Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.*/


function studentGrade(marks){
    let percentage;
    if(marks >= 90 && marks <= 100){
        percentage=1;
      }
      else if(marks >= 80 && marks < 90){
        percentage=2;
      }
      else if(marks >= 70 && marks < 80){
        percentage=3;
      }
      else if(marks >= 60 && marks < 70){
        percentage=4;
      }
      else if(marks >= 50 && marks < 60){
        percentage=5;
      }
      else if(marks >= 40 && marks < 50){
        percentage=6;
      }
      else if(marks >= 0 && marks <40){
        percentage=7;
      }
    switch(percentage){
        case 1 :
            console.log("S garde");
            break;
        case 2 :
            console.log("A grade");
            break;
        case 3 :
            console.log("B grade");
            break;
        case 4 :
            console.log("C grade"); 
            break;  
        case 5 :
            console.log("D grade");  
            break; 
        case 6 :
            console.log("E grade");  
            break;
        case 7 :
            console.log("Student has failed"); 
            break;
        default :
            console.log("Invalid marks...!");
    }
}

studentGrade(90);
studentGrade(80);
studentGrade(70);
studentGrade(60);
studentGrade(50);
studentGrade(40);
studentGrade(900);