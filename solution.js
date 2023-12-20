//Todo 1: Generate Pin
//Todo 2: Make keypad Functional
//Todo 3: Make Notification work
//Todo 4: Make try left work
// Todo 5 : Make C (clear) btn work to clear keypad input
//Todo 6 : Remove Element (<) one after another




// Selectors
const generatePinBtn = document.querySelector(".generate-btn");
const generatedPinInput = document.querySelector(".generatedPin");
const showKeyPadValue =document.querySelector(".showValue");
const submitBtn =document.querySelector(".submit-btn");
const correctNotification =document.querySelector(".correct-pin");
const wrongNotification =document.querySelector(".wrong-pin");
let tryValue =  document.getElementById("tryLeft");
const removeSingleItem = document.getElementById("removeBtn");


//Hide the Notification Section
const notifySection = document.querySelector(".notify-section");

//setting try left at chance

let chance = parseInt(tryValue.innerText);

//Generate  4 Digits Pin
function generatedPin (){
    let randomNumber = Math.floor(Math.random() * 9000 + 1000);
    generatedPinInput.value = randomNumber;     
}
function removeDefaultNotification(){
    notifySection.style.display="none";
}



//Making keypad functional

function inputValue(number){
    if(generatedPinInput.value== ""){
        alert("Please Generated a Pin First");
    }else{
        showKeyPadValue.value +=number
    }
    //Implementing clear function
    if(number=="C"){
        clearKeyPadInput();
    }
    //Implementing Single Element Remove
    // if(number =="<"){
    //     removeSingleElement();
    // }
}
 
 
//Check Pin Match
function checkPin(){
    const  newPin =generatedPinInput.value;
    console.log(newPin);
    if (newPin ===showKeyPadValue.value){  
        showCorrectNotification()
    }else{
        showWrongNotification();
        tryLeft();
    }

}
//show correct notification and make button green and setting disabled =true
function showCorrectNotification(){
    notifySection.style.display ="block";
    correctNotification.style.display ="block";
    wrongNotification.style.display = "none";
    submitBtn.disable = true;
    submitBtn.style.backgroundColor ="green"
    generatePinBtn.disabled =true;
    generatePinBtn.style.backgroundColor ="green"
    
}
//show wrong notification
function showWrongNotification(){
    notifySection.style.display ="block";
    correctNotification.style.display="none";
    wrongNotification.style.display= "block"
}
// function removeDefaultNotification(){
//     Notification.style.display ="none"
// }
//check pin on submit click
submitBtn.addEventListener("click",checkPin);

//Fire the generate pin Function
generatePinBtn.addEventListener("click", generatedPin);
// remove default notification
removeDefaultNotification();


//clear all keypad input
function clearKeyPadInput (){
    showKeyPadValue.value = "";
}
//try left function
function tryLeft (){
    // let newTryValue = tryValue.innerText;
    // let newTryLeft = parseInt(newTryValue);
    if (chance >0){
        chance = chance-1 ;
    }
   tryValue.innerText= chance;
//    make button green and setting disabled =true
    if (chance===0){
        submitBtn.disable = true;
        submitBtn.style.backgroundColor ="red"
        generatePinBtn.disabled =true;
        generatePinBtn.style.backgroundColor ="red"
    }
}
//Removing  Single element on after another(<)
// function removeSingleElement(){
//     if(showKeyPadValue !==""){
//         let currentValue = showKeyPadValue.value;
//         showKeyPadValue.value =currentValue.slice(0,-1);
//     }
// }
function removeSingleElement() {
    if (showKeyPadValue !== "") {
      let currentValue = showKeyPadValue.value;
      // Remove the last character from the currentValue string
      showKeyPadValue.value = currentValue.slice(0, -1);
    }
  }
  
  removeSingleItem.addEventListener("click", removeSingleElement);

  