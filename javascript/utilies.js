// resize page
document.addEventListener("resize", () => {
  // debounce
  clearTimeout(timeout)
  timeout = setTimeout(() => { location.reload() }, 300)
})


// navbar media querrie
window.addEventListener("resize", () => {
  
})

// navbar media querrie (initial load)
if (window.innerWidth >= 768) {
  document.querySelector('.navbar-link')?.classList.remove('hidden');
} else {
  document.querySelector('.navbar-link')?.classList.add('hidden');
}