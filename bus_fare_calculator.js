/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 48; // Example variable to check if the person is a student
let isStudent = false;
let ticketFare = 800;

if(age < 10){
    ticketFare = 0;
    console.log("Ticket fare: " + ticketFare);
} else if(isStudent === true){
    ticketFare *= 0.5; // 50% discount for students
    console.log("Ticket fare: " + ticketFare);
} else if(age >= 60){
    ticketFare *= 0.85; // 15% discount for senior citizens
    console.log("Ticket fare: " + ticketFare);
} else{
    console.log("Ticket fare: " + ticketFare); // Regular fare
}


