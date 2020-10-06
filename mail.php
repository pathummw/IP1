

<?php

echo "<h2>PHP is Fun!</h2>";
echo "Hello world!<br>";

	$email_from = 'pathummw@yahoo.com';

	$email_subject = "New Form submission";

	$email_body = "You have received a new message from the user.\n".
                            "Here is the message".


  $to = "pathummw88@gmail.com";

  $headers = "From:";

  $headers .= "Reply-To: ";

  mail($to,$email_subject,$email_body,$headers);

 ?>