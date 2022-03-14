// Menu toggle

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for (const element of toggle) {
   element.addEventListener('click', function() {
      nav.classList.toggle('show')
   })
}

// menu click hidden items
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
   link.addEventListener('click', function() {
      nav.classList.remove('show')
   })
}

// nav shadow srcoll

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
   if(window.scrollY >= navHeight) {
      header.classList.add('scroll')
   } else {
      header.classList.remove('scroll')
   }
})

// Testtimonials carousel slider swiper
const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination'
   },
   mousewheel: true,
   keyboard: true,
});

// ScrollReveal: show element when scrolling the page
const scrollReveal = ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 700,
   reset: true
})

scrollReveal.reveal(`
   #home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links

`,
{interval: 100}
)