// connecting button to next page 

document.getElementById('work-butt').addEventListener
('click', function(){
    const emailField = document.getElementById('email-form');
    const userEmail = emailField.value;

    // pass

    const passwordf = document.getElementById('pass-form');
    const userPass = passwordf.value;

    if(userEmail == 'on@baap.com' && userPass == 'password'){
        window.location.href = 'banking.html';
    }
})
