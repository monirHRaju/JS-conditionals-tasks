/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight = 60;
let height = 1.7018;
let bmi = weight / (height * height)

bmi = bmi.toFixed(2);

if(bmi < 18.5 ){
    console.log("your BMI is " + bmi + "( underweight)");
} else if(bmi < 24.9) {
     console.log("your BMI is " + bmi + " (Normal)");
} else if (bmi < 29 ) {
    console.log("your BMI is " + bmi + "( Overweight)");
} else {
    console.log("your BMI is " + bmi + "( Obese)");
}