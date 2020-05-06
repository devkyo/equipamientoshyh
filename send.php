<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$data = "Nombre: ".$name."\nEmail: ".$email."\nTelefono: ".$phone."\nMensaje: ".$message;



$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    // $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'mail.equipamientoshyh.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'noreply@equipamientoshyh.com';                 // SMTP username
    $mail->Password = 'reactive20604974527';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('softawk@gmail.com', 'Gerencia');
   //  $mail->setFrom('gerencia@equipamientoshyh.com', 'Gerencia');
   //  $mail->addAddress('fiorellabedon@gmail.com', 'Fiorella Bedon');     // Add a recipient
    // $mail->addCC('pilar.ramirezmd@gmail.com');

    //Content
    // $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contacto Equipamientos HyH';
    $mail->Body    = $data;
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Hola '.$name.', en breve nos pondremos en contacto contigo.';
} catch (Exception $e) {
    echo 'Error al enviar el mensaje, intentelo nuevamente ', $mail->ErrorInfo;
}