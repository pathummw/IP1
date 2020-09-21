const email = document.getElementById('formEmail');
const name = document.getElementById("formName");
const subject = document.getElementById("formSubject");
const message = document.getElementById("formMessage");

/* console.log(name); */
email.addEventListener("input", function(event){
    if(email.validity.typeMismatch){
        setErrStyle(email);
        email.setCustomValidity("I am expecting an email address..!");
    }else{
        setOKStyle(email);
        email.setCustomValidity("Great, but remove me later");
    }

});

name.addEventListener("input",function(event){
    checkTextField(name,50);
}); 

subject.addEventListener("input",function(event){
    checkTextField(subject,100);
});

message.addEventListener("input",function(event){
    checkTextField(message,400);
});

function checkTextField(txtName, length){   /* Validation function to common text fields: Name, Subject, Message */
    if(txtName.value != '' && txtName.value.length <= length){
        setOKStyle(txtName);
        /* Can not be empty or too long characters error msg */
    }else{
        setErrStyle(txtName);
        /* setErrorLog */
    }
}
function setOKStyle(inputName){
    inputName.style.backgroundColor = "#CAFFBF";
    inputName.style.outlineColor = "#4AB19D";
}

function setErrStyle(inputName){
    inputName.style.backgroundColor = "#FFADAD";
    inputName.style.outlineColor = "#EF3D59";
}



/* outline-color: #EF233C;
    background-color: #FFADAD; */