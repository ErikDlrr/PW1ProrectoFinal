function generar()
{
    //Crear objeto o instancia en js
    var doc = new jsPDF();

    //Tamaño de letra
    doc.setFontSize(40);
    //Color del texto
    doc.setTextColor(9,7,121);
    doc.Text(40, 20, "Encuesta");
    doc.setTextColor(17,122,209);
    doc.setFontSize(30);
    doc.text(50,35, "Es importante tu participación");
    doc.setFontSize(20);
    doc.text(20,50, "25 puntos. Excelente. \r Todas tus respuestas son correctas");
    doc.text(20,50, "20 puntos. Muy bien. \r Obtuviste 4 respuestas correctas");
    doc.text(20,50, "15 puntos. Regular. \r Obtuviste 3 respuestas correctas");
    doc.text(20,50, "10 puntos. Mal \r Obtuviste 2 respuestas correctas");
    doc.text(20,50, "5 puntos. Muy mal. \r Obtuviste 1 respuesta correcta");
    doc.text(20,50, "0 puntos. Terrible. \r Todas tus respuestas son incorrectas");

    var string = doc.output('datauristring');
    $('iframe').attr('src', string);
}