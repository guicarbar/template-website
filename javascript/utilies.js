// resize page
document.addEventListener("resize", () => {
  // debounce
  clearTimeout(timeout)
  timeout = setTimeout(() => { location.reload() }, 300)
})