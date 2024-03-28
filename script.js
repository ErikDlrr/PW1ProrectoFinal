function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('expanded');
}

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

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal');
    const modalVideo = document.getElementById('expanded-video');
    const galleryVideos = document.querySelectorAll('.foto-video');
    const closeBtn = document.querySelector('.close');

    galleryVideos.forEach(function (video) {
        video.addEventListener('click', function () {
            modal.style.display = 'block';
            modalVideo.src = this.src;
            modalVideo.play();
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        modalVideo.pause();
    });

    window.addEventListener('click', function (e) {
        if (e.target == modal) {
            modal.style.display = 'none';
            modalVideo.pause();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los videos
    var videos = document.querySelectorAll('.foto-video');

    videos.forEach(function(video) {
        video.addEventListener('mouseenter', function(event) {
            // Reproduce el video sin audio
            event.target.muted = true;
            event.target.play();

            // Detiene el video después de 10 segundos
            setTimeout(function() {
                event.target.pause();
                event.target.currentTime = 0;
            }, 10000);
        });

        video.addEventListener('mouseleave', function(event) {
            // Detiene el video cuando el cursor deja de estar sobre él
            event.target.pause();
            event.target.currentTime = 0;
        });
    });
});