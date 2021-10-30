const game = document.querySelector('.game')
const result = document.querySelector('.result')

const displayPic = document.querySelector('.spooky-pic')
const sound = document.querySelector('.sound')

const collisionCheck = (value) => {
  if (value === 'maze-border') {
    game.style.display = 'none'
    result.style.display = 'block'
  }

  if (value === 'end-game') {
    game.style.display = 'none'
    displayPic.style.display = 'block'
    sound.play()
  }
}

window.addEventListener('mousemove', (e) => {
  let check = e.target.classList.value

  collisionCheck(check)
})
