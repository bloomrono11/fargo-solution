<?php

$json = file_get_contents("php://input");

header('Content-Type: application/json');

try {
    $data = json_decode($json, true);

    $message = "";
    foreach ($data as $item) {
        $message .=  $item["name"]." : " . $item["value"]." \t\r\n ";
    }

    $data = json_encode(array("message" => "Accepted and email processed", "code" => 0, "data" => $data, "email"=>$message));

    $content = $data;

    $recipient = "meankur1@gmail.com,bloomrono11@gmail.com";

    $email ="contact@fargosolutions.net";
    $mailHeader = "From: $email \r\n";

    $subject ="Advertise or Publisher from FSI";

    //Note enable after setting up email configuration in php-ini or server config file
    mail($recipient, $subject, $content, $mailHeader) or die("Error!");

    print json_encode(array('message' => 'Email successfully sent!', 'code' => 1));

} catch (Throwable $exception) {

    $data = json_encode(array("message" => "Accepted with errors", "code" => 0, "error" => $exception->getMessage()));
    print $data;
}
exit();