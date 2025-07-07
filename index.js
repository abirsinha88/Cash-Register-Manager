let billAmount = document.querySelector('#bill-amount');

let cashGiven = document.querySelector('#cash-given');
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
    if(cashGiven.value >= billAmount.value){
        const returnAmount = cashGiven.value - billAmount.value;
        calculateChange(returnAmount);
    }
    else{
        showMessage("Cash given must be greater than bill amount");
    }
}

