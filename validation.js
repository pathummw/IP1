const email = document.getElementById('formEmail');
const name = document.getElementById("formName");
const subject = document.getElementById("formSubject");
const message = document.getElementById("formMessage");
const button = document.getElementById("btnSubmit");

email.addEventListener("input", function(event){
    if(email.validity.typeMismatch || email.value ==''){
        setErrStyle(email);
        email.reportValidity();
        activateSubmitBtn();
    }else{
        setOKStyle(email);
        activateSubmitBtn();
    }

});

name.addEventListener("input",function(event){
    checkTextField(name,50);
    activateSubmitBtn();
}); 
 

subject.addEventListener("input",function(event){
    checkTextField(subject,100);
    activateSubmitBtn();
});

message.addEventListener("input",function(event){
    checkTextField(message,400);
    activateSubmitBtn();
});

button.addEventListener("click",function(event){
    activateSubmitBtn();
});




function checkTextField(txtName, length){   /* Validation function to common text fields: Name, Subject, Message */
    if(txtName.value != '' && txtName.value.length <= length){
        setOKStyle(txtName);
    }else{
        setErrStyle(txtName);
    }
}
function setOKStyle(inputName){
    inputName.style.outlineColor = "#4AB19D";
    inputName.style.backgroundColor = "#CAFFBF";
}

function setErrStyle(inputName){
    inputName.style.backgroundColor = "#FFADAD";
    inputName.style.outlineColor = "#EF3D59";
}

function activateSubmitBtn(){
    if(email.value =='' || email.validity.typeMismatch || name.value =='' || subject.value =='' || message.value ==''){
        button.classList.remove("enableSubmitButton");
        button.disabled = true;
    }
    else{
        button.classList.add("enableSubmitButton");
        button.disabled = false;
    }
}