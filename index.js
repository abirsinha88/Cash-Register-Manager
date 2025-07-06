let billAmount = document.querySelector('#bill-amount');

let cashGiven = document.querySelector('#cash-given');
let checkButton = document.querySelector('#check-btn');
//let message;

function showMessage(message){
    let messageParagragh= document.createElement("p");
    messageParagragh.innerText = message;
    checkButton.after(messageParagragh);
}
function validateBillAmount(){
    //console.log(billAmount.value);

    if(billAmount.value > 0){

    }
    else{
        showMessage("Invalid bill amount");
    }
}
checkButton.addEventListener("click",validateBillAmount);
