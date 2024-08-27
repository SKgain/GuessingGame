document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio("Audio/starting.mp3");
    audio.play();
});

// Selecting element
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#gussingNumber");
const check = form.querySelector("#check");
const resultTest = cardBody.querySelector(".resultTest");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");
// initialing value
  var win=0;
  var lost=0;
  var totalAttem=5;
  var attemp=0;


form.addEventListener("submit",(event)=>{
    
    attemp++;
    event.preventDefault();
    

    if(attemp==5)
    {
        guessingNumber.disabled = true;
        check.disabled = true;
       
    }
    if(attemp<6){
        checkResult(guessingNumber.value);

    }
    guessingNumber.value = "";
    
});

const getRandomNumber = () =>{

    const r = Math.floor(Math.random()*5)+1;
    return r;
    
}
  


    const checkResult = (guessingNumber) =>{
 
        const randomNumber = getRandomNumber();
        // console.log(`guessingNumber: ${guessingNumber}`);
        // console.log(`randomgNumber: ${randomNumber}`);
        
        if(guessingNumber == randomNumber)
        {
            win++;
            
            resultTest.innerHTML = "You Have Won";
            
            remainingAttempts.innerHTML = `Remaining Attempts: ${totalAttem - attemp}`;
        }
        else{
            lost++;
            
            resultTest.innerHTML = "You Have Lost. Random Number was: " + randomNumber;
            remainingAttempts.innerHTML = `Remaining Attempts: ${totalAttem - attemp}`;
        }
        const heading = document.createElement("h4");
        const text = document.createTextNode(`Won: ${win} , Lost: ${lost}`);
        heading.appendChild(text);
      if(attemp==5){
        cardBody.appendChild(heading).classList.add("largText");  
      }
          
        
    }
     
    
    