// colect the elements
const elementsTec = document.querySelectorAll('.R-align, .L-align')

// functions
const observerTec = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('R-align')) {
        entry.target.classList.add('show_tec-cards-R')
      } else if (entry.target.classList.contains('L-align')) {
        entry.target.classList.add('show_tec-cards-L')
      }
    }
  })
}, { threshold: 0.9 })

// observere for elements
elementsTec.forEach(el => observerTec.observe(el))