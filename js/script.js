const formInput = document.querySelector(".send-mail__input");
const formButton = document.querySelector(".send-mail__send");
const errorText =  document.querySelector(".send-mail__error-text");
const errorIcon =  document.querySelector(".send-mail__error-icon");

const listEmail = ["@gmail", "@outlook"];

let menssageActive = false;
let menssageEmailValid = false;

function showErrorMenssage(){
    errorIcon.classList.toggle("send-mail__error--show");
    errorText.classList.toggle("send-mail__error--show");
}
function checkListEmail(listEmail){
    for(a = 0; a < listEmail.length; a++){
        if(formInput.value.indexOf(listEmail[a]) != -1){
            return true;
        }
    }
    return false;
}

formInput.addEventListener("input", function(event){
    if(menssageEmailValid){
        errorText.style.color = "hsl(0, 74%, 74%)";
        errorText.classList.toggle("send-mail__error--show");

        menssageEmailValid = false;
    }
    if(menssageActive){
        showErrorMenssage();

        menssageActive = false;
    }
    if(formInput.value.length == 0 && menssageActive){
        showErrorMenssage();

        menssageActive = false;
    }
});


formButton.addEventListener('click', function (event) {
    if(formInput.value.length != 0){
        if(!checkListEmail(listEmail)){
            if(!menssageActive){
                errorText.innerHTML = "Pleace provide a valid email";
                showErrorMenssage();

                menssageActive = true;
            }
        }
        else{
            if(!menssageActive){
                errorText.style.color = "green";
                errorText.innerHTML = "Your email is valid";
                errorText.classList.toggle("send-mail__error--show");

                menssageEmailValid = true;
            }
        }
    }
    else{
        if(!menssageActive){
            errorText.innerHTML = "Empty email entry, please fill in the field";
            showErrorMenssage();

            menssageActive = true;
        }
    }
});