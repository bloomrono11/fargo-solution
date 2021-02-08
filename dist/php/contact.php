<?php


if (isset($_POST['name']))
    $name = $_POST['name'];
if (isset($_POST['email']))
    $email = $_POST['email'];
if (isset($_POST['message']))
    $message = $_POST['message'];
if (isset($_POST['subject']))
    $subject = $_POST['subject'];

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
if ($subject === '') {
    json_encode(array('message' => 'Subject cannot be empty.', 'code' => 0));
    exit();
}
if (strlen($subject) < 4) {

    json_encode(array('message' => 'Subject cannot be less than 4.', 'code' => 0));
    exit();
}
if ($message === '') {

    json_encode(array('message' => 'Message cannot be empty', 'code' => 0));
    exit();
}
if (strlen($message) < 4) {

    json_encode(array('message' => 'Message cannot be less than 4.', 'code' => 0));
    exit();
}
$content = "From: $name \nEmail: $email \nMessage: $message";

$from = "contact@fargosolutions.net";
$mailHeader = "From: $from \r\n";
$recipient = "contact@fargosolutions.net";

//Note enable after setting up email configuration in php-ini or server config file
mail($recipient, $subject, $content, $mailHeader) or die("Error!");

print json_encode(array('message' => 'Email successfully sent!', 'code' => 1));
exit();
