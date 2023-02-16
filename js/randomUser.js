
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        document.getElementById("nombreCompleto").innerHTML = data.results[0].name.first + ' ' + data.results[0].name.last;
        document.getElementById("fotoPerfil").innerHTML = "<img src='" + data.results[0].picture.large + "' alt='Foto de Perfil' class='img-thumbnail' style='border-radius: 100%;'/>";
    }
});


function miFuncion(elemento, texto, adentro) {
    const miElemento = document.getElementsByClassName('esfera');
    
    if (adentro) {
        miElemento[elemento].innerHTML = '<p class="fs-2 fw-bold nuevoTexto" onclick="miFuncion()">' + texto + '</p>';
    } else {
        miElemento[elemento].innerHTML = '<p class="fs-2 fw-bold textoEsfera" onclick="miFuncion()">' + texto + '</p>';
    }
}