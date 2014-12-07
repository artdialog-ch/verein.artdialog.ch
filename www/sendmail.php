<?php 
	switch($_SERVER['REQUEST_METHOD'])
	{
	case 'GET': $the_request = &$_GET; break;
	case 'POST': $the_request = &$_POST; break;
	}

	if (isset($the_request))
	{
		$name = $the_request['name']; 
		$email_address = $the_request['email']; 
		$message = $the_request['message']; 
		if(empty($name)   
		    || empty($email_address)  
		    || empty($message)  
		    //|| !filter_var($email_address],FILTER_VALIDATE_EMAIL)
			)   
		{    
			echo "No arguments Provided!";   
			return false;   
		} 	
		
		// create email body and send it   
		$to = "roman-mkh@outlook.com";
		
		// put your email
		$email_subject = "Contact form submitted by:  $name"; 
		$email_body = "You have received a new message. \n\n".                
                   " Here are the details:\n \nName: $name \n ".                 
                   "Email: $email_address\n Message \n $message";
		$headers = "From: info@artdialog.ch\n";
		$headers .= "Reply-To: $email_address"; 
		mail($to,$email_subject,$email_body,$headers);
	}
?>
HELLO