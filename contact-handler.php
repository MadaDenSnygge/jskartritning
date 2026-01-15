<?php
$name = $_POST["name"];
$email = $_POST["email"];
$subject = "subject";
$message = $_POST["message"];


require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp-relay.brevo.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "adam.f.samuelsson@gmail.com";
$mail->Password = "snoppidopp";

$mail->setFrom($email,$name);
$mail->addAddress("adam.f.samuelsson@gmail.com", "Adam");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

echo "sent"

?>
