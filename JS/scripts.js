//styling the burger menu
function myFunction(x) {
    x.classList.toggle("change");
  }

  const menu = document.querySelector('#navbar');
  const burger = document.querySelector('.container');
  

  burger.addEventListener('click', e =>{
      //menu.style.display = "block";
      location.href = "navbar.html";
  })

 