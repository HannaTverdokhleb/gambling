(() => {
    let burger = document.querySelector('.menu-burger');
    let menu = document.querySelector('.menu-list');
    if (burger) {
        burger.addEventListener('click', (e) => {
            burger.classList.toggle('open');
            menu.classList.toggle('open');
        })
    }
})()
