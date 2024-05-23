(() => {
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.menu');
    if (burger) {
        burger.addEventListener('click', (e) => {
            burger.classList.toggle('burger_open');
            menu.classList.toggle('menu_open');
        })
    }
})()
