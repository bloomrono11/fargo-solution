<?php

$json = file_get_contents("php://input");

header('Content-Type: application/json');

try {
    $data = json_decode($json, true);

    $message = "";
    foreach ($data as $item) {
        $message .=  $item["name"]." : " . $item["value"]." \t\r\n ";
    }

    $content = $message;

    $recipient = "contact@fargosolutions.net";

    $email ="contact@fargosolutions.net";
    $mailHeader = "From: $email \r\n";

    $subject ="Advertise or Publisher from FSI";

    //Note enable after setting up email configuration in php-ini or server config file
    mail($recipient, $subject, $content, $mailHeader) or die("Error!");

    $data = json_encode(array("message" => "Accepted and email processed", "code" => 0, "data" => $data, "email"=>$message));

    print $data;

} catch (Throwable $exception) {

    $data = json_encode(array("message" => "Accepted with errors", "code" => 1, "error" => $exception->getMessage()));
    print $data;
}
exit();