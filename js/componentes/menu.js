const getMenu = container => container.querySelector('nav');
const buttonMenu = container => container.querySelector('.header_menu');

const menuEvento = container => {
    let menu = getMenu(container),
        button = buttonMenu(container);

    button.addEventListener('click', e => {
        menu.classList.toggle('active');
        document.querySelector('body').classList.toggle("active");
    })
}

export default menuEvento;
