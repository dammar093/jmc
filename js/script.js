

// login box show hide
let loginBtn=document.getElementById('login-btn');

loginBtn.addEventListener('click',(e)=>{
  e.stopPropagation();
  let loginbox =  document.querySelector('.login-box');
  loginbox.classList.toggle('login-box-display');
});


// humburger mene show and hide

let menu=document.getElementById('menu-bar');

menu.addEventListener('click',(e)=>{
  e.stopPropagation();
  let menuBox=document.querySelector('.mobile-menu');
  menuBox.classList.toggle('mobile-menu-display');
});