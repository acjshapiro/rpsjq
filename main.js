// var = computerChoice
// var = userChoice
// var = result
//
// function(){
//   //gets user choice from click
//
//

$(document).ready( function() {

var cChoiceArray = ['rock', 'paper', 'scissor']
var result
var cChoice = cChoiceArray[Math.floor(Math.random()* 3)]
var uChoice =

$('.choice').on('click', function(){
  alert('Button clicked')
            
})

$('.choice').on('click', startGame)


// function computerChoice(){
//   var compChoice = cChoiceArray[Math.floor(Math.random()* 3)]
//   console.log(cChoice)


// function startGame(e) {             //start game function(event)
//   var choice = e.target.id     //assign the user choice from target.id to local variable choice
//   uChoice = choice             //assign choice to uChoice ^ from top. reassigns from null
//   console.log(choice)          // prints choice to console for testing
//   computerChoice()            //runs function computerChoice()
//   console.log(compare())
//   //results()    //will print the results of my compare function below to console for testing
// }

function startGame(){
  console.log(uChoice)
  console.log(cChoice)
  compare()
  printResults()
}


function compare(){
  if (uChoice == cChoice){
    return "Looks like a tie"
    result == "Tie";
  }else if(uChoice == "rock" && cChoice == "paper") {
    return "oooooof.  You lose."
    result == "You Lose."
  }else if (uChoice == "rock" && cChoice == "scissors"){
    return "Eyyyyy! You win!"
    result == "You Win!"
  }else if (uChoice == "paper" && cChoice == "rock" ){
    return "Eyyyyy! You Win!"
    result == "You Win!"
  }else if (uChoice == "paper" && cChoice == "scissors" ){
    return "oooooof.  You lose."
    result == "You Lose."
  }else if (uChoice == "scissors" && cChoice == "paper" ){
    return "Eyyyyy! You Win!"
    result == "You Win!"
  }else if (uChoice == "scissors" && cChoice == "rock"){
    return "oooooof.  You lose."
    result == "You Lose."
  }
}

function printResults(){
  $('#results').text("RESULT VARIABLE HERE")
}
//REPLACE AN H2 ELEMENT WITH TEXT FROM VARIABLE "RESUTS"

  //  $('#choice').on('click', startGame())



})
