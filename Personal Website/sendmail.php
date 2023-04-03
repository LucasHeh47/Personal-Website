<?php
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1);
error_reporting(E_ALL);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recaptcha_secret_key = "6LcrMVclAAAAAMKBnDjNRCUScM24zFWitiVWmTzw";
    $recaptcha_response = $_POST["g-recaptcha-response"];
    $remote_ip = $_SERVER["REMOTE_ADDR"];

    $url = "https://www.google.com/recaptcha/api/siteverify?secret=" . $recaptcha_secret_key . "&response=" . $recaptcha_response . "&remoteip=" . $remote_ip;

    $recaptcha_verification_response = file_get_contents($url);
    $recaptcha_verification_result = json_decode($recaptcha_verification_response);

    if (!$recaptcha_verification_result->success) {
        echo "recaptcha_error";
        exit;
    }
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $pattern = "/[()<>%$#!*\"'\\/\\[\\]^&*+=-]/";

    $to = "lucas.johnson.062005@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $email_body = "Name: " . $name . "\n" .
                  "Email: " . $email . "\n" .
                  "Message: " . $message;
    if(strstr($name, '\\') !== false || strstr($name, '\\' !== false)) {
        echo "invalid";
    } else if(preg_match($pattern, $name)){
        echo "invalid";
    } else if (mail($to, $subject, $email_body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "error";
}
