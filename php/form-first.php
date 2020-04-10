<?php

$name = htmlspecialchars($_POST["name-first"]);
$tel = htmlspecialchars($_POST["phone-first"]);
$email = htmlspecialchars($_POST["email-first"]);

$to = "frontend-ninja@yandex.ru";
$subject = "Новая заявка с сайта";
$message = 
"
<strong>Имя:</strong> $name;<br>
<strong>Телефон:</strong> $tel;<br>   
<strong>Email:</strong> $email;
";


$headers =
           'From: Новая заявка с сайта' . "\r\n" . 
           'Reply-To: frontend-ninja@yandex.ru' . "\r\n" .
           'Content-Type: text/html; charset=utf-8' . "\r\n" . 
           'Content-Transfer-Encoding: 8bit' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);