// vars for work
let index = 0
let loopTimeout
let inAnimation = false
const imagens = document.querySelectorAll("#caroussel img")
const total = imagens.length


// functions
// directions click
// backward
function backwardCaroussel() {
  // cleat the loop
  clearTimeout( loopTimeout )
  // change img 
  changeImg(-1)
  // init the loop again
  loopCaroussel()
}
// forward
function forwardCaroussel() {
  // cleat the loop
  clearTimeout( loopTimeout )
  // change img 
  changeImg(1)
  // init the loop again
  loopCaroussel()
}

// att img for show
function mostrarImagem(n) {
  // var for timer to click btn
  inAnimation = true
  // select tehe img now and execute the animatino for exit
  for (let el of imagens) { if (el.classList.contains("animatio-entraceX")) {
    el.classList.remove("animatio-entraceX")
    el.classList.add("animatio-exiteX")
    setTimeout(() => {
      el.classList.remove("animatio-exiteX")
      el.classList.add("screen-disable")
    }, 300)
  }}
  // change the classes
  setTimeout(() => {
    imagens.forEach((img, i) => {
      if (i === n) {
        if (img.classList.contains("screen-disable")) {
          img.classList.remove("screen-disable")
        }
        img.classList.add("animatio-entraceX")
        // return the manual click
        setTimeout(() => { inAnimation = false }, 1000)
      }})
  }, 300)
}


// changeimg - index
function changeImg(direction) {
  // timer to click
  if  (inAnimation) return
  // change index
  index = (index + direction + total) % total
  mostrarImagem(index)
}

// loop
function loopCaroussel() {
  loopTimeout = setTimeout(() => {
    changeImg(1)
    loopCaroussel()
  }, 10000)
}

// inicializar carrossel
document.addEventListener("DOMContentLoaded", () => {
  // inital img
  imagens.forEach((img, i) => {
    if (i === 0) {
      img.classList.add('animatio-entraceX')
    } else {
      img.classList.add('screen-disable')
    }
  })

  // init loop for caroussel
  loopCaroussel()
})