document.addEventListener("DOMContentLoaded", function(){

  const el = document.querySelector("#navbar-burger")
  el.addEventListener('click', function(){
    const  menu = document.querySelector("#navbar-menu")
    menu.classList.toggle("is-active")
  })

  
  })
