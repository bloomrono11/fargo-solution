<?php
/**
 * Created by PhpStorm.
 * User: bloom
 * Date: 5/22/2019
 * Time: 10:25 PM
 */


if (isset($_POST['name']))
    $name = $_POST['name'];
if (isset($_POST['email']))
    $email = $_POST['email'];

header('Content-Type: application/json');
if ($name === '') {
    print json_encode(array('message' => 'Name cannot be empty', 'code' => 0));
    exit();
}
if (strlen($name) < 4) {

    json_encode(array('message' => 'Name cannot be less than 4.', 'code' => 0));
    exit();
}
if ($email === '') {
    json_encode(array('message' => 'Email cannot be empty.', 'code' => 0));
    exit();
} else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

        json_encode(array('message' => 'Email format invalid.', 'code' => 0));
        exit();
    }
}

$content = "From: $name \nEmail: $email \nMessage: User wants to subscribe";

$recipient = "contact@fargosolutions.net";
$from = "contact@fargosolutions.net";
$mail_header = "From: $from \r\n";
$subject ="Subscription";

//Note enable after setting up email configuration in php-ini or server config file
mail($recipient, $subject, $content, $mail_header) or die("Error!");

print json_encode(array('message' => 'Email successfully sent!', 'code' => 1));
exit();
