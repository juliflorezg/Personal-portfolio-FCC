const $  = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const $btn = $('#hamburger-btn')
const $mobileMenu = $('#mobile-menu')
const $mobileMenuItems = $$('#mobile-menu a')

document.addEventListener('click', e =>{
  if(e.target === $btn || e.target.matches(`#hamburger-btn *`)) {
    $btn.classList.toggle('is-active')
    $mobileMenu.classList.toggle('visible')
  }
  // if(e.target === $mobileMenuItems) {
    // $btn.classList.toggle('is-active')
    // $mobileMenu.classList.toggle('visible')
  //   console.log($mobileMenuItems)
  // }
  // if(e.target.matches(`#mobile-menu a`)){
  //   $btn.classList.toggle('is-active')
  //   $mobileMenu.classList.toggle('visible')
  // }
  // console.log($mobileMenuItems)

})

for(let i=0; i < $mobileMenuItems.length; i++){
  $mobileMenuItems[i].addEventListener('click', e =>{
    $btn.classList.toggle('is-active')
    $mobileMenu.classList.toggle('visible')
  })
}

// document.querySelectorAll('#mobile-menu a').addEventListener('click', e =>{
//   $btn.classList.toggle('is-active')
//     $mobileMenu.classList.toggle('visible')
// })