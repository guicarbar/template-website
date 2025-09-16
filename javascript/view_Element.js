// colect the elements
const elements = document.querySelectorAll('.R-align, .L-align')

// functions
const observer = new IntersectionObserver((entries) => {
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
elements.forEach(el => observer.observe(el))