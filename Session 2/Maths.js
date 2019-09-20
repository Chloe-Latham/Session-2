function maths()
{

addition = "this is the product of two or more numbers"
subraction = "this is the removal of a quantity from a number"
multiplication = "this is the increase of a number by a specific amount"
division = "this is the reduction of a number by a specific amount"

operator = prompt ("Please enter one of the following: add, subtract, divide or multiply","")

if (operator =="add") {
  op1 = "You have selected ADDITION"
  document.getElementById("maths").innerHTML = op1 + addition

}

else
if (operator =="subtract") {
  op2 ="You have selected SUBTRACTION"
  document.getElementById("maths").innerHTML = op2 + subtraction
}

else
if (operator =="multiply") {
  op2 ="You have selected MULTIPLICATION"
  document.getElementById("maths").innerHTML = op3 + mulitplication

}

else
if (operato =="divide") {
  op2 ="You have selected DIVISION"
  document.getElementById("maths").innerHTML = op4 + division
}

else
if (operator =="") {
  op5 ="You have selected nothing, try again"
  document.getElementById("maths").innerHTML = op5
}

}

function QuestionOne()
{
  answer = prompt ("What is 2+2?","")
  if (answer==4) {
      response1 = "Right Answer!"
      document.getElementById("a1").innerHTML = response1
    }

else
if (answer != 4) {
  response2 ="Wrong Answer!"
  document.getElementById("a1").innerHTML = response2
}
}

function QuestionTwo()
{
  answer = prompt ("What is 8-3?","")
  if (answer==5) {
    response3 = "Right Answer!"
    document.getElementById("a2").innerHTML = response3
  }

else
if (answer != 5) {
  response4 ="Wrong Answer!"
  document.getElementById("a2").innerHTML = response4
}
}

function QuestionThree()
{
  answer = prompt ("What is 5*5?","")
  if (answer==25) {
    response5 = "Right Answer!"
    document.getElementById("a3").innerHTML = response5
  }

else
if (answer != 25) {
  response6 ="Wrong Answer!"
  document.getElementById("a3").innerHTML = response6
  }
}

function QuestionFour()
{
  answer = prompt ("What is 36/6?","")
  if (answer==6) {
    response7 = "Right Answer!"
    document.getElementById("a4").innerHTML = response7
  }

else
if (answer != 6) {
  response8 ="Wrong Answer!"
  document.getElementById("a4").innerHTML = response8
  }
}
