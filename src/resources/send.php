<?php
if (isset($_POST['name'])) {$phone = $_POST['name'];}
if (isset($_POST['phone'])) {$name = $_POST['phone'];}

$myaddres  = "pasha.gorulev@gmail.com";
$mes = "Тема: Заказ обратного звонка!\nТелефон: $phone\nИмя: $name\n";

$sub='Заказ';
$email='Заказ обратного звонка';
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>