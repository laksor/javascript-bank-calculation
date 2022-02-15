
// calculation

document.getElementById('deposit-btn').addEventListener('click', function (){
    // getting deposit input
    const depositInput = document.getElementById('deposit-input');
    const totalInput = depositInput.value;

    // taking deposit input to set it on deposit amount
    const depoUpdated = document.getElementById('deposit-amount');
     depoUpdated.innerText = totalInput;

    //  clearing the deposit input
     depositInput.value = '';

    //  adding new deposit to old deposit
    





});

