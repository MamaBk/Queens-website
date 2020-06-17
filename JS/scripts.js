const btn = document.querySelector('.icon-menu');
const menu = document.querySelector('.mobile-menu');
let open = false;
//here is for the functionality of the navbar, i want that when you click the burger nav it opens the menu and the burger changes to a time(x)
btn.addEventListener('click', () => {
  if(!open){
    menu.style.left = 0;
    btn.innerHTML = '<i class="fas fa-times"></i>';
    open = true;
  } else {
    menu.style.left = '100vh'
    btn.innerHTML = '<i class="fas fa-bars"></i>';
    open = false;
  }
})