let mainMenu = document.querySelector('.menu_bar');
let openButton = document.getElementById('open-btn');
let closeButton = document.getElementById('close-btn')

function openMenu() {
    mainMenu.style.left = '0';
    openButton.style.display = 'none';
    closeButton.style.display = 'block';
}
function closeMenu() {
    mainMenu.style.left = '-100%';
    openButton.style.display = 'block';
    closeButton.style.display = 'none';
}