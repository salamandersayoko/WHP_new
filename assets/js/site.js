const menuBtn = document.querySelector('[data-menu-button]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
if(menuBtn && mobileMenu){
  menuBtn.addEventListener('click',()=>{
    const open = mobileMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',open ? 'true':'false');
  });
}
document.querySelectorAll('.faq button').forEach(btn=>{
  btn.addEventListener('click',()=>btn.closest('.faq').classList.toggle('open'));
});
