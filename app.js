const myMail = document.getElementById('email');
const btn = document.getElementById('check-btn');

function checkValidation(){
    if((myMail.value.includes('@') === false) || (myMail.value.includes('.') === false)){
        alert('Invalid mail. An email adress should include @ or .');
        return;
    }
    if((myMail.value.length - myMail.value.indexOf('.') - 1 != 2) && (myMail.value.length - myMail.value.indexOf('.') - 1 != 3)){
        alert('Invalid Extension');
    } else{
        alert('Valid email');
    }
}

btn.addEventListener('click', checkValidation);

