const body = document.getElementsByTagName('body')[0];
const button = document.getElementsByTagName('button')[0];
let toggle = false;

button.addEventListener('click', () => {
    toggle = !toggle;
    if (toggle) 
        body.style.backgroundColor = '#3634b4ff';
    else
        body.style.backgroundColor = '#e0d64bff';
})