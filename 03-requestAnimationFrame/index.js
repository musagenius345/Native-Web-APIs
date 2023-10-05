const counter = document.querySelector('.counter')

const limit = 300
 let num = 0
// let test = ˋHelloˋ
function numberCounter() {
  if (num < limit) {
    num++
    counter.textContent = `${num}M`
    requestAnimationFrame(numberCounter)
  } else {
    cancelAnimationFrame(numberCounter)
  }
}

window.addEventListener('DOMContentLoaded', numberCounter)








