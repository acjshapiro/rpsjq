var result  //Declare my result variable OUTSIDE OF THE main $(document)...{}
var cChoice //Declare my computer choice variable OUTSIDE OF THE main $(document)...{}
var uChoice //Declare my User Choice Variable OUTSIDE OF THE main $(document)...{}
var cChoiceArray = ['rock', 'paper', 'scissor'] //Creat array for cChoice

$(document).ready( function() {  //Makse sure everything is loaded before running
                                //Wrap all further code inside this bracket

//When user clicks an object with class: choice (all images) run startGame function
$('.choice').on('click', startGame)

//Function for getting the computer Choice
// access my array and the index of [0,1,2] chosen randomly
//and assign it to the cChoice varriable
function getCompChoice(){
   cChoice = cChoiceArray[Math.floor(Math.random()* 3)]
}

//Start the Game! called by user clicking an image

function startGame(){
  getCompChoice() //Run my computer choice function
  uChoice = this.id //"Grabb the id of the object "This" -being the clicked image- "
  console.log(uChoice) //can see in the console if the choices were done correctly
  console.log(cChoice)
  compare()  //Run the compare function below to see who won
  $('#uchoice').text('You Chose:  ' + uChoice) //Inject user choice into HTML with the ID: uchoice (blank h2)
  $('#cchoice').text('I Chose:  ' + cChoice) //Inject computer choice into HTML with the ID: cChoice
  $('#results').text(result) //Replace the text of the HTML with the ID: results with my results variable
                              //which will be defined below in the compare function
}
//Compare function logic
  function compare(){

    if (uChoice == cChoice){
      result = "Tied up.  Come at me."  //assign this string to result variable so I can plug into HTML
    }else if(uChoice == "rock" && cChoice == "paper"){
        result = "You Lose... Shit is weak"
    }else if (uChoice == "rock" && cChoice == "scissor"){
        result = "Eyyyyyyy! You Win"
    }else if (uChoice == "paper" && cChoice == "rock" ){
        result = "Noooooiiiiice.  Thats a win"
    }else if (uChoice == "paper" && cChoice == "scissor" ){
        result = "Uhhnnnnnn Gotcha! YOU LOSE!"
    }else if (uChoice == "scissor" && cChoice == "paper" ){
        result = "Take your W, ya wanker."
    }else if (uChoice == "scissor" && cChoice == "rock"){
      result = "You Lose, Jabroni"
    }
  }
})
