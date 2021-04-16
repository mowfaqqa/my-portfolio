// UI vars
const loadImg = document.querySelector('.loading')
const welcome = document.querySelector('#welcome-page')
document.addEventListener('DOMContentLoaded', loadImage)

function loadImage (){
// displaying loading gif
loadImg.style.display = 'block'
welcome.style.display = 'none'
document.querySelector('footer').style.display = 'none'
setTimeout(() => {
  loadImg.style.display = 'none'
  welcome.style.display = 'flex'
  document.querySelector('footer').style.display = 'block'
}, 4500);
}