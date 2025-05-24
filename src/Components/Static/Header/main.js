var menuIsOpen = false;

document.addEventListener('DOMContentLoaded', () => {
    const showMenu = document.getElementById('showMenu');
    const menu = document.getElementById('mobile-menu-2');
    showMenu.onclick = () => {
        menu.classList.toggle('hidden');
    }
});