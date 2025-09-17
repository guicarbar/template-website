function changeValue() {
  // element
  const elementIndicator = document.getElementById('indicator')
  const popularValue = document.getElementById('popularValue')
  const ultraValue = document.getElementById('ultraValue')

  // check
  if (elementIndicator.classList.contains('yearBtn')) {
    // MM
    // change class
    elementIndicator.classList.remove('yearBtn')
    elementIndicator.classList.add('mouthBtn')
    
    //change values in elements
    popularValue.textContent = 'R$20'
    ultraValue.textContent = 'R$200'
  } else if (elementIndicator.classList.contains('mouthBtn')) {
    // yy
    // change class
    elementIndicator.classList.remove('mouthBtn')
    elementIndicator.classList.add('yearBtn')

    //change values in elements
    popularValue.textContent = 'R$16'
    ultraValue.textContent = 'R$160'
  }
}