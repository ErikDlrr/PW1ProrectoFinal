<?php
if(isset($_POST['envi']))
{
    $para = "danboy.hguevara@gmail.com";
    $asunto = "Enviando informacion";
    $nombre = $_POST['nombre'];
    $problema = $_POST['prob'];
    $correo = $_POST['email'];
    $telefono = $_POST['numero'];
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf8\r\n";
    $cuerpo = " Enviado por: $nombre\n\n Problema: $prob\n\n E-Mail: $correo\n\n Telefono: $numero\n\n" ;

    $bool = mail($para,$asunto,$cuerpo,$headers);
    echo "Todo salio bien...";
}
else
{
    echo "Algo ocurrio mal...";
}
?>