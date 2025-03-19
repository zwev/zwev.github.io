document.querySelector("button").addEventListener("click", gradeQuiz);

// Global variables
var score = 0;
var attempts = localStorage.getItem("total_attempts");

//displayq4Choices();

displayradioChoices(4, ["Maine", "Rhode Island", "Maryland", "Delaware"]);

displayradioChoices(7, ["Texas", "California", "Alaska", "Montana"]);


function displayq4Choices(){
    let q4choicesarr = ["Maine", "Rhode Island", "Maryland", "Delaware"];
    q4choicesarr = _.shuffle(q4choicesarr);
    for (let i=0; i< q4choicesarr.length; i++){
        document.querySelector("#q4Choices").innerHTML += ` <input type="radio" name="q4" id= "${q4choicesarr[i]}" value="${q4choicesarr[i]}"> <label for="${q4choicesarr[i]}"> ${q4choicesarr[i]}</label>`
    }
}

function displayradioChoices(idx, arr){
    arr = _.shuffle(arr);
    for (let i=0; i< arr.length; i++){
        document.querySelector(`#q${idx}Choices`).innerHTML += ` <input type="radio" name="q${idx}" id= "${arr[i]}" value="${arr[i]}"> <label for="${arr[i]}"> ${arr[i]}</label>`
    }
}

function isFormValid(){
    let isValid = true;
    if(document.querySelector("#q1").value == ""){
        isValid = false;
        document.querySelector("#validationFdbk").innerHTML = "Question 1 was not answered";
    }
    return isValid;
}

function rightAnswer(index){
    document.querySelector(`#q${index}Feedback`).innerHTML = "Correct!";
    document.querySelector(`#q${index}Feedback`).className = "bg-success text-white";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/checkmark.png' alt='checkmark'>";
    score += 10;
}

function wrongAnswer(index){
    document.querySelector(`#q${index}Feedback`).innerHTML = "Inorrect!";
    document.querySelector(`#q${index}Feedback`).className = "bg-warning text-white";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/xmark.png' alt='xmark'>";
}

function checkScore(score){
    if(score < 80){
        document.querySelector("#totalScore").innerHTML = `Total Score: ${score}<br>
        You need ${80-score} more points to pass.<br>
        Try again...`;
        document.querySelector("#totalScore").className = "text-danger";
    }
    else{
        document.querySelector("#totalScore").innerHTML = `Congratulations! Your score was: ${score}<br>
        That is ${score-80} points above a passing grade!`;
        document.querySelector("#totalScore").className = "text-success";
    }

}

function gradeQuiz(){
    console.log("Grading quiz…");
    document.querySelector("#validationFdbk").innerHTML = "";
    if (!isFormValid()){
        return;
    }

    //variables
    score = 0;
    let q1Response = document.querySelector("#q1").value.toLowerCase();
    let q2Response = document.querySelector("#q2").value;
    let q4Response = document.querySelector("input[name=q4]:checked").value;
    let q5Response = document.querySelector("#q5").value.toLowerCase();
    let q6Response = document.querySelector("#q6").value;
    let q7Response = document.querySelector("input[name=q7]:checked").value;
    let q8Response = document.querySelector("#q8").value.toLowerCase();
    let q9Response = document.querySelector("#q9").value;



    
    console.log(q1Response);

    //Grading question 1
    if (q1Response == "sacramento") {
        rightAnswer(1);
    }
    else {
        wrongAnswer(1);
    }

    //Grading question 2
    if (q2Response == "mo") {
        rightAnswer(2);
    }
    else {
        wrongAnswer(2);
    }

    //Grading question 3
    if (document.querySelector("#Jefferson").checked && document.querySelector("#Roosevelt").checked &&
    !document.querySelector("#Jackson").checked && !document.querySelector("#Franklin").checked) {
        rightAnswer(3);
    }
    else {
        wrongAnswer(3);
    }

    //grading question 4
    if(q4Response == "Rhode Island"){
        rightAnswer(4);
    }
    else{
        wrongAnswer(4);
    }

    //Grading question 5
    if (q5Response == "tallahassee") {
        rightAnswer(5);
    }
    else {
        wrongAnswer(5);
    }

    //Grading question 6
    if (q6Response == "ak") {
        rightAnswer(6);
    }
    else {
        wrongAnswer(6);
    }

    //grading question 7
    if(q7Response == "Texas"){
        rightAnswer(7);
    }
    else{
        wrongAnswer(7);
    }

    //Grading question 8
    if (q8Response == "hawaii") {
        rightAnswer(8);
    }
    else {
        wrongAnswer(8);
    }

    //Grading question 9
    if (q9Response == "ms") {
        rightAnswer(9);
    }
    else {
        wrongAnswer(9);
    }

    //Grading question 10
    if (document.querySelector("#Denver").checked && document.querySelector("#Phoenix").checked &&
    document.querySelector("#Honolulu").checked && !document.querySelector("#SanFrancisco").checked) {
        rightAnswer(10);
    }
    else {
        wrongAnswer(10);
    }






    checkScore(score);
    document.querySelector("#totalAttempts").innerHTML = `Total Attempts: ${++attempts}`;
    localStorage.setItem("total_attempts", attempts);

    console.log(q1Response);
   }
   
