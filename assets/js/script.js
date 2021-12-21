var questionsEl = document.querySelector("#questions");
var paragraph1 = document.querySelector("#paragraph-pg1");
var optionsEl = document.querySelector("#options");
var option1 = document.querySelector('#option1')
var option2 = document.querySelector('#option2')
var option3 = document.querySelector('#option3')
var option4 = document.querySelector('#option4')

// creating the buttons.
// var option1 = document.createElement("Button")
// var option2 = document.createElement("Button")
// var option3 = document.createElement("Button")
// var option4 = document.createElement("Button")

// setting button classes
// option1.className = 'btn';
// option2.className = 'btn';
// option3.className = 'btn';
// option4.className = 'btn';

//sound fx
// var soundFxCorrect = new Audio("audio\correct.mp3");
// var soundFxWrong = new Audio("audio\wrong.mp3");

// question variables
// var question1 = "Commonly used data types DO NOT include:";
// var question2 = "The condition in an if / else statement is enclosed with _________.";
// var question3 = "Arrays in JavaScript can be used to store _______.";
// var question4 = "String values must be enclosed within ______ when bring assigned to variables.";
// var question5 = "A very useful tool used during development and debugging for printing content to the debugger is:";


// set variable for the start button
var startButton = document.querySelector("#start-btn");

// use new variable for button to create event listener for the click - everytime hit clicks it starts timer
startButton.addEventListener("click", function() {
    
    //timer within the function - https://www.youtube.com/watch?v=_a4XCarxwr8
    const countdownEl = document.querySelector("#time-sec");
    let timeSecond = 59;
    countdownEl.innerHTML =`00:${timeSecond}`;
    const countdown = setInterval (()=>{
        timeSecond--;
        countdownEl.innerHTML =`00:${timeSecond}`;
        if(timeSecond <= 0 || timeSecond < 1){
            clearInterval(countdown);
        }
    },1000)
  });

  //START GAME BUTTON PRESS
  function startGame(){
      //questionsEl.textContent = question1;
      questionsEl.textContent = questions[0].question;
      startButton.className = "hide";
      paragraph1.className = "hide";
      optionsEl.classList.remove('hide');
      option1.textContent = questions[0].options[0];
      option2.textContent = questions[0].options[1];
      option3.textContent = questions[0].options[2];
      option4.textContent = questions[0].options[3];

      option1.addEventListener("click", function() { 
       // alert('wrong');
        question2();
    })
      option2.addEventListener("click", function() { 
       //   alert('wrong');
          question2();
    })
      option3.addEventListener("click", function() { 
      //    alert('correct')
          question2();
    })
      option4.addEventListener("click", function() { 
      //  alert('wrong');
        question2();
    })
  };
  

  function question2() {
    questionsEl.textContent = questions[1].question;
    option1.textContent = questions[1].options[0];
    option2.textContent = questions[1].options[1];
    option3.textContent = questions[1].options[2];
    option4.textContent = questions[1].options[3];
    option1.addEventListener("click", function() { 
       // alert('wrong');
        question3();
    })
      option2.addEventListener("click", function() { 
        //  alert('wrong');
          question3();
    })
      option3.addEventListener("click", function() { 
        //  alert('correct')
          question3();
    })
      option4.addEventListener("click", function() { 
      //  alert('wrong');
        question3();
    })
  }
  function question3() {
    questionsEl.textContent = questions[2].question;
    option1.textContent = questions[2].options[0];
    option2.textContent = questions[2].options[1];
    option3.textContent = questions[2].options[2];
    option4.textContent = questions[2].options[3];
    option1.addEventListener("click", function() { 
      //  alert('wrong');
        question4();
    })
      option2.addEventListener("click", function() { 
      //    alert('wrong');
          question4();
    })
      option3.addEventListener("click", function() { 
       //   alert('wrong')
          question4();
    })
      option4.addEventListener("click", function() { 
      //  alert('correct');
        question4();
    })
  }
  function question4() {
    questionsEl.textContent = questions[3].question;
    option1.textContent = questions[3].options[0];
    option2.textContent = questions[3].options[1];
    option3.textContent = questions[3].options[2];
    option4.textContent = questions[3].options[3];
    option1.addEventListener("click", function() { 
        //  alert('wrong');
          question5();
      })
        option2.addEventListener("click", function() { 
        //    alert('wrong');
            question5();
      })
        option3.addEventListener("click", function() { 
         //   alert('correct')
            question5();
      })
        option4.addEventListener("click", function() { 
        //  alert('wrong');
          question5();
      })
  }
  function question5() {
    questionsEl.textContent = questions[4].question;
    option1.textContent = questions[4].options[0];
    option2.textContent = questions[4].options[1];
    option3.textContent = questions[4].options[2];
    option4.textContent = questions[4].options[3];

  }


  startButton.addEventListener("click", startGame);
 


