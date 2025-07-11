<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name    = htmlspecialchars(trim($_POST["name"]));
  $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $subject = htmlspecialchars(trim($_POST["subject"]));
  $message = htmlspecialchars(trim($_POST["message"]));

  if ($name && $email && $subject && $message) {
    $to = "colinnee@hotmail.com";
    $headers = "From: $name <$email>\r\n";
    $body = "Name: $name\nEmail: $email\n\nSubject: $subject\n\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
      echo "Success";
    } else {
      echo "Error: Could not send email.";
    }
  } else {
    echo "Error: Incomplete form.";
  }
} else {
  echo "Invalid request.";
}
?>