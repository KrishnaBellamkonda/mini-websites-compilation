const app = ()=>{

    const controller = new ScrollMagic.Controller();
    
    new ScrollMagic.Scene({
        duration: "200%",
        triggerElement:'.about-me',
        triggerHook:0

    })
    .setPin('.about-me')
    .addIndicators()
    .addTo(controller);


};

app();