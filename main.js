
$(document).ready( function() {

var cChoiceArray = ['rock', 'paper', 'scissor']
var cChoice = null
var uChoice = null
var result = null

// //$('.choice').on('click', function(){
//   var uChoice = this.id
// })

$('.choice').on('click', startGame)

function popcorn(){
   cChoice = cChoiceArray[Math.floor(Math.random()* 3)]
}

function startGame(){
  popcorn()
  uChoice = this.id
  console.log(uChoice)
  console.log(cChoice)
  //compare()
  console.log(compare(uChoice, cChoice))
  printResults()
}

function compare(uChoice, cChoice){
  if (uChoice == cChoice)
    return "Looks like a tie"
  else if(uChoice == "rock" && cChoice == "paper")
      return "oooooof.  You lose."
  else if (uChoice == "rock" && cChoice == "scissor")
      return "Eyyyyy! You win!"
  else if (uChoice == "paper" && cChoice == "rock" )
      return "Eyyyyy! You Win!"
  else if (uChoice == "paper" && cChoice == "scissor" )
      return "oooooof.  You lose."
  else if (uChoice == "scissor" && cChoice == "paper" )
      return "Eyyyyy! You Win!"
  else if (uChoice == "scissor" && cChoice == "rock")
    return "oooooof.  You lose."


}

function printResults(){
  $('#results').text(result)
}
//REPLACE AN H2 ELEMENT WITH TEXT FROM VARIABLE "RESUTS"

  //  $('#choice').on('click', startGame())



})
