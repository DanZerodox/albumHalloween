<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Álbum de Halloween</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="media/turn.min.js"></script>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/turn.js/4.1.0/turn.css" /> -->
</head>
<body>
    <!-- <div class="titulo">
        <h1>Álbum de Halloween</h1>
        <p>Un viaje espeluznante a través de los mejores recuerdos</p>
    </div> -->
    <div class="container">
        <div class="texto-inicial" id="texto-inicial">
            <img src="media/portada.png">

        </div>
        <div class="album" id="flipbook">
           
            <div class="page">
              
                <div class="decoracion calabaza"></div>
                <div class="decoracion calavera top-left"></div>
                <div class="decoracion calavera top-right"></div>
                <img src="media/foto1.jpg" alt="Foto 1">
                <div class="texto">Te amo más que a los dulces de Halloween.</div>
                <div class="murcielago" id="murcielago1"></div>
                <div class="bruja" id="bruja1"></div>
            </div>
            <div class="page">
                <div class="decoracion arania"></div>
                <div class="decoracion calavera top-left"></div>
                <div class="decoracion calavera top-right"></div>
                <img src="media/foto2.jpg" alt="Foto 2">
                <div class="texto">Eres mi mejor hechizo, mi amor.</div>
                <div class="murcielago" id="murcielago2"></div>
                <div class="bruja" id="bruja2"></div>
            </div>
            <div class="page">
                <div class="decoracion calabaza"></div>
                <div class="decoracion calavera top-left"></div>
                <div class="decoracion calavera top-right"></div>
                <img src="media/foto3.jpg" alt="Foto 3">
                <div class="texto">Juntas, iluminan mi mundo.</div>
                <div class="murcielago" id="murcielago3"></div>
                <div class="bruja" id="bruja3"></div>
            </div>
            <div class="page">
                <div class="decoracion arania"></div>
                <div class="decoracion calavera top-left"></div>
                <div class="decoracion calavera top-right"></div>
                <img src="media/foto4.jpg" alt="Foto 4">
                <div class="texto">Cada momento a su lado es un regalo.</div>
                <div class="murcielago" id="murcielago3"></div>
                <div class="bruja" id="bruja3"></div>
            </div>
            <div class="page">
                <div class="decoracion calabaza"></div>
                <div class="decoracion calavera top-left"></div>
                <div class="decoracion calavera top-right"></div>
                <img src="media/foto5.jpg" alt="Foto 5">
                <div class="texto">Gracias por ser mi compañera en esta aventura.</div>
                <div class="murcielago" id="murcielago3"></div>
                <div class="bruja" id="bruja3"></div>
            </div>
            <div class="page">
                <div class="decoracion arania"></div>
                <div class="decoracion calavera top-left"></div>
                <div class="decoracion calavera top-right"></div>
                <img src="media/foto6.jpg" alt="Foto 6">
                <div class="texto">Eres la estrella más brillante en la noche de Halloween.</div>
                <div class="murcielago" id="murcielago3"></div>
                <div class="bruja" id="bruja3"></div>
            </div>
            <div class="page">
                <div class="decoracion calabaza"></div>
                <div class="decoracion calavera top-left"></div>
                <div class="decoracion calavera top-right"></div>
                <img src="media/foto7.jpg" alt="Foto 7">
                <div class="texto">Eres mi pequeña brujita, y cada risa tuya ilumina mi Halloween.</div>
                <div class="murcielago" id="murcielago3"></div>
                <div class="bruja" id="bruja3"></div>
            </div>
            <div class="page">
                <div class="decoracion arania"></div>
                <div class="decoracion calavera top-left"></div>
                <div class="decoracion calavera top-right"></div>
                <img src="media/foto8.jpg" alt="Foto 8">
                <div class="texto">Cada momento con ustedes es un cuento de hadas.</div>
                <div class="murcielago" id="murcielago3"></div>
                <div class="bruja" id="bruja3"></div>
            </div>
            <div class="page">
            
                <img src="media/final.jpg" alt="Foto 9">
                <div class="texto"> ¡Las quiero hasta la eternidad!</div>
              
            </div>
            <audio id="music" src="media/musica.mp3" preload="auto"></audio>

            <!-- <div class="page">
                <div class="decoracion calabaza"></div>
                <div class="decoracion calavera top-left"></div>
                <div class="decoracion calavera top-right"></div>
                <img src="media/foto4.jpg" alt="Foto 4">
                <div class="texto">Cada día contigo es una nueva aventura.</div>
                <div class="murcielago" id="murcielago4"></div>
                <div class="bruja" id="bruja4"></div>
            </div>
        </div> -->
    </div>
    <script src="script.js"></script>
</body>
</html>
