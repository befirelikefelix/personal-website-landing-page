//Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'))
})

//Popup Buttons
function openDynamicPopup(vid = null, title, subtitle, para) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-subtitle').textContent = subtitle;
    document.getElementById('popup-paragraph').textContent = para;

    const videoElement = document.getElementById('popup-vid');
    const videoSource = videoElement.querySelector('source');

    if (vid) {
        videoSource.src = vid;
        videoElement.style.display = 'block';
        videoElement.load(); // Refresh video source
    } else {
        videoSource.src = '';
        videoElement.style.display = 'none';
    }

    document.getElementById('popup').style.display = 'flex';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}