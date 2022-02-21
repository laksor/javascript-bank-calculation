
// input function
function getInput(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const totalInputAmount = parseFloat(inputText);
    // clearing the input
    input.value = '';
    return totalInputAmount;
}
// previous amount
function previousAmountTotal(startingAmount, amount){
    const preAmount = document.getElementById(startingAmount);
    const preAmountText = preAmount.innerText;
    const totalPreAmount = parseFloat(preAmountText);
    // adding deposit to balance
    preAmount.innerText = totalPreAmount + amount;
}
// balance
function balanceAmountTotal(preBalance, amount, isAdd){
    const preBalanceAmount = document.getElementById(preBalance);
    const preBalanceAmountText = preBalanceAmount.innerText;
    const totalPreBalanceAmount = parseFloat(preBalanceAmountText);
    
    if(isAdd == true){
        preBalanceAmount.innerText = totalPreBalanceAmount + amount;
    }
    else{
        preBalanceAmount.innerText = totalPreBalanceAmount - amount;
    }
}

// calculation
document.getElementById('deposit-btn').addEventListener('click', function (){
    // getting deposit input
    const depositInput = getInput('deposit-input');
    
    // adding previous deposit  to new one
    previousAmountTotal('deposit-amount', depositInput);

    // adding  deposit to total balance
    balanceAmountTotal('balance-amount', depositInput, true);
})
// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function (){

    // getting withdraw input
    const withdrawInput = getInput('withdraw-input');

    // adding previous withdraw  to new one
    previousAmountTotal('withdraw-amount', withdrawInput);

     // sub withdrawl from  total balance
    balanceAmountTotal('balance-amount', withdrawInput);
})
