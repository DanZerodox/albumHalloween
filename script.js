$(document).ready(function() {
    let currentPage = 0;

    function showTextoInicial() {
        $('#texto-inicial').show();
    }

    function hideTextoInicial() {
        $('#texto-inicial').hide();
    }

    var audio = document.getElementById('music');

    $('#flipbook').turn({
        elevation: 10,
        gradients: true,
        acceleration: true,
        when: {
            turning: function(event, page) {
                if (page > 1) {
                    hideTextoInicial(); // Oculta el texto en la segunda página
                } else {
                    showTextoInicial(); // Muestra el texto si vuelve a la primera
                }
                currentPage = page - 1; // Actualiza la página actual
            
                audio.play().catch(function(error) {
                    console.log('Error al reproducir el audio:', error);
                });
            }
           
        }
    });

    showTextoInicial(); // Mostrar el texto al cargar la página
});
