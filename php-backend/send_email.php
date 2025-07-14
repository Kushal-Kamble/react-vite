<?php
// Allow CORS (frontend communication)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

// Get JSON Data
$data = json_decode(file_get_contents("php://input"), true);

// Validate
if (!$data['name'] || !$data['email'] || !$data['message']) {
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

// PHPMailer Load
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/Exception.php';
require './PHPMailer/class.phpmailer';
require './PHPMailer/class.smtp.php';

// Email Setup
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = "email-smtp.us-east-1.amazonaws.com";
    $mail->SMTPAuth = true;
    $mail->Username = "AKIA5OQ6466FZWEYNNVJ";
    $mail->Password = "BB8uQenn6fCEjW791mFxeUgQ39xwI/9PEBDPz7uasG58";
    $mail->SMTPSecure = "tls";
    $mail->Port = 2587;

    // Sender & Receiver
    $mail->setFrom('kushal.kamble@mitsde.com', 'MITSDE Admission Form');
    $mail->addReplyTo('kushal.kamble@mitsde.com');
    $mail->addAddress('kushal.kamble@mitsde.com');
    $mail->addBCC('kushal.kamble@mitsde.com');

    // Email Content
    $mail->Subject = "🎓 New Admission Enquiry from " . $data['name'];
    $mail->Body = "Name: {$data['name']}\nEmail: {$data['email']}\n\nMessage:\n{$data['message']}";

    // Send
    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $mail->ErrorInfo]);
}
?>
