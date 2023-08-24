console.log('Hellow')
// const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
// const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
// const header = document .querySelector('.header .container');

// hamburger.addEventListener('click',()=>{
//     hamburger.classList.toggle('active');
//     mobile_menu.classList.toggle('active');
// });

// document.addEventListener('scrool', () => {
//     var scrool_position = window.scrollY;
//     if (scrool_position > 250) {
//         header.style.backgroundColour = '#29323c';
//     }
//     else{
//         header.style.backgroundColour = 'transparent';
//     }
// });
function setMenu()
{
    att = bar_icon.classList;
    att.toggle('active');
    console.log(bar_icon.classList);


}
var bar_icon = document.querySelector('.hamburger');
bar_icon.addEventListener('click', setMenu);