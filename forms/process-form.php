<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars(trim($_POST["name"]));
    $email   = htmlspecialchars(trim($_POST["email"]));
    $subject = htmlspecialchars(trim($_POST["subject"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Send the email
    mail("info@butterflybearsflowerfarm.ie", "Query from Website", $message, "From:" . $email);

    echo "Thank you for your message, $name; We'll respond to you shortly.";
    exit;
} else {
    // Only handle POST requests
    http_response_code(405);
    echo "Method Not Allowed";
}
?>