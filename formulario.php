<?php
if(isset($_POST['submit']))
{
    $para = "danboy.hguevara@gmail.com";
    $asunto = "Enviando informacion";
    $nombre = $_POST['nombre'];
    $correo = $_POST['email'];
    $telefono = $_POST['telefono'];
    $direccion = $_POST['direccion'];
    $preferencia = $_POST['preferencia'];
    $motivo = $_POST['motivo'];
    $sugerencias = $_POST['sugerencias'];
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf8\r\n";
    $cuerpo = " Enviado por: $nombre\n\n E-Mail: $correo\n\n Telefono: $telefono\n\n Direccion: $direccion\n\n preferencia: $preferencia\n\n Motivo: $motivo\n\n Sugerencias: $sugerencias\n\n";

    $bool = mail($para,$asunto,$cuerpo,$headers);
    echo "Todo salio bien...";
}
else
{
    echo "Algo ocurrio mal...";
}
?>