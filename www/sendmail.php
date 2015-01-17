<?php 
	switch($_SERVER['REQUEST_METHOD'])
	{
	//case 'GET': $the_request = &$_GET; break;
	case 'POST': $the_request = &$_POST; break;
	}

	if (isset($the_request))
	{
		$name = $the_request['name']; 
		$email_address = $the_request['email']; 
		$subject = $the_request['subject']; 
		$message = $the_request['message']; 
		if(empty($name)   
		    || empty($email_address)  
		    || empty($subject)  
		    || empty($message)  
		    //|| !filter_var($email_address],FILTER_VALIDATE_EMAIL)
			)   
		{    
			echo "No arguments Provided!";   
			return false;   
		} 	
		
		// create email body and send it   
		// $to = "roman.mukhin@gmail.com";
		$to = "info@artdialog.ch";
		
		// put your email
		$email_subject = "Contact form submitted by:  $name"; 
		$email_body = "You have received a new message. \n\n".                
                   " Here are the details:\n \nName: $name \n".                 
                   " Email: $email_address\n " .
                   " Subject: $subject\n " .
                   " Message: \n $message";
		$headers = "From: artdialog@artdialog.ch\n";
		$headers .= "Reply-To: $email_address"; 
		$sendmailok = mail($to,$email_subject,$email_body,$headers);
	}
	
	$res_html = file_get_contents("index.html");
	if (isset($sendmailok))
	{
		//$regex_form = "<form[^>]+id\\s\*=\s\*[\\"\\']kontakt_form[\\"\\'][^>]+>";
		$regex_form = "/<form[^>]+>/";
		
		// bool preg_match (string pattern, string subject [, array groups])
		
		if ($sendmailok)
		{
			$sendresp_html = file_get_contents("feedback_replay_ok.part.html");
		}
		else
		{
			$sendresp_html = file_get_contents("feedback_replay_nok.part.html");
		}
		
		// preg_replace($pattern, $replacement, $string);
		$res_html = preg_replace($regex_form, "${0}\n" . $sendresp_html, $res_html); 
	}	
	
	echo $res_html
	
	
// add http://labs.abeautifulsite.net/simple-php-captcha/	
//	if (preg_match($regex_form, $res_html, $regex_groups))
//	{
//		$res_ok = file_get_contents("feedback_replay_ok.part.html");
//		echo "|" . htmlspecialchars($regex_groups[0]) . "|\n" ;
//		echo $res_ok;
//	}
//	else
//	{
//		echo "NO MATCH";
//		echo  $res_html;
//	}
?>
