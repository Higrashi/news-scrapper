const mainLinkTop = document.querySelector('.main-link-top');
const mainLinkBottom = document.querySelector('.main-link-bottom');
const polygonLight = document.querySelector('.light');
const polygonDark = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');
const mainBody = document.querySelector('.main-body');


function hideMainOverlay() {
    polygonDark.classList.add('transform-left');
    polygonLight.classList.add('transform-right');
    mainLinkTop.classList.add('transform-left');
    mainLinkBottom.classList.add('transform-right');
   
    setTimeout(function(){
        getPopular()
        mainBody.style.zIndex = '9'
    },1000)
}

function handleMainLinks(e) {
    e.preventDefault();
    console.log('funcion works')
    hideMainOverlay()

}

mainLinkTop.addEventListener('click', handleMainLinks);
mainLinkBottom.addEventListener('click', handleMainLinks);