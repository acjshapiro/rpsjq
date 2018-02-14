
$(document).ready( function() {
var uChoice
var cChoiceArray = ['rock', 'paper', 'scissor']
var result
var cChoice = cChoiceArray[Math.floor(Math.random()* 3)]

$('.choice').on('click', function(){
  var uChoice = this.id

})

$('.choice').on('click', startGame)


function startGame(){
  var uChoice = this.id
  console.log(uChoice)
  console.log(cChoice)
  compare()
  console.log(compare())
  printResults()
}


function compare(){
  var uChoice = this.id
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
