const billAmount = document.querySelector('#bill-amount');

const cashGiven = document.querySelector('#cash-given');
let checkButton = document.querySelector('#check-btn');
let messageParagragh;



checkButton.addEventListener("click",validateBillAmount);
function showMessage(message){
    messageParagragh= document.createElement("p");
    messageParagragh.innerText = message;
    checkButton.after(messageParagragh);
}
function deleteMessage(){
    if(messageParagragh!==undefined)
    messageParagragh.remove();
}
function validateBillAmount(){
    
    deleteMessage();
    if(billAmount.value > 0){
      
        validateCashGiven(); 
    }
    else{
        showMessage("Invalid bill amount");
    }
}
function validateCashGiven(){

    if(Number(cashGiven.value) >= Number(billAmount.value)){
       const returnAmount = cashGiven.value - billAmount.value;
        calculateChange(returnAmount);
    }
    else{
        showMessage("Cash given must be greater than bill amount");
    }
}
function calculateChange(returnAmount){
    let noOfNotes;
    const availableDenominations = [2000,500,100,20,10,5,1];
    const numberOfNotes = document.querySelectorAll(".number-of-notes");
    for(let i = 0 ; i < availableDenominations.length ; i++){
        noOfNotes = Math.trunc(returnAmount / availableDenominations[i]);
        returnAmount = returnAmount % availableDenominations[i];
        numberOfNotes[i].innerText = noOfNotes;
        
    }

}