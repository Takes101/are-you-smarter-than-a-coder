var quizStatus = true; 
var questionNumber = 0; 
var answerNumber = 0; 

var score = 0; 
var highScore = 50; 

var finalAnswerCheck = 0 
var checkTimes = 1 

var viewHighScoresBtnEl = document.getElementById('view-high-scores'); 
var startQuizBtnEl = document.getElementById('start-quiz');

var answer1BtnEl = document.getElementById('answer1'); 
var answer2BtnEl = document.getElementById('answer2'); 
var answer3BtnEl = document.getElementById('answer3'); 
var answer4BtnEl = document.getElementById('answer4'); 

var submitScoreEl = document.getElementById('submitScore'); 
var questionsEl = document.getElementById('questions'); 
var mainDivEl = document.getElementById('mainDiv'); 

var htmlTimeLeft = document.getElementById('timeLeft'); 
var answerCorrectWrong = document.getElementById('answerCorrectWrong'); 

var questionDisplayEl = document.createElement("questionDisplay"); 
var finalScoreDisplayEl = document.createElement("finalScoreDisplay"); 
var enterInitialsEl = document.createElement("enterInitials"); 
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea"); 

var button1234 = document.createElement("button"); 
var timeLeft = 60; 

answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display='none';
enterInitialsTextArea.style.display='none';

var questionsObject = { // correct answers.
    correct: { 
        0 : "Commonly used datatypes DO NOT include?",
        1 : "The condition statement if/else is enclosed with the following:",
        2 : "Arrays can be used to store the following",  
        3 : "A very useful tool to debug arrays is:", 
        4 : "Strings must be enclosed with:"
    }
};

var answersObject = { // correct answers.
    answers: { 
        0 : {
            0: "Strings",
            1: "Boolean",
            2: "Alerts",
            3: "Numbers"},
        1 : {
            0: "Parentheses",
            1: "Curly Brackets",
            2: "Quotes",
            3: "Square Brackets"},
        2 : { 
            0: "Javascript",
            1: "Terminal/bash",
            2: "For loops", 
            3: "Console.log"},      
        3 : { 
            0: "Commas",
            1: "Curly brackets",
            2: "Quotes", 
            3: "Parentheses"},      
        4 : { 
            0: "Number of strings",
            1: "Other arrays",
            2: "Booleans",
            3: "All of the above"},  
    }
};

htmlTimeLeft.textContent = timeLeft;

viewHighScoresBtnEl.addEventListener("click", function() { // View high scores

    var quizUsers = "";
    var substringTest ="";
    var highScores = "";

    for (var i=0; i < localStorage.length; i++) {
        var checkUserValue = [];
        
        quizUsers = localStorage.getItem(localStorage.key(i));
        substringTest = quizUsers.substring(0,4) 
        if (substringTest == "quiz") {
            checkUserValue = quizUsers.split(",");
            var userName = checkUserValue[0]
            highScores += "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";
        }
    }
    window.alert(highScores);

});



var quizLocalStorage = "quiz";
var quizUserDetails = "";
var value = [];


quizUserDetails = quizLocalStorage + enterInitialsTextArea.value 
value = [quizUserDetails,highScore] // validation


if (!localStorage.length) {
    localStorage.setItem("test","test");
}

for (var i=0; i < localStorage.length; i++){
        
    var checkUser = "";
    var checkUserValue = [];

    
    quizUserDetails = quizLocalStorage + enterInitialsTextArea.value;


    checkUser = localStorage.getItem(quizUserDetails);
    

    if (checkUser == null) { // New user
        localStorage.setItem(quizUserDetails, value); 
        window.alert("Your score of " + highScore + " has been submitted!")
        break;
    } else if (checkUser != null) {
        checkUserValue = checkUser.split(","); }

    if ( quizUserDetails == checkUserValue[0] && highScore == checkUserValue[1] ) {


        
        localStorage.setItem(quizUserDetails, value);  
        window.alert(highScore + " " + "is the latest entry for user initial " + enterInitialsTextArea.value + ". Entry will not be added.")
        break; 
        } else if (enterInitialsTextArea.value == "") {
            window.alert("Please enter an initial");
            break;
        } else if ( quizUserDetails == checkUserValue[0] && highScore > checkUserValue[1] ) { 
            // New high score submitted!
            localStorage.setItem(quizUserDetails, value); // Value is equal to 
            window.alert("New high score of " + highScore + " has been submitted!.\nYour previous score was " + checkUserValue[1])
            break; 
        } else if ( quizUserDetails == checkUserValue[0] && highScore < checkUserValue[1] ) { 
            // Your previous code was higher!
            localStorage.setItem(quizUserDetails, value); // Value is equal to 
            window.alert("Your previous code of " + checkUserValue[1] + " was higher. Entry will not be added.");
            break; 

        } else { 
            localStorage.setItem(quizUserDetails, value);  
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        }

}

answer1BtnEl.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';
    
});
    
answer2BtnEl.addEventListener("mouseover", function() {
    
    answerCorrectWrong.style.display='none';
    
});
    
answer3BtnEl.addEventListener("mouseover", function() {

    answerCorrectWrong.style.display='none';
    
});
    
answer4BtnEl.addEventListener("mouseover", function() {
    
    answerCorrectWrong.style.display='none';
    
});
    
submitScoreEl.addEventListener("mouseover", function() {
    
    answerCorrectWrong.style.display='none';
    
});
    
function lastQuestionWrong () {
    if (finalAnswerCheck === 1 && checkTimes === 1) {
        highScore -= 10;
        checkTimes = 2;
        return highScore
    }

}
