<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$dataResponse = array();
$dataResponseStatus = 0;

$data = json_decode(file_get_contents("php://input"));


exit;

$riff = $data->riff;
$titolo= $data->titolo;
$nome  =  $data->fname;
$cognome  =  $data->lname;
$email  =  $data->email;
$tel  =  $data->tel;
$sito  =  $data->sito;
$tipo  =  $data->tipo;

$messaggio = "Nome : <b>".$nome."</b></br>";
$messaggio = $messaggio . "Cognome : <b>".$cognome."</b></br>";
$messaggio = $messaggio . "Email : <b>".$email."</b></br>";
$messaggio = $messaggio . "Rif : <b>".$riff." - " . $titolo . "</b></br></br></br>";
$messaggio = $messaggio . "Messaggio : " .$data->message. "</br>---";

$testcode = $data->testcode;

if($testcode != "ceo53j@!3w!fjio@") die();
if (empty($nome) && empty($email)) die();

if ($data) {

	require('phpmailer/class.phpmailer.php');

//	$emailto = "info@pharmascout.it";               	// inviata da e Rispondi a:  (From) primo destinataario
//	$email2 = "contatti@farmacontatto.it";			// Inviata a: 	(To)
//	$emailfron = "achille.bonzini@farmacontatto.it";	// Rispondi a:	(From)  secondo destinatario

	$emailfrom = $email;
	$emailto = "info@farmacontatto.it";
//	$messaggio = "Volevo info sulla vostra attività";

	$mail = new PHPMailer();
	$mail->IsSMTP();
 	$mail->SMTPDebug = 0;
//	$mail->SMTPDebug = false;
	$mail->SMTPAuth = TRUE;
	$mail->SMTPSecure = "ssl";
	$mail->Port     = 465;  
	$mail->Username = "info@farmacontatto.it";
	$mail->Password = "KG6!Br04Sw";
	$mail->Host     = "authsmtp.securemail.pro";
	$mail->Mailer   = "smtp";

	$mail->SetFrom($emailfrom , $nome . " " .$cognome );
//	$mail->AddReplyTo($email2);    // Secondo indirizzo di invio ( non serve )
	$mail->AddAddress($emailto, "Info - Farmacontatto");

	$mail->Subject = "Richiesta info " . $riff . " da Farmacontatto.it";
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