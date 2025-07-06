let billAmount = document.querySelector('#bill-amount');

let cashGiven = document.querySelector('#cash-given');
let checkButton = document.querySelector('#check-btn');
let messageParagragh;


function showMessage(message){
    messageParagragh= document.createElement("p");
    messageParagragh.innerText = message;
    checkButton.after(messageParagragh);
}
function deleteMessage(){
    if(messageParagragh!==undefined)
    messageParagragh.style.display = 'none';
}
function validateBillAmount(){
    
    deleteMessage();
    if(billAmount.value > 0){

    }
    else{
        showMessage("Invalid bill amount");
    }
}
checkButton.addEventListener("click",validateBillAmount);
