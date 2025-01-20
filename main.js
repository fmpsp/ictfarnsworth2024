// show menu

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId);
    toggle.addEventListener('click', () => {
        // add show-menu class to nav menu
        nav.classList.toggle('show-menu');
        // add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav__toggle','nav-menu');
console.log("ping!");