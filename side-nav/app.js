const sidenav = document.querySelector('#sidenav');
const sidenav_close = document.querySelector('#sidenav-close');
const hamburger = document.querySelector('#hamburger'); 

console.log("Working")
// Transition end change focus from ham to close and bck
sidenav.addEventListener('transitionend', e=>{
    
    const isOpen = document.location.hash === '#sidenav';
    isOpen ?  
    document.querySelector('#sidenav-close').focus(): 
    document.querySelector('#hamburger').focus();
    
})

window.addEventListener('keyup', event => {
    if (event.code === 'Escape') document.location.hash = '';
  })