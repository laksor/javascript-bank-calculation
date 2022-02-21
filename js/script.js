
// input 
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
    // updateing previous amount to new one
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
// current balance used for alert
function getCurrentBalance(){
    const balance = document.getElementById('balance-amount');
    const balanceText = balance.innerText;
    const totalBalance = parseFloat(balanceText);
    return totalBalance;
}

// deposit button
document.getElementById('deposit-btn').addEventListener('click', function (){
    // getting deposit input
    const depositInput = getInput('deposit-input');

    if(depositInput > 0){
        // adding previous deposit  to new one
        previousAmountTotal('deposit-amount', depositInput);

        // adding  deposit to total balance
        balanceAmountTotal('balance-amount', depositInput, true);
    }
})
// withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function (){

    // getting withdraw input
    const withdrawInput = getInput('withdraw-input');

    // current balalnce 
    const currentBalance = getCurrentBalance();

    if(withdrawInput > 0 && withdrawInput <= currentBalance){
        // adding previous withdraw  to new one
        previousAmountTotal('withdraw-amount', withdrawInput);

        // sub withdrawl from  total balance
        balanceAmountTotal('balance-amount', withdrawInput);
    }
    //----- alert  ------!
    if(withdrawInput > currentBalance){
        const fail = document.getElementById('notify-fail');
        fail.style.display = 'block';
    } 
})

//----- alert  ------!
document.getElementById('deposit-input').addEventListener('keyup', function(event){
    const value = event.target.value;
    if(isNaN(value)){
        const failed = document.getElementById('fail');
        failed.style.display = 'block';
    }
})
document.getElementById('withdraw-input').addEventListener('keyup', function(event){
    const value = event.target.value;
    if(isNaN(value)){
        const failed = document.getElementById('fail');
        failed.style.display = 'block';
    }
})

// sign out button
document.getElementById('sign-out').addEventListener('click', function(){
    window.location.href = 'index.html';
})
// ----- project done ---------


