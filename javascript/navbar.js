function menu() {
  // get elements
  const navlink = document.getElementById("navbarList")

  // verify display mode
  if (navlink.style.display == "none") {
    // show menu links
    navlink.style.display = "inline-block"
  } else {
    // hode navbar link
    navlink.style.display = "none"
  }
}