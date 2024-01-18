<?php



if(isset($_POST['submit'])) {

	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message'];
	
	// Message to me
	$mailTo = "alfredo.barillas@alfredoesdesign.com";
  $headers = "From: ".$mailFrom;
  $headers .='MIME-Version: 1.0\r\n';
  $headers .= 'Content-type: text/html; carset=iso-8859-1\n';
  $txt = "you have received an e-mail from ".$name.".\n\n".$subject.".\n\n".$message;
  
  
  
  //  ERROR HANDLERS
	// Check Required Fields
	if (empty($name) || empty($subject) || empty($mailFrom) || empty($message)) {
    header("Location: contact.php?contact=empty");
    exit();
  } else {
    //Check if input characters are valid
    if(!preg_match("/^[a-zA-Z]*$/", $name) || !preg_match("/^[a-zA-Z]*$/",$subject)) {
      header("Location: contact.php?contact=char");
      exit();
    } else {
      //Check if email is valid
      if (!filter_var($mailFrom, FILTER_VALIDATE_EMAIL)) {
        header("Location: contact.php?contact=invalidemail&name=$name&message=$message");
        exit();
      } else {  
        mail($mailTo,$subject,$txt, $headers);
        header("Location: contact.php?contact=mailsend");
        exit();
      }
    }
  }
}

?>
