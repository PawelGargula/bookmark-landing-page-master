const menuButton = document.querySelector('.toggle-menu-button');
const primaryHeader = document.querySelector('.primary-header');

menuButton.addEventListener('click', () => {
    if (primaryHeader.hasAttribute('data-menu-open')) {
        menuButton.firstChild.src = 'images/icon-hamburger.svg';
        primaryHeader.removeAttribute('data-menu-open');
    } else {
        menuButton.firstChild.src = 'images/icon-close.svg';
        primaryHeader.setAttribute('data-menu-open', '');
    }
});