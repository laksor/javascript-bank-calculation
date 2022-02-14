
// calculation

document.getElementById('depo-btn').addEventListener('click', function (){
    const damount = document.getElementById('depo-amt');
    const amt = damount.value;

    const depoUp = document.getElementById('depo-num');
     depoUp.innerText = amt;

     damount.value = '';

});

