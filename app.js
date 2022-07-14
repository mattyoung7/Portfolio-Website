const navBtn = document.querySelector('#nav-btn');
const navList = document.querySelector('#navlist');

navBtn.addEventListener('click', () => {
    const visibility = navList.getAttribute('data-visible');
    if (visibility === 'false') {
        setTimeout
        navList.setAttribute('data-visible', 'true');
    } else {
        navList.setAttribute('data-visible', 'false');
    }
})