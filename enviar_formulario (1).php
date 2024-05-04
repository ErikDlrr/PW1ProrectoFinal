<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $direccion = $_POST['direccion'];
    $preferencia = $_POST['preferencia'];
    $motivo = $_POST['motivo'];
    $sugerencias = $_POST['sugerencias'];

    $to = "183742@upslp.edu.com"; 
    $subject = "Formulario enviado desde tu sitio web";
    $message = "Nombre: $nombre\nCorreo Electrónico: $email\nTeléfono: $telefono\nDirección: $direccion\nPreferencia: $preferencia\nMotivo: $motivo\nSugerencias: $sugerencias";

    mail($to, $subject, $message);


    header('Location: confirmacion.html');
    exit;
}
?>
