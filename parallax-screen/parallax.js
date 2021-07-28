const app = ()=> {

function translateItem(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
};

window.addEventListener('scroll', ()=>{
    translateItem('#big-circle', window.scrollY, 0.5);
    translateItem('.small', window.scrollY, 0.8)
});

};

app();