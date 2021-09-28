const formInput = document.querySelector(".send-mail__input");
const formButton = document.querySelector(".send-mail__send");
const errorText =  document.querySelector(".send-mail__error-text");
const errorIcon =  document.querySelector(".send-mail__error-icon");

let checkEmail = true;

function showErrorMenssage(){
    errorIcon.classList.toggle("send-mail__error--show");
    errorText.classList.toggle("send-mail__error--show");
}

formInput.addEventListener("input", function(event){
    if(!checkEmail){
        showErrorMenssage();

        checkEmail = true;
    }

    if(formInput.value.length == 0){
        showErrorMenssage();
    }
});


formButton.addEventListener('click', function (event) {
    if(formInput.value.length != 0){
        if(formInput.value.indexOf("@") == -1){
            errorText.innerHTML = "Pleace provide a valid email";
            showErrorMenssage();
        }
    }
    else{
        if(checkEmail){
            errorText.innerHTML = "Empty email entry, please fill in the field";
            showErrorMenssage();

            checkEmail = false;
        }
    }
});