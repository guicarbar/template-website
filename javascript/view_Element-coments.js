// colect the elements
const elementsComents = document.querySelectorAll('.comentsUser_card')

// functions
const observerComents = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('comentsUser_card-show')
    }
  })
}, { threshold: 0.9 })

// observere for elements
elementsComents.forEach(el => observerComents.observe(el))