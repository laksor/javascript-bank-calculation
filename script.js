
// calculation

document.getElementById('deposit-btn').addEventListener('click', function (){
    // getting deposit input
    const depositInput = document.getElementById('deposit-input');
    const totalInput = depositInput.value;
    const totalInputAmount = parseFloat(totalInput);

    // taking deposit input to set it on deposit amount
    const depoUpdated = document.getElementById('deposit-amount');
    const previousDepositText = depoUpdated.innerText;
    const previousAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousAmount + totalInputAmount; 
    depoUpdated.innerText = newDepositTotal;

    //  clearing the deposit input
     depositInput.value = '';

    //  adding new deposit to old balance
    const balance = document.getElementById('balance-amount');
    const totalBalance = balance.innerText;
    const balanceAmount = parseFloat(totalBalance);

    const balanceUpdate = balanceAmount + totalInputAmount;
    balance.innerText = balanceUpdate;

});
// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function (){

    // getting deposit input
    const withdrawInput = document.getElementById('withdraw-input');
    const totwInput = withdrawInput.value;
    const totalWithdrawAmount = parseFloat(totwInput);

    // taking deposit input to set it on deposit amount
    const withUpdated = document.getElementById('withdraw-amount');
    const previousWithdrawText = withUpdated.innerText;
    const previouAmount = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previouAmount + totalWithdrawAmount; 
    withUpdated.innerText = newWithdrawTotal;

    //  clearing the deposit input
     withdrawInput.value = '';

     //  adding new deposit to old balance
    const balance = document.getElementById('balance-amount');
    const totalBalance = balance.innerText;
    const balanceAmount = parseFloat(totalBalance);

    const balanceUpdate = balanceAmount - totalWithdrawAmount;
    balance.innerText = balanceUpdate;
});
