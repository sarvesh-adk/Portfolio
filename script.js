function toggleMenu () {
  const menu = document.querySelector('.menu-links')
  const icon = document.querySelector('.hamburger-icon')
  menu.classList.toggle('open')
  icon.classList.toggle('open')
}

document.addEventListener('DOMContentLoaded', function () {
  const logo = document.querySelector('.logo')
  logo.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')
    imgSrc()
  })
})

function imgSrc () {
  const expIcon = document.getElementById('experience-icon')
  const eduIcon = document.getElementById('education-icon')
  const checkIcons = document.getElementsByClassName('checkmark-icon')

  if (document.body.classList.contains('dark-theme')) {
    if (expIcon) expIcon.src = './assets/experience-dark.png'
    if (eduIcon) eduIcon.src = './assets/education-dark.png'
    for (let i = 0; i < checkIcons.length; i++) {
      checkIcons[i].src = './assets/checkmark-dark.png'
    }
  } else {
    if (expIcon) expIcon.src = './assets/experience-light.png'
    if (eduIcon) eduIcon.src = './assets/education-light.png'
    for (let i = 0; i < checkIcons.length; i++) {
      checkIcons[i].src = './assets/checkmark-light.png'
    }
  }
}
