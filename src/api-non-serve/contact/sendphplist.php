<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$dataResponse = array();
$dataResponseStatus = 0;

$data = json_decode(file_get_contents("php://input"));

$riff = $data->riff;
$nome  =  $data->fname;
$cognome  =  $data->lname;
$email  =  $data->email;
$messaggio = "<b>Inserzione " . $riff . "</b><br><br>" . $data->message;
$testcode = $data->testcode;

if($testcode != "ceo53j@!3w!fjio@") die();
if (empty($nome) && empty($email)) die();

if ($data) {

	require('phpmailer/class.phpmailer.php');

	$emailfrom = $email;
	$emailto = "info@pharmascout.it";
//	$messaggio = "Volevo info sulla vostra attività";

	$mail = new PHPMailer();
	$mail->IsSMTP();
 	$mail->SMTPDebug = 0;
//	$mail->SMTPDebug = false;
	$mail->SMTPAuth = TRUE;
	$mail->SMTPSecure = "ssl";
	$mail->Port     = 465;  
	$mail->Username = "info@pharmascout.it";
	$mail->Password = "Fscout355!76";
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