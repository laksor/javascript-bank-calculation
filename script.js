
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

    preAmount.innerText = totalPreAmount + amount;

}
// balance
function balanceAmountTotal(preBalance, amount){
    const preBalanceAmount = document.getElementById(preBalance);
    const preBalanceAmountText = preBalanceAmount.innerText;
    const totalPreBalanceAmount = parseFloat(preBalanceAmountText);

    preBalanceAmount.innerText = totalPreBalanceAmount + amount;

}


// calculation
document.getElementById('deposit-btn').addEventListener('click', function (){
    // getting deposit input
    const depositInput = getInput('deposit-input');
    
    // taking deposit input to set it on deposit amount
    previousAmountTotal('deposit-amount', depositInput);

    //  adding new deposit to old balance
    balanceAmountTotal('balance-amount', depositInput);
});
// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function (){

    // getting withdraw input
    const withdrawInput = getInput('withdraw-input');

    // taking withdraw input to set it on withdraw amount
    previousAmountTotal('withdraw-amount', withdrawInput);

     // adding new deposit to old balance
    balanceAmountTotal('balance-amount', withdrawInput);
});
