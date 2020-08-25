document.addEventListener("DOMContentLoaded", function(){

  const el = document.querySelector("#navbar-burger")
  el.addEventListener('click', function(){
    const  menu = document.querySelector("#navbar-menu")
    menu.classList.toggle("is-active")
  })

  const form = document.forms[0]

  form.addEventListener('submit', function(e){
    const desc = form.elements['description'].value
    const location = form.elements['location'].value
    let full_time = form.elements['full_time'].checked

    if (full_time){
      full_time = 'on'
    }else{
      full_time = ''
    }

    let url = `https://still-spire-37210.herokuapp.com/positions.json?description=${desc}&location=${location}&full_time=${full_time}`
  
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0])
      })
  })
})