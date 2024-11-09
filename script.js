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
  const checkIcon = document.getElementsByClassName('checkmark-icon')

  if (document.body.classList.contains('dark-theme')) {
    expIcon.src = './assets/experience-dark.png'
    eduIcon.src = './assets/education-dark.png'
    checkIcon.src = './assets/checkmark-dark.png'
  } else {
    expIcon.src = './assets/experience-light.png'
    eduIcon.src = './assets/education-light.png'
    checkIcon.src = './assets/checkmark-light.png'
  }
}

