  var chalk = require('chalk')
  var readlinesync = require("readline-sync")
  var userName = readlinesync.question("May I have your name ? ")
  console.log(chalk.magentaBright("Welcome "+ chalk.cyanBright(userName)+"!"))

  console.log(chalk.magentaBright("Lets play a quiz: Do you know SHEKHAR? "))
  console.log(  )
  console.log(chalk.magentaBright("If you scored 3 right,only then you'll be allowed to play Level 1."))
  console.log(  )
  console.log(chalk.bgRedBright("Level 0 starts!"))
  console.log(   )
  var score = 0;

  // function
  function quiz(question,answer,a,b,c,d){
    var userAns = readlinesync.question(chalk.cyanBright(question))
    // branching
    if(userAns.toUpperCase() === answer.toUpperCase()){
      console.log(chalk.red("You are Right "))
      score++
    }else{
      console.log(chalk.redBright("You are Wrong"))
    }console.log(chalk.yellowBright("Your current score: "+ score))
    console.log(   )
  }
  // array of objects
  var questions = [
    // objects
    {
      question : "Which year is my Birthyear? ",
      answer : "2002",
    },{
      question : "Where do I live? ",
      answer : "mumbai",
    },{
      question: "What is my favorite number? ",
      answer: "23",
    },{
      question: "What is my favorite Sitcom ? ",
      answer:"The office",
    },{
      question: "What type of movies do I like? ",
      answer: "crime"
    },{
      question:"What's my favorite color? ",
      answer: "black"
    }];

  // accesing objects via .
  for(var i = 0;i<=2;i++){
    quiz(questions[i].question,questions[i].answer)
  }
  // for level 1
  if(score==3){
    console.log(chalk.bgRedBright("Welcome to Level 1!"))
    for(var i=3;i<questions.length;i++){
      quiz(chalk.greenBright(questions[i].question),questions[i].answer)
    }
  }console.log(chalk.bgBlue("Your Final score:",score))


  // for feedback
  if(score<=3){
    console.log(chalk.dim("--------"))
    console.log(chalk.blue("You need to hangout with me,more."))
  }

  // for storing high score data 

  var scorer = [{
    name : "Jay",
    highscore: "6",
  },{
    name : "Om",
    highscore: "5"
  }]
  console.log(   )
  console.log(chalk.blue("They are the high scorers"))

  for(var i =0;i<scorer.length;i++){
    console.log(chalk.yellowBright(scorer[i].name,":",scorer[i].highscore))
  }

  // function for comparing user score and high score


  function currentScore(){
    var playerScore = (scorer[0].highscore);
    if(score>=playerScore){
    console.log(chalk.bgBlue("Congrats!"))
    console.log(chalk.yellow("You have beaten the high score,please send the screenshot."))
  }
  }
  (currentScore())


