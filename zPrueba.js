const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};
document.addEventListener("DOMContentLoaded", function () {
    const servicesBoxes = document.querySelectorAll('.services-box');

    servicesBoxes.forEach((box, index) => {
        box.style.opacity = 0;
        box.style.transform = 'translateY(20px)';
        setTimeout(() => {
            box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            box.style.opacity = 1;
            box.style.transform = 'translateY(0)';
        }, 500 + index * 200); // Retraso para cada caja de servicio
    });
});
