const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu') 

hamburgerMenu.addEventListener('click',(e=>{
    if(menu.classList.contains('show')){
        menu.classList.remove('show')
        console.log('remvoed')
    }
    else{
    menu.classList.add('show')
    console.log('added')

    }
}))