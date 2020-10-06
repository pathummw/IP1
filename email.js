function sendMail(){
  /* console.log("Send mail called");
    Email.send({
        Host : "smtp.gmail.com",
        Username : "pathummw@gmail.com",
        Password : "anjibaba921265",
        To : 'pathummw88@gmail.com',
        From : "pathummw@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

    console.log("SEND"); */

    var templateParams = {
      name: 'James',
      notes: 'Check this out!'
  };
   
  emailjs.send('service_pve1ura', 'template_sveacqg', templateParams)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });




}




