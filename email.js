function sendMail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "pathummw@gmail.com",
        Password : "anjibaba921265",
        To : 'pathummw@yahoo.com',
        From : "pathummw@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}