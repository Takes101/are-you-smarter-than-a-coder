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