var readlineSync= require('readline-sync')
var userName=readlineSync.question('What is your name? ')
console.log("welcome to the Game, "+ userName);
console.log("Let's see how well do you know Rohan")

var score =0;


function play(question, answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("you are right")
    score=score+1;
  }
  else {
    console.log("you are wrong")
  }

}

var questions=[{question:"Where do i live?",
                answer:"Assam"},
                {
                  question:"What is my favourite sport?",
                  answer:"cricket"
                 },{
                    question:"what is my age?",
                    answer:"20"
              },{
                  question:"What is my favourite adventure sport?",
                  answer:"dirtbike racing"
              },{
                question:"who is my favourite actor?",
                answer:"Tom hardy"
            },{
              question:"Who is my favourite superhero?",
              answer:"Thor"
            }
]


for(var i=0; i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question, currentQuestion.answer)
  console.log("your total score is "+ score)
}
