const btn = document.querySelector('.icon-menu');
const menu = document.querySelector('.mobile-menu');
let open = false;

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