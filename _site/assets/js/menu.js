document.querySelector('.menu-icon').addEventListener('click', function() {
    const menu = document.querySelector('.menu__list');
    menu.classList.toggle('menu__list--animate'); // Toggle the animation class to show/hide the menu
});
