const email = document.getElementById('formEmail');
const name = document.getElementById("formName");
const subject = document.getElementById("formSubject");
const message = document.getElementById("formMessage");

/* console.log(name); */
email.addEventListener("input", function(event){
    if(email.validity.typeMismatch){
        setErrStyle(email);
        email.setCustomValidity("Ange en giltig e-postadress.!");
    }else{
        setOKStyle(email);
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
        /* txtName.setCustomValidity("Nameee"); */
        /* setErrorLog */
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



/* outline-color: #EF233C;
    background-color: #FFADAD; */


/* if(!name.match(/^[a-zZ])){
    error MSG
    return false
    }
    return true
} */