let menu = document.querySelector('#menu-btn');
let navbarList = document.querySelector('.nav__list');
let cosa

menu.onclick=()=>{
    navbarList.classList.toggle('active');    
    
}

document.querySelector('#user').onclick=()=>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick=()=>{
    document.querySelector('.login-form-container').classList.remove('active');
}

document.querySelector("#truck").onclick=()=>{
    alert("mi carrito de compras")
    
}