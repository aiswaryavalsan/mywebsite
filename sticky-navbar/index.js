const navarel=document.querySelector(".navbar");
const bottomcontainerel=document.querySelector(".bottom-container");
window.addEventListener("scroll",()=>{
if(window.scrollY>bottomcontainerel.offsetTop-navarel.offsetHeight-50){
    navarel.classList.add("active");
}
else{
    navarel.classList.remove("active");
}

})