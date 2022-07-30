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

// Accordion
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.getAttribute('aria-expanded') === "true"
        ? question.setAttribute('aria-expanded', "false")
        :question.setAttribute('aria-expanded', "true");
    });
});

// Email validation
const aroundEmailInput = document.querySelector('.email-input');
const emailInput = document.querySelector('input');
const form = document.querySelector('form');

const isEmailValid = (email) => email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(isEmailValid(emailInput.value)) {
        aroundEmailInput.classList.remove('invalid');
        form.submit();
    } else {
        aroundEmailInput.classList.add('invalid');
        emailInput.focus();

        // After first fail - add validation also for onInput event, so user will get instant feedback about validation (e.g if he correct his email, error message will disappear instantly)
        emailInput.addEventListener('input', () => {
            isEmailValid(emailInput.value)
            ? aroundEmailInput.classList.remove('invalid')
            : aroundEmailInput.classList.add('invalid');
        });
    }
});