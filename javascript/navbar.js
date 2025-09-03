function menu() {
  // vars
  const menuList = document.getElementById('navbarList')
  const menuBtn = document.getElementById('navbarBtn')

  // menuList
  if (menuList.classList.contains('hidden')) {
    // toggle icon for btn
    menuBtn.classList.remove('bi-list')
    menuBtn.classList.add('bi-x-lg')
    // toggle display menu
    menuList.classList.remove('hidden')
    menuList.classList.add('show')
  } else {
    // toggle icon for btn
    menuBtn.classList.remove('bi-x-lg')
    menuBtn.classList.add('bi-list')
    // toggle display menu
    menuList.classList.remove('show')
    menuList.classList.add('closeMenu')
    setTimeout(() => {
      menuList.classList.remove("closeMenu");
      menuList.classList.add("hidden");
    }, 400)
  }
}