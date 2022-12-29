const buttonelement=document.querySelector(".btn");
buttonelement.addEventListener("mouseover",(event)=>{
    const x=event.pageX-buttonelement.offsetLeft;
    const y=event.pageY-buttonelement.offsetTop;
    buttonelement.style.setProperty("--xPos",x+ "px");
    buttonelement.style.setProperty("--yPos",y+ "px");
})