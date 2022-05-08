// menu
const navBar = document.querySelector('.nav__list'),
      navMenu = document.querySelector('.nav__menu'),
      navClose = document.querySelector('.nav__close');

navMenu.addEventListener('click', () => {
  navBar.classList.add('active');
})

navClose.addEventListener('click', () => {
  navBar.classList.remove('active');
})


// active nav-link
const navLinks = document.querySelectorAll('.nav__link');

function navActive(){
  navLinks.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
}

navLinks.forEach(n => n.addEventListener('click', navActive));

// remove menu upon clicking link
// function linkClose(){
//   navLinks.forEach(n => n.addEventListener('click', () => {
//     navBar.classList.remove('active');
//   }))
// }

// navLinks.forEach(n => n.addEventListener('click', linkClose));


// dropdown
const dropdowns = document.querySelectorAll('.dropdown'),
      dropdownLinks = document.querySelectorAll('.dropdown__link'),
      dropdownMenu = document.querySelector('.dropdown__menu');

function dropdownToggle(e){
  e.stopPropagation();
  let item = this.parentNode.className;

  for(i = 0; i < dropdowns.length; i++){
    dropdowns[i].className = 'nav__item dropdown close';
  }
  // dropdownLink
  if(item === 'nav__item dropdown close'){
    this.parentNode.className = 'nav__item dropdown open'
  } else{
    this.parentNode.className = 'nav__item dropdown close'
  }
}

dropdownLinks.forEach(dropdownLink => {
  dropdownLink.addEventListener('click', dropdownToggle);
})


// close upon clicking outside
document.addEventListener('click', (e) => {
  if(e.target !== navMenu && e.target !== navBar){
    navBar.classList.remove('active');
    
    dropdowns.forEach(dropdown => {
      dropdown.className = 'nav__item dropdown close';
    })
  }
})