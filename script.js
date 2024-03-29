function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('expanded');
}

//////////////////////////////////////////////////////////////////////////////////////
//Foto

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal');
    const modalImg = document.getElementById('expanded-img');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const closeBtn = document.querySelector('.close');

    galleryImages.forEach(function (img) {
        img.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});

///////////////////////////////////////////////////////////////////////////////////////////
//Video

// Carga la API de YouTube de manera asíncrona
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Crea un reproductor de YouTube para cada div con la clase foto-video
var players = {};
function onYouTubeIframeAPIReady() {
    var youtubeVideos = document.querySelectorAll('.youtube-video');
    for (var i = 0; i < youtubeVideos.length; i++) {
        var videoId = youtubeVideos[i].dataset.videoId;
        players[videoId] = new YT.Player(youtubeVideos[i], {
            height: 'auto',
            width: 'auto',
            videoId: videoId,
            events: {
                'onStateChange': function(event) {
                    // Detiene el video cuando el cursor deja de estar sobre él
                    if (event.data == YT.PlayerState.PAUSED) {
                        event.target.seekTo(0);
                    }
                }
            }
        });

        // Reproduce el video sin audio cuando el cursor está sobre él
        youtubeVideos[i].addEventListener('mouseenter', function(event) {
            var videoId = event.currentTarget.dataset.videoId;
            players[videoId].mute();
            players[videoId].playVideo();
        });

        // Detiene el video cuando el cursor deja de estar sobre él
        youtubeVideos[i].addEventListener('mouseleave', function(event) {
            players[videoId].pauseVideo();
            players[videoId].seekTo(0);
        });
    }
}
//////////////////////////////////////////////////////////////////////////////////////

