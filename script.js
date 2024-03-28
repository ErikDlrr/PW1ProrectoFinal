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