const inputField = document.querySelector('input#name-input');
const outputField = document.querySelector('span#naame-output');

inputField.addEventListener('input', e => {
    outputField.textContent = e.target.value;
    if (!e.target.value) {
        outputField.textContent = 'Anonymous';
    }
});