var button_menu = document.querySelector('#menu_icon')
var button_close = document.querySelector('#close_icon')
var all_sections = document.querySelectorAll('section')
var footer = document.querySelector('foote')
var menu = document.querySelector('#menu')
var header = document.querySelector('header')
var logo_header = document.querySelector('#logo')
var i = 0

function select_menu() {
  button_menu.classList.remove('block')
  button_menu.classList.add('hidden')
  button_close.classList.remove('hidden')
  button_close.classList.add('block')
  hidden_all()
  menu.classList.remove('hidden')
  menu.classList.add('block')
  header.classList.remove('justify-between')
  header.classList.add('justify-end')
  header.classList.remove('bg-black')
  logo_header.classList.remove('block')
  logo_header.classList.add('hidden')
}

function select_close() {
  button_menu.classList.remove('hidden')
  button_menu.classList.add('block')
  button_close.classList.remove('block')
  button_close.classList.add('hidden')
  show_all()
  menu.classList.remove('block')
  menu.classList.add('hidden')
  header.classList.add('justify-between')
  header.classList.remove('justify-end')
  header.classList.add('bg-black')
  logo_header.classList.add('block')
  logo_header.classList.remove('hidden')
}

function hidden_all() {
  for (i = 1; i < all_sections.length; i++) {
    all_sections[i].classList.remove('block')
    all_sections[i].classList.add('hidden')
  }
  footer.classList.remove('block')
  footer.classList.add('hidden')
}

function show_all() {
  for (i = 1; i < all_sections.length; i++) {
    all_sections[i].classList.remove('hidden')
    all_sections[i].classList.add('block')
  }
  footer.classList.remove('hidden')
  footer.classList.add('block')
}