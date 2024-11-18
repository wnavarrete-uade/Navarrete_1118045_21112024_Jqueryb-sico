$(document).ready(function () {
    // Función para ocultar la imagen y cambiar el título
    $("#hide-btn").click(function () {
        $("#image").hide();
        $("#page-title").text("¡No tenemos ninguna imagen!");
    });

    // Función para mostrar la imagen y cambiar el título
    $("#show-btn").click(function () {
        $("#image").show();
        $("#page-title").text("¡Mirá la siguiente imagen!");
    });
});