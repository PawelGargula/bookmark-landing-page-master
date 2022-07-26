// Hamburger menu
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

// Tabs
const tabHeaders = document.querySelectorAll('[data-header-nr]');
const tabContents = document.querySelectorAll('[data-content-nr]');

tabHeaders.forEach(tabHeader => {
    tabHeader.addEventListener('click', () => {
        // Remove active states on all tabs
        tabContents.forEach(tabContent => tabContent.classList.remove('tab-content-active'));
        tabHeaders.forEach(tabH => tabH.classList.remove('tab-header-active'));
        
        tabHeader.classList.add('tab-header-active');
        
        const tabContent = [...tabContents].find(tabC => tabC.dataset.contentNr === tabHeader.dataset.headerNr);
        tabContent.classList.add('tab-content-active');
    });
});
