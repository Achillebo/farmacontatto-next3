<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$dataResponse = array();
$dataResponseStatus = 0;

$riff = "";
$titolo= "";
$nome  =  "";
$cognome  =  "";
$email  =  "";
$tel  =  "";
$oggetto = "";
$messaggio = "";
$sito  =  "";
$tipo  =  "";

$mailSMTPSecure = "";
$mailPort     = 0;  
$mailUsername = "";
$mailPassword = "";
$mailHost     = "";
$mailMailer   = "";

$data = json_decode(file_get_contents("php://input"));

if($data->testcode != "ceo53j@!3w!fjio@") die();
if (empty($data->fname) && empty($email)) die();

// *** Gestione diverse provenienze - inizio ***

	// FARMACONTATTO - imposto parametri mail
if ($data->sito === "Farmacontatto") {

	$emailfrom = $email;
	$emailto = "info@farmacontatto.it";
	$mailAddAddress = $emailto . " Info - Farmacontatto";
	$mailSMTPSecure = "ssl";
	$mailPort     = 465;  
	$mailUsername = "info@farmacontatto.it";
	$mailPassword = "KG6!Br04Sw";
	$mailHost     = "authsmtp.securemail.pro";
	$mailMailer   = "smtp";

		// Richiesta info su inserzione Farmacontatto
	if ($data->tipo === "info_ins" || $data->sito === "Farmacontatto") {
		$nome  =  $data->fname;
		$cognome  =  $data->lname;
		$email  =  $data->email;
		$titolo= $data->titolo;
		$oggetto = $data->oggetto;
		$messaggio = "Nome : <b>".$nome."</b></br>";
		$messaggio = $messaggio . "Cognome : <b>".$cognome."</b></br>";
		$messaggio = $messaggio . "Email : <b>".$email."</b></br>";
		$messaggio = $messaggio . "Rif : <b>".$riff." - " . $titolo . "</b></br></br></br>";
		$messaggio = $messaggio . "Messaggio : " .$data->message. "</br>---";
	}
		// Richiesta contatto da Farmacontatto
	if ($data->tipo === "contatto" || $data->sito === "Farmacontatto") {

		$nome  =  $data->fname;
		$cognome  =  $data->lname;
		$email  =  $data->email;
		$messaggio = "Messaggio proveiente da: <b>" . $data->sito."</b></br>";
		$messaggio = $messaggio . $data->message;
	}
}

	// PHARMABROKER - imposto parametri mail

if ($data->sito === "Pharmabroker") {

	$emailfrom = $email;
	$emailto = "info@pharmascout.it";
	$mailAddAddress = $emailto . " Info - Pharmascout";
	$mailSMTPSecure = "ssl";
	$mailPort     = 465;  
	$mailUsername = "info@pharmascout.it";
	$mailPassword = "Fscout355!76";
	$mailHost     = "authsmtp.securemail.pro";
	$mailMailer   = "smtp";
	
		// Richiesta info su inserzione Pharmabroker
	if ($data->tipo === "info_ins") {
		$nome  =  $data->fname;
		$cognome  =  $data->lname;
		$email  =  $data->email;
		$titolo= $data->titolo;
		$oggetto = $data->oggetto;
		$messaggio = "Nome : <b>".$nome."</b></br>";
		$messaggio = $messaggio . "Cognome : <b>".$cognome."</b></br>";
		$messaggio = $messaggio . "Email : <b>".$email."</b></br>";
		$messaggio = $messaggio . "Rif : <b>".$riff." - " . $titolo . "</b></br></br></br>";
		$messaggio = $messaggio . "Messaggio : " .$data->message. "</br>---";
	}
	
		// Richiesta contatto da Pharmabroker
	if ($data->tipo === "contatto") {
		
		$nome  =  $data->fname;
		$cognome  =  $data->lname;
		$email  =  $data->email;
		$messaggio = "Messaggio proveiente da: <b>" . $data->sito."</b></br>";
		$messaggio = $messaggio . $data->message;
	}

	// Richiesta inserimento inserzione Pharmabroker
	if ($data->tipo === "inserzione") {
		$nome  =  $data->fname;
		$cognome  =  $data->lname;
		$email  =  $data->email;
		$sito  =  $data->sito;
		$tel  =  $data->tel;
		$messaggio = "Messaggio proveiente da: <b>" . $sito."</b></br>";
		$messaggio = $messaggio . $data->message . "</br>";
		$messaggio = $messaggio . "Contatto telefonico: " . $tel;
	}
	
}

// *** Gestione diverse provenienze - fine ***

if ($data) {

	require('phpmailer/class.phpmailer.php');

//	$emailto = "info@pharmascout.it";               	// inviata da e Rispondi a:  (From) primo destinataario
//	$email2 = "contatti@farmacontatto.it";			// Inviata a: 	(To)
//	$emailfron = "achille.bonzini@farmacontatto.it";	// Rispondi a:	(From)  secondo destinatario

	$emailfrom = $email;
	$emailto = "info@farmacontatto.it";

	$mail = new PHPMailer();
	$mail->IsSMTP();
 	$mail->SMTPDebug = 0;
//	$mail->SMTPDebug = false;
	$mail->SMTPAuth = TRUE;
	$mail->SMTPSecure = $mailSMTPSecure;
	$mail->Port     = $mailPort;  
	$mail->Username = $mailUsername;
	$mail->Password = $mailPassword;
	$mail->Host     = $mailHost;
	$mail->Mailer   = $mailMailer;

	$mail->SetFrom($emailfrom , $nome . " " .$cognome );
//	$mail->AddReplyTo($email2);    // Secondo indirizzo di invio ( non serve )
	$mail->$mailAddAddress;
	$mail->Subject = $oggetto . $riff;
	$mail->WordWrap   = 80;
	$mail->MsgHTML($messaggio);

	$mail->IsHTML(true);

	if ($mail->Send()) {  
		$dataResponseStatus = 1;
	} else {
		$dataResponseStatus = 2;
	}

	$dataResponse['response'] = $dataResponseStatus;
	$resultadosJson = json_encode($dataResponse);
	echo $resultadosJson;
	
}

?>