
$(document).ready( function() {

var cChoiceArray = ['rock', 'paper', 'scissor']
var cChoice = null
var uChoice = null
//var result = null

$('.choice').on('click', startGame)

function getCompChoice(){
   cChoice = cChoiceArray[Math.floor(Math.random()* 3)]
}

function startGame(){
  getCompChoice()
  uChoice = this.id
  console.log(uChoice)
  console.log(cChoice)
  console.log(compare(uChoice, cChoice))
  $('#results').text(result)
  debugger
}

function compare(uChoice, cChoice){
  if (uChoice == cChoice){
    return "Looks like a tie"
    result = "Tie"
  }else if(uChoice == "rock" && cChoice == "paper"){
      return "oooooof.  You lose."
      result = "You Lose"
  }else if (uChoice == "rock" && cChoice == "scissor"){
      return "Eyyyyy! You win!"
      result = "You Win"
  }else if (uChoice == "paper" && cChoice == "rock" ){
      return "Eyyyyy! You Win!"
      result = "You Win"
  }else if (uChoice == "paper" && cChoice == "scissor" ){
      return "oooooof.  You lose."
      result = "You Lose"
  }else if (uChoice == "scissor" && cChoice == "paper" ){
      return "Eyyyyy! You Win!"
      result = "You Win"
  }else if (uChoice == "scissor" && cChoice == "rock"){
    return "oooooof.  You lose."
    result = "You Lose"

  }


}




//REPLACE AN H2 ELEMENT WITH TEXT FROM VARIABLE "RESUTS"

  //  $('#choice').on('click', startGame())



})
