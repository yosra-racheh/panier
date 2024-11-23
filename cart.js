let iconCart=document.querySelector('icon-cart');
let closeBtn=document.querySelector('.carttab .close');
let body=document.querySelector('body');

iconCart.addEventListener('click',()=>{
    body.classList.toggle('activetabcart');
})
closeBtn.addEventListener('click',()=>{
    body.classList.toggle('activetabcart');
})
